import React, { Component } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "tw",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      newArticles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      totalPagess: 0,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ababd676b6fd4689a4e4a275d850403b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url).then(function (response) {
      return response.json();
    });
    this.setState({
      newArticles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    });

    console.log(data);
  }

  handNextPage = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=ababd676b6fd4689a4e4a275d850403b&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;

      let data = await fetch(url).then(function (response) {
        return response.json();
      });
      this.setState({
        newArticles: data.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  handlePreviousPage = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=ababd676b6fd4689a4e4a275d850403b&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;

    let data = await fetch(url).then(function (response) {
      return response.json();
    });
    this.setState({
      newArticles: data.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handTitleText(txt) {
    return txt ? (txt.length > 40 ? txt.slice(0, 39) + "..." : txt) : "";
  }

  handTitleDecscription(txt) {
    return txt ? (txt.length > 40 ? txt.slice(0, 39) + "..." : txt) : "";
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">This is News Component</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.newArticles.map((element) => {
              return (
                <div className="col-lg-3 col-md-6 m-3" key={element.title}>
                  <NewItem
                    title={this.handTitleText(element.title)}
                    description={this.handTitleDecscription(
                      element.description
                    )}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            onClick={this.handlePreviousPage}
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              this.state.page >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handNextPage}
            type="button"
            className="btn btn-primary"
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
