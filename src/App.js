import "./App.css";
import { useEffect, useState, useRef, useCallback } from "react";
import ProductCard from "./components/ProductCard";
import { PAGE_SIZE } from "./constant";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  const fetchData = async (page) => {
    const skip = page * PAGE_SIZE;
    const res = await fetch(
      `https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}`
    );
    const data = await res.json();
    if (data.products.length > 0) {
      setProducts((prev) => [...prev, ...data.products]);
    }
    if (data.products.length < PAGE_SIZE) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        setCurrentPage((prev) => prev + 1);
      }
    },
    [hasMore]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [handleObserver]);

  return (
    <div className="App">
      <h1>Infinite Scrolling Using React</h1>
      <div className="products-container">
        {products.map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
      {hasMore && (
        <div ref={loader} className="loading">
          Loading more...
        </div>
      )}
      {!hasMore && <div className="end-msg">No more products</div>}
    </div>
  );
}

export default App;
