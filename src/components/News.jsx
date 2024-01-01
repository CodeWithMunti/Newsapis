import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinners from "./Spinners";
// import PropTypes from "prop-types";

export class News extends Component {
  // How to define propTypes in class base components
  // static defaultProps = {
  //   country: "us",
  //   pageSize: 8,
  //   category: "business",
  // };
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `NewsApp - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }
  update = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb880a2f2fac4fcb94854e24ad2b6fae&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  };
  // CDM is a lifesycle methode it will mont after the rendering the jsx with some functionality like fetch api to fetch the data of the news apis
  async componentDidMount() {
    // console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb880a2f2fac4fcb94854e24ad2b6fae&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.update();
  }

  handlePrevClick = async () => {
    // console.log("i am next");
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=fb880a2f2fac4fcb94854e24ad2b6fae&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // // console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      // articles: parseData.articles,
      // loading: false,
    });
    this.update();
  };

  handleNextClick = async () => {
    // console.log("i am next");
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    // }
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=fb880a2f2fac4fcb94854e24ad2b6fae&page=${
    //   this.state.page + 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });

    // let data = await fetch(url);
    // let parseData = await data.json();
    // // // console.log(parseData);
    this.setState({
      page: this.state.page + 1,
      // articles: parseData.articles,
      // loading: false,
    });
    this.update();
  };
  render() {
    // console.log("render");
    return (
      <>
        <div className="container my-3">
          <div className="text-center">
            <h2>
              NewsApp - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
              Headlines
            </h2>
          </div>
          {this.state.loading && <Spinners />}

          <div className="row my-3">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 30) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      author={element.author}
                      publishedAt={element.publishedAt}
                      urlToImage={element.urlToImage}
                      url={element.url}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="container my-2 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
