import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Admin.css';
import axios from 'axios'

function Admin({ posts }) {
    const [article, setArticle] = useState([])

    const deleteArticle = id => {
        axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API}/articles?id=${id}`
        })
            .then(res => alert(res.data))
             setArticle(article.filter(ele => ele._id !== id))
           
    };
    return (
        <div className="admin">
            <h1 className="admin__headingPost" >Manage Post</h1>
            {posts.map((article) => (
                <div className="admin__post bottomMargin">
                    <div className="admin__article">
                        <Link to={{ pathname: `/post/${article._id}` }}>
                            <h4>{article.title}</h4>
                        </Link>
                        <p>{article.article}</p>
                        <div className="row">
                            <div className="col-sm-12 text-left">
                                <span className="authorname p-2">- {article.authername}</span>
                            </div>
                        </div>
                    </div>
                    <img src={article.image} alt="image" />

                    <div className="admin__actionButton">
                        <div className="admin__edit">
                            <Link to={{ pathname: `/edit-post/${article._id}` }}>
                                <i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <div className="admin__delete">
                            <a onClick={() => deleteArticle(article._id)}>
                                <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                </div>
            ))}


        </div>
    )
}

export default Admin
