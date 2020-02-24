import React, { Component } from "react";
import "./Collection.css";

export class Collection extends Component {
  handleClick = () => {
    const { collection, history } = this.props;
    history.push(`/collections/${collection.id}/${collection.title}`);
  };
  render() {
    const { collection } = this.props;
    return (
      <div className="Collection">
        <div className="Card">
          <div onClick={this.handleClick} className="Card-Layer"></div>
          <div className="Cover-Photo">
            <img
              src={collection.preview_photos[0].urls.small}
              alt={collection.cover_photo.alt_description}
            />
          </div>
          <div className="Preview-Photo">
            <img
              src={collection.preview_photos[1].urls.small}
              alt={collection.cover_photo.alt_description}
            />
            <img
              src={collection.preview_photos[2].urls.small}
              alt={collection.cover_photo.alt_description}
            />
          </div>
        </div>
        <div className="Collection-Info">
          <h4 onClick={this.handleClick} className="Title">
            {collection.title}
          </h4>
          <p className="Subtitle">
            {collection.total_photos} photos - Curated by {collection.user.name}
          </p>
        </div>
      </div>
    );
  }
}

export default Collection;
