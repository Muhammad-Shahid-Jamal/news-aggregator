import useNews from '../hooks/useNews';
function App() {
  const hook = useNews('technology');
  console.log(hook.articles);
  return (
    <>
      <h1 className="text-lg text-indigo-500 bg-red-800">Shahid</h1>
    </>
  );
}

export default App;
