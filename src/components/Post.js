import React, { useState, useEffect } from 'react'
import './Post.css'
import axios from 'axios'

function Post(props) {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorname] = useState("");
    const [image, setImage] = useState("");


    useEffect(() => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/articles?id=${props.match.params.id}`
        })
            .then(res => [
                setTitle(res.data.title),
                setArticle(res.data.article),
                setAuthorname(res.data.authorname),
                setImage(res.data.image),
            ])
             
            .catch(err => console.log(err))
    }, [props])
    console.log("data", title,image,article )
    return (
      
        <div className="post">
            <h2>{title}</h2>
            <p>{article}</p>
            <span>{authorname}</span>
            <img src={image} alt="image" />
        </div>
    )
}

export default Post
