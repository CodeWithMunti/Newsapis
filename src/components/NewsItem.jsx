import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const { title, description, urlToImage, url, author, publishedAt } =
      this.props;
    return (
      <div className="card my-2">
        <img
          src={
            !urlToImage
              ? "https://ychef.files.bbci.co.uk/624x351/p0h0m1dp.jpg"
              : urlToImage
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small>
              <b>
                By {!author ? "Unknown" : author} On{" "}
                {new Date(publishedAt).toGMTString()}
              </b>
            </small>
          </p>
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
