import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
  width: 300px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0051a2;
  }
`;

export default function Home() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      router.push(`/repos/${username}`);
    }
  };

  return (
    <Container>
      <Title>GitHub Repository Explorer</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <Button type="submit">Explore Repositories</Button>
      </Form>
    </Container>
  );
}
