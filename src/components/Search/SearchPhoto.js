import React, { Component } from "react";
import "./SearchPhoto.css";

export class SearchPhoto extends Component {
  render() {
    const { photo, history } = this.props;
    return (
      <div className="SearchPhoto" style={{ background: photo.color }}>
        <div
          onClick={() => history.push(`/photos/${photo.id}`)}
          className="Photo-Layer"
        ></div>
        <a href={photo.links.small}>
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
            <a href={photo.links.download} className="Download">
              <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPhoto;
