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
                <img srcSet={photo.urls.small} alt={photo.alt_description} />
              </div>
            ))}
          </Masonry>
        </InfiniteScroll>
      </div>
    );
  }
}

export default CollectionPhotos;
