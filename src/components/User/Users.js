import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.fetchUser();
  }
  fetchUser = async () => {
    const { match } = this.props;
    await axios
      .get(`/users?username=${match.params.username}`)
      .then(res => this.setState({ user: res.data }));
    console.log(this.state.user);
  };
  render() {
    const { user } = this.state;
    return !user.name ? (
      ""
    ) : (
      <div className="User">
        <div className="User-Data d-flex justify-content-center mt-5">
          <div className="mr-5">
            <img
              className="rounded-circle"
              src={user.profile_image.large}
              alt={user.name}
            />
          </div>
          <div className="">
            <h1>{user.name}</h1>
            <div className="d-flex text-secondary">
              <p>
                <i className="fas fa-map-marker-alt"></i> {user.location}
              </p>
              <p className="ml-5">
                <i className="fab fa-instagram"></i> instagram.com/
                {user.instagram_username}
              </p>
            </div>
            <p>{user.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
