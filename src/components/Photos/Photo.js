import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Photo.css";

export class Photo extends Component {
  render() {
    const { photo, history } = this.props;

    return (
      <div className="Photo" style={{ background: photo.color }}>
        <div
          onClick={() => {
            history.push(`photos/${photo.id}`);
          }}
          className="Photo-Layer"
        >
          <a href={photo.urls.small}></a>
        </div>
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
                <Link to={`/user/${photo.user.username}`}>
                  {photo.user.name}
                </Link>
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
