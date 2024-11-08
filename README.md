# Github Star Counter

Generated with Bolt, with the following prompt:

I'd like to create an Next.js site where a user enters a github account name on the mainpage and then is presented with a page with cards for each project.
Per project, we want to see the name, the amount of stars, the amount of open issues and the amount of open PR's.
The cards can be sorted with a dropdown, with the options: stars, issues and pull requests. The cards are sorted from most to least of the selected item.
Make the site visually attractive and think about usability.
The API to use is this one at github:
https://api.github.com/users/[username]/repos.

## Get an API key for Github:

To get a GitHub API key (often referred to as a “Personal Access Token” or PAT), follow these steps:
1.	Log in to GitHub:
  - Go to GitHub and log in to your account.
2.	Access Developer Settings:
	- In the upper-right corner of any GitHub page, click on your profile picture and select Settings from the dropdown.
  - On the left sidebar, scroll down to Developer settings and click it.
3.	Generate a New Token:
  - Under Developer settings, go to Personal access tokens > Tokens (classic), then click Generate new token.
	- If you’re using the GitHub REST API, the classic tokens work well. Alternatively, you could explore Fine-grained tokens for more specific access control (these are currently in beta).
4.	Configure Your Token:
	- Name the Token: Give it a descriptive name so you can easily recognize its purpose later.
	- Expiration: Set an expiration date for security. Shorter periods (e.g., 30 or 90 days) are safer, but choose based on your needs.
	- Select Scopes: Choose the appropriate permissions (or scopes) for what you need. For example:
	- repo: Access to repositories.
	- workflow: Access to GitHub Actions.
	- admin:org: Access to organization settings (if required).
	- Only select the scopes you need, as fewer permissions reduce potential security risks.
5.	Generate and Copy the Token:
	- Click Generate token at the bottom of the page.
	- Copy the token immediately and store it in a secure place (like a password manager) as you won’t be able to view it again.
6.	Use Your Token:
	- Put it in a .env.local file

```
NEXT_PUBLIC_GITHUB_ACCESS_TOKEN=your_github_access_token
```

## Install NPM sjit

```
pnpm install
```

## Run the app

```
pnpm run dev
```



