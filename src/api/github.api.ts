import axios from 'axios'

const { GITHUB_USER = 'facebook', GITHUB_REPO = 'react', GITHUB_TOKEN = null } = process.env

export const githubApi = axios.create({
  baseURL: `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}`,
  headers: GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {},
})
