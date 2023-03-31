import { Component } from "react";
import ArticleList from "./components/ArticleList";
import { getArticles } from "./services/articles";

class App extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const articles = await getArticles();
      this.setState({ articles });
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  validateArticles = ({ loading, articles, error }) => {
    if (loading) {
      return <h1>Loading</h1>;
    } else if (articles.length > 0) {
      return <ArticleList articles={articles} />;
    } else if (error) {
      return <h1>Try later</h1>;
    }
    return <h1>The list is empty</h1>;
  };

  render() {
    return this.validateArticles(this.state);
  }
}

export default App;
