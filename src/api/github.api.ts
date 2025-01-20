import axios from 'axios'

const { GITHUB_USER, GITHUB_REPO, GITHUB_TOKEN } = process.env

export const githubApi = axios.create({
  baseURL: `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}`,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
})
