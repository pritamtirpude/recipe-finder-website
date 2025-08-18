import { Route, Routes } from 'react-router';
import { About, Home, RecipeDetails, Recipes } from './pages';
import Layout from './routes/Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:slug" element={<RecipeDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
