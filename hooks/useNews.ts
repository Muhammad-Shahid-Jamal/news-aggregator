import { useEffect, useState } from 'react';
import {
  fetchNewsAPIArticles,
  fetchGuardianArticles,
  fetchNYTArticles,
} from '../services/newsService';
type HookReturnType = {
  articles: any[];
  loading: boolean;
  error: string | null;
};
const useNews = (query: string): HookReturnType => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const [newsApi, guardian, nyt] = await Promise.all([
          fetchNewsAPIArticles(query),
          fetchGuardianArticles(query),
          fetchNYTArticles(query),
        ]);
        console.log(newsApi, guardian, nyt);
        setArticles([...newsApi]);
      } catch (error) {
        setError('failed to fetch news articles');
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [query]);
  return { articles, loading, error };
};

export default useNews;
