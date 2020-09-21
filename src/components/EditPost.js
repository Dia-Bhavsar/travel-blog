import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AddArticle.css'

function EditPost(props) {
    console.log("props", props)
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorname] = useState("");
    const [image, setImage] = useState("");



    const changeOnClick = e => {
        e.preventDefault();
        const articles = {
            title,
            article,
            authorname,
            image
        }

        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/articles?id=${props.match.params.id}`,
            data: articles
        })
            .then(res => alert(res.data))
            .catch(err => console.log(err))

        setTitle("");
        setAuthorname("");
        setImage("");
        setArticle("");
    }

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

    return (
        <div className="container ">
            <div class="col-sm-3"></div>
            <div className=" col-sm-6 addArticle">
                <h2>Update Blog</h2>
                <form onSubmit={changeOnClick} encType="multipart/form-data">
                    <div className="form-group">
                        {/* <label htmlFor="authorname">Author Name</label> */}
                        <input type="text" value={authorname} className="form-control" placeholder="Author Name"
                            onChange={e => setAuthorname(e.target.value)} />

                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="title">Title</label> */}
                        <input type="text" value={title} className="form-control" placeholder="Title"
                            onChange={e => setTitle(e.target.value)} />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="article">Article</label> */}
                        <textarea rows="5" value={article} type="text" className="form-control" placeholder="Article"
                            onChange={e => setArticle(e.target.value)}>

                        </textarea>
                    </div>
                    <div className="form-group">
                        <input type="text" value={image} className="form-control" placeholder="ImageURL/optional"
                            onChange={e => setImage(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col-sm-3"></div>
        </div>
    )
}

export default EditPost
