import React, { Component } from "react";
import "./Photo.css";

export class Photo extends Component {
  handleClick = () => {
    const { photo, history } = this.props;
    history.push(`/photos/${photo.id}`);
  };
  render() {
    const { photo } = this.props;

    return (
      <div className="Photo" style={{ background: photo.color }}>
        <div onClick={this.handleClick} className="Photo-Layer"></div>
        <a href={photo.links.download}>
          <img src={photo.urls.small} alt={photo.alt_description} />
        </a>
        <div className="Photo-Info">
          <div className="Top-Icon">
            <p>
              <i className="far fa-heart"></i>
            </p>
            <p>
              <i className="far fa-plus-square"></i>
            </p>
          </div>
          <div className="User">
            <div className="User-Info">
              <a href={photo.user.links.html}>
                <img
                  className="Profile"
                  src={photo.user.profile_image.small}
                  alt={photo.user.name}
                />
              </a>
              <p className="Name">
                <a href={photo.user.links.html}>{photo.user.name}</a>
              </p>
            </div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={photo.links.download}
              className="Download"
            >
              <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Photo;
