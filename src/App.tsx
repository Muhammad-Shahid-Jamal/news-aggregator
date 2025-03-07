import useNews from '../hooks/useNews';
import Layout from './components/Layout';
function App() {
  const hook = useNews('technology');
  console.log(hook.articles);
  return (
    <Layout>
      <h1 className="text-lg text-indigo-500 bg-red-800">Shahid</h1>
    </Layout>
  );
}

export default App;
