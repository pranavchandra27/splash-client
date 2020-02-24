import React, { Component } from "react";
import axios from "axios";
import Masonry from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner/Spinner";
import "./CollectionPhotos.css";

export class CollectionPhotos extends Component {
  state = {
    photos: [],
    page: 1
  };

  componentDidMount() {
    this.fetchCollectionPhotos();
  }

  addPhotos = data => {
    this.setState({ photos: this.state.photos.concat(data) });
  };

  fetchCollectionPhotos = async () => {
    const { match } = this.props;
    const { page } = this.state;

    await axios
      .get(
        `http://localhost:5000/collections/${match.params.id}?id=${match.params.id}&page=${page}`
      )
      .then(res => this.addPhotos(res.data));
    this.setState({ page: page + 1 });
  };

  render() {
    const { history } = this.props;
    const { photos } = this.state;
    return (
      <div className="CollectionPhotos">
        <InfiniteScroll
          dataLength={photos.length}
          hasMore={true}
          next={this.fetchCollectionPhotos}
          loader={<Spinner />}
        >
          <Masonry
            className={"Collection-Grid"}
            options={{
              gutter: 20,
              fitWidth: true
            }}
          >
            {photos.map(photo => (
              <div className="Collection-Photo" key={photo.id}>
                <div
                  onClick={() => history.push(`/photos/${photo.id}`)}
                  className="Photo-Layer"
                ></div>
                <img srcSet={photo.urls.small} alt={photo.alt_description} />
                <div className="Collection-Photo-Info">
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
            ))}
          </Masonry>
        </InfiniteScroll>
      </div>
    );
  }
}

export default CollectionPhotos;
