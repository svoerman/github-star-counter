import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const RepoName = styled.h2`
  font-size: 1.5rem;
  color: #0070f3;
  margin-bottom: 1rem;
`;

const Stat = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
`;

interface Repo {
  id: number;
  name: string;
  stargazers_count: number;
  open_issues_count: number;
  pulls_count: number;
  pulls_url: string;
}

interface GitHubApiRepo {
  id: number;
  name: string;
  stargazers_count: number;
  open_issues_count: number;
  pulls_url: string;
}

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

const headers = GITHUB_TOKEN
  ? { Authorization: `token ${GITHUB_TOKEN}` }
  : {};

export default function ReposPage() {
  const router = useRouter();
  const { username } = router.query;
  const [repos, setRepos] = useState<Repo[]>([]);
  const [sortBy, setSortBy] = useState('stars');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (username) {
      fetchRepos();
    }
  }, [username]);

  const fetchRepos = async () => {
    setIsLoading(true);
    setError(null);
    
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json'
    };

    // Add authorization header if token exists
    if (GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
    }
    
    try {
      const response = await axios.get<GitHubApiRepo[]>(
        `https://api.github.com/users/${username}/repos`,
        { headers }
      );
      
      const reposData: Repo[] = await Promise.all(
        response.data.map(async (repo) => {
          try {
            const pullsResponse = await axios.get<any[]>(
              repo.pulls_url.replace('{/number}', ''),
              { headers }
            );
            
            return {
              id: repo.id,
              name: repo.name,
              stargazers_count: repo.stargazers_count,
              open_issues_count: repo.open_issues_count,
              pulls_count: pullsResponse.data.length,
              pulls_url: repo.pulls_url
            };
          } catch (error) {
            return {
              id: repo.id,
              name: repo.name,
              stargazers_count: repo.stargazers_count,
              open_issues_count: repo.open_issues_count,
              pulls_count: 0,
              pulls_url: repo.pulls_url
            };
          }
        })
      );
      
      setRepos(reposData);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.status === 403
            ? 'Rate limit exceeded. Please try again later or add a valid GitHub token.'
            : error.response?.status === 404
            ? 'User not found'
            : 'Error fetching repositories'
        );
      } else {
        setError('An unexpected error occurred');
      }
      console.error('Error fetching repos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortBy === 'stars') return b.stargazers_count - a.stargazers_count;
    if (sortBy === 'issues') return b.open_issues_count - a.open_issues_count;
    if (sortBy === 'pulls') return b.pulls_count - a.pulls_count;
    return 0;
  });

  return (
    <Container>
      <Header>
        <Title>{username}'s Repositories</Title>
        <Select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="Sort repositories by"
        >
          <option value="stars">Sort by Stars</option>
          <option value="issues">Sort by Issues</option>
          <option value="pulls">Sort by Pull Requests</option>
        </Select>
      </Header>

      {isLoading && <p>Loading repositories...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {!isLoading && !error && (
        <CardGrid>
          {sortedRepos.map((repo) => (
            <Card key={repo.id}>
              <RepoName>{repo.name}</RepoName>
              <Stat>Stars: {repo.stargazers_count}</Stat>
              <Stat>Open Issues: {repo.open_issues_count}</Stat>
              <Stat>Open PRs: {repo.pulls_count}</Stat>
            </Card>
          ))}
        </CardGrid>
      )}
    </Container>
  );
}
