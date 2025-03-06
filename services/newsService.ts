import type { FetchNewsFunctionParam } from '../types/news';

const NEWS_API_KEY = import.meta.env.VITE_REACT_APP_NEWS_API_KEY;
const GUARDIAN_API_KEY = import.meta.env.VITE_REACT_APP_GUARDIAN_API_KEY;
const NYT_API_KEY = import.meta.env.VITE_REACT_APP_NYT_API_KEY;

const fetchArticles = async (url: string, extractData: (json: any) => any) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const json = await response.json();
    return extractData(json);
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export const fetchNewsAPIArticles = ({
  query,
  category,
  fromDate,
}: FetchNewsFunctionParam) => {
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`;
  return fetchArticles(url, (json) => json.articles);
};

export const fetchGuardianArticles = ({
  query,
  category,
  fromDate,
}: FetchNewsFunctionParam) => {
  const url = `https://content.guardianapis.com/search?q=${query}&api-key=${GUARDIAN_API_KEY}`;
  return fetchArticles(url, (json) => json.response.results);
};

export const fetchNYTArticles = ({
  query,
  category,
  fromDate,
}: FetchNewsFunctionParam) => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${NYT_API_KEY}`;
  return fetchArticles(url, (json) => json.response.docs);
};
