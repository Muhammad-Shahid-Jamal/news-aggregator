import React, { createContext, useContext, useEffect, useState } from 'react';
import fetchArticles from '../services/newsService';
import useFilters from '../hooks/useFilters';
import type { FilterState } from '../hooks/useFilters';
import type { Article } from '../types/article';

type NewsContextType = {
  query: string;
  filters: FilterState;
  articles: any[];
  loading: boolean;
  setQuery: (query: string) => void;
  handleFilterChange: (name: keyof FilterState, value: string) => void;
};

// Create Context
const NewsContext = createContext<NewsContextType | undefined>(undefined);

// Provider Component
export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState('Technology');
  const { filters, handleFilterChange } = useFilters();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  //   const handleFilterChange = (newFilters: Partial<FilterState>) => {
  //     setFilters((prev) => ({
  //       ...prev, // Preserve previous values
  //       ...newFilters, // Merge updated values
  //     }));
  //   };
  // Fetch articles when filters or query change
  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      console.log({ query, ...filters });
      const results = await fetchArticles({ query, ...filters });
      setArticles(results);
      setLoading(false);
    };

    loadArticles();
  }, [query, filters]);

  return (
    <NewsContext.Provider
      value={{
        query,
        filters,
        articles,
        loading,
        setQuery,
        handleFilterChange,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

// Custom Hook to use the context
export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error('useNews must be used within a NewsProvider');
  return context;
};
