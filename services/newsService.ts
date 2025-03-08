import type { FetchNewsFunctionParam } from '../types/news';
import type { Article } from '../types/article';

const NEWS_API_KEY = import.meta.env.VITE_REACT_APP_NEWS_API_KEY;
const GUARDIAN_API_KEY = import.meta.env.VITE_REACT_APP_GUARDIAN_API_KEY;
const NYT_API_KEY = import.meta.env.VITE_REACT_APP_NYT_API_KEY;

const fetchArticlesCalls = async (
  url: string,
  extractData: (json: any) => any
) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const json = await response.json();
    return extractData(json);
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
    return [];
  }
};

const formatDate = (date: string) => date.replace(/-/g, '');

const fetchArticles = async ({
  query,
  category,
  source,
  date,
}: FetchNewsFunctionParam): Promise<Article[]> => {
  try {
    const requests = [];
    if (source === 'All' || source.toLowerCase() === 'newsapi') {
      const params = new URLSearchParams({
        q: query + ' AND ' + category,
        apiKey: NEWS_API_KEY,
        to: date,
      });
      const url = `https://newsapi.org/v2/everything?${params.toString()}`;
      requests.push(
        fetchArticlesCalls(url, (json) => {
          return json.articles?.map((article: any) => ({
            title: article.title,
            description: article.description,
            url: article.url,
            author: article.author || 'Unknown',
            source: 'News Api',
            publishedAt: article.publishedAt,
            imageUrl:
              article.urlToImage !== null
                ? article.urlToImage
                : 'https://placehold.co/600x400',
          }));
        })
      );
    }
    if (source === 'All' || source.toLowerCase() === 'guardian') {
      const params = new URLSearchParams({
        q: query,
        format: 'json',
        'from-date': date,
        'to-date': date,
        'show-elements': 'all',
        'api-key': GUARDIAN_API_KEY,
      });
      const url = `https://content.guardianapis.com/search?${params.toString()}`;
      requests.push(
        fetchArticlesCalls(url, (json) => {
          return json.response.results?.map((article: any) => ({
            title: article.webTitle,
            description: 'No description available',
            url: article.webUrl,
            source: 'The Guardian',
            author: 'Unknown',
            publishedAt: article.webPublicationDate,
            imageUrl: article?.elements[0]?.assets[0]?.file, // Guardian API does not provide images in search results
          }));
        })
      );
    }
    if (source === 'All' || source.toLowerCase() === 'new york times') {
      const params = new URLSearchParams({
        q: query,
        'api-key': NYT_API_KEY,
        fq: `section_name:("${category}")`,
        end_date: formatDate(date),
      });
      const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?${params.toString()}`;
      requests.push(
        fetchArticlesCalls(url, (json) =>
          json.response.docs?.map((article: any) => ({
            title: article.headline.main,
            description: article.abstract || 'No description available',
            url: article.web_url,
            source: 'New York Times',
            author: article.byline?.original || 'Unknown',
            publishedAt: article.pub_date,
            imageUrl: article.multimedia?.length
              ? `https://www.nytimes.com/${article.multimedia[0].url}`
              : 'https://placehold.co/600x400',
          }))
        )
      );
    }
    const results = await Promise.all(requests);
    return results.flat();
    return [];
  } catch (error) {
    console.error('Error fetching articles', error);
    return [];
  }
};
export default fetchArticles;
