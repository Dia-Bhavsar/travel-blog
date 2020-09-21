import React from 'react';
import './Article.css';

function Article({ posts }) {
    return (
        <div className="article">
            <h2>- LATEST POSTS -</h2>
            {posts.map((article) => (
                <div className="container bottomMargin">
                    <h2>{article.title}</h2>
                    <p>{article.article}</p>
                    <img src={article.image} alt="image" />

                    <div className="row">
                        <div className="col-sm-12 text-left">
                            <span className="authorname p-2"> - {article.authorname}</span>
                        </div>
                    </div>

                </div>
            ))}


        </div>
    )
}

export default Article
