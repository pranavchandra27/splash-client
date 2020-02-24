import React from "react";
import Photos from "./components/Photos/Photos";
import SearchPhotos from "./components/Search/SearchPhotos";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PhotoProvider } from "./context/PhotoContext";
import { PhotoSearchProvider } from "./context/PhotoSearchContext";
import { CollectionsProvider } from "./context/CollectionsContext";
import Collections from "./components/Collections/Collections";
import PhotoModal from "./components/PhotoModal";
import CollectionPhotos from "./components/Collections/CollectionPhotos";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <PhotoProvider>
          <PhotoSearchProvider>
            <CollectionsProvider>
              <Route component={Navbar} />
              <Switch>
                <Route exact path="/" component={Photos} />
                <Route path="/photos/:id" component={PhotoModal} />
                <Route exact path="/s/photos/:id" component={SearchPhotos} />
                <Route exact path="/collections" component={Collections} />
                <Route
                  exact
                  path="/collections/:id/:name"
                  component={CollectionPhotos}
                />
              </Switch>
            </CollectionsProvider>
          </PhotoSearchProvider>
        </PhotoProvider>
      </div>
    </Router>
  );
}

export default App;
