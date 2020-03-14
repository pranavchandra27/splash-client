import React, { Component } from "react";
import { PhotoSearchContext } from "../../context/PhotoSearchContext";
import "./SearchPhoto.css";
import { Link } from "react-router-dom";

export class SearchPhoto extends Component {
  static contextType = PhotoSearchContext;

  handleClick = async title => {
    const { history } = this.props;
    const { photos, setQuery, fetchPhotos } = this.context;
    await setQuery(title);
    photos.splice(0, photos.length);
    fetchPhotos();
    history.push(`/s/photos/${title}`);
  };
  render() {
    const { photo, history } = this.props;
    const { photos, setQuery, fetchPhotos } = this.context;
    return (
      <div className="SearchPhoto">
        <div className="SearchPhoto-Photo">
          <div
            onClick={() => history.push(`/photos/${photo.id}`)}
            className="Photo-Layer"
          ></div>
          <div
            className="SearchPhoto-Photo"
            style={{ background: photo.color }}
          >
            <img src={photo.urls.small} alt={photo.alt_description} />
          </div>
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
              <div className="User-Info m-0">
                <Link to={`/user/${photo.user.username}`}>
                  <img
                    className="Profile"
                    src={photo.user.profile_image.small}
                    alt={photo.user.name}
                  />
                </Link>
                <p className="Name">
                  <Link to={`/user/${photo.user.username}`}>
                    {photo.user.name}
                  </Link>
                </p>
              </div>
              <a href={photo.links.download} className="Download">
                <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-nowrap text-dark text-truncate">
            {photo.alt_description}
          </p>
          {photo.tags.map((tag, i) => (
            <button
              key={i}
              onClick={async () => {
                await setQuery(tag.title);
                photos.splice(0, photos.length);
                fetchPhotos();
                history.push(`/s/photos/${tag.title}`);
              }}
              className="btn btn-light tag mr-2"
            >
              {tag.title}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPhoto;
