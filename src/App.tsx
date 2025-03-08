import { useNews } from '../context/NewsContext';
import ArticleCard from './components/ArticleCard';
import Layout from './components/Layout';
import Loader from './components/Loader';
function App() {
  const { loading, articles } = useNews();
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col md:flex-row gap-4 w-full flex-wrap">
          {articles.length ? (
            articles.map((article) => <ArticleCard {...article} />)
          ) : (
            <p>no article found!!</p>
          )}
        </div>
      )}
    </Layout>
  );
}

export default App;
