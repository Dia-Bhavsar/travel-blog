import React, { useState, useEffect } from 'react';
import './App.css';
import Article from './components/Article';
import AddArticle from './components/AddArticle';
import Post from './components/Post';
import Footer from './components/layout/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Admin from './components/Admin';
import EditPost from './components/EditPost';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/articles`
    })
      .then(res => setPosts(res.data))
      .catch(err => console.log(err))
  }, [])


  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact render={() =>
            <Article posts={posts} />
          }
          />

          <Route path="/post/:id" render={(props) =>
            <Post {...props} posts={posts} />
          }
          />

          <Route path="/admin" exact render={() =>
            <Admin
              posts={posts}
            />}
          />
          <Route path="/addpost" exact component={AddArticle} />

          <Route path="/edit-post/:id" render={(props) =>
            <EditPost {...props} posts={posts} />
          }
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
