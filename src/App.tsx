import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './Views/HomeView';
import ContactsView from './Views/ContactsView';
import NotFoundView from './Views/NotFoundView';
import CategoriesView from './Views/CategoriesView';
import ProductView from './Views/ProductView';
import SearchView from './Views/SearchView';
import CompareView from './Views/CompareView';
import SavedView from './Views/SavedView';
import CartView from './Views/CartView';
import ProductDetailView from './Views/ProductDetailView';
import ProductProvider from './contexts/ProductContext';

function App() {



  return (
    <BrowserRouter>
      <ProductProvider>

          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/categories" element={<CategoriesView />} />
            <Route path="/products" element={<ProductView />} />
            <Route path="/contacts" element={<ContactsView />} />
            <Route path="/search" element={<SearchView />} />
            <Route path="/compare" element={<CompareView />} />
            <Route path="/Saved" element={<SavedView />} />
            <Route path="/Cart" element={<CartView />} />
            <Route path="*" element={<NotFoundView />} />
            <Route path="products/:id" element={<ProductDetailView/>} />
          </Routes>

      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
