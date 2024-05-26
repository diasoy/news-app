import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../Navbar";
import Container from "../Container";
import NewsList from "../NewsList";
import Loading from "../Loading";
import Error from "../Error";

import { getNews } from "../services/getNews";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const DEFAULT_SEARCH_QUERY = "technology";

  useEffect(() => {
    const fetchTechNews = async () => {
      setLoading(true);
      const res = await getNews({
        searchQuery: id || DEFAULT_SEARCH_QUERY,
      });

      if (!res) {
        setLoading(false);
        setError(true);
        return;
      }

      setLoading(false);
      setArticles(res.articles);
    };

    fetchTechNews();
  }, [id]);

  return (
    <>
      <Navbar />
      <Container>
        {loading && <Loading />}
        {error && <Error />}
        {!loading && articles.length > 0 && <NewsList articles={articles} />}
      </Container>
    </>
  );
}

export default App;
