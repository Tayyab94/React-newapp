import React, { Component } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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

  // CapetalizeFirstCharator = (string) => {
  //   return string.CharAt(0).toUpperCase() + string.slice(1);
  // };
  constructor(props) {
    super(props);
    this.state = {
      newArticles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      totalPagess: 0,
    };
    document.title = `${this.props.category} - NewsMoney`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url).then(function (response) {
      return response.json();
    });
    this.setState({
      newArticles: this.state.newArticles.concat(data.articles),
      totalResults: data.totalResults,
    });

    console.log(data);
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=1&pageSize=${this.props.pageSize}`;
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

    // this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });

    this.updateNews();
  };

  handTitleText(txt) {
    return txt ? (txt.length > 40 ? txt.slice(0, 39) + "..." : txt) : "";
  }

  handTitleDecscription(txt) {
    return txt ? (txt.length > 40 ? txt.slice(0, 39) + "..." : txt) : "";
  }

  render() {
    return (
      <div className="my-3">
        <h1 className="text-center">This is News Component</h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.newArticles.length}
          next={this.fetchMoreData}
          hasMore={this.state.newArticles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.newArticles.map((element) => {
                return (
                  <div className="col-lg-3 col-md-6 m-3" key={element.title}>
                    <NewItem
                      title={this.handTitleText(element.title)}
                      description={this.handTitleDecscription(
                        element.description
                      )}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      data={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
