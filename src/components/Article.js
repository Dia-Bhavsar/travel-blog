import React from 'react';
import './Article.css';

function Article({ posts }) {
    return (
        <div className="article">
            <h2>- LATEST POSTS -</h2>
            <div className="container bottomMargin">
                <h2>HIGHLIGHTS OF MY HOME COUNTRY – What I love about Ghent, Belgium</h2>
                <p>One of the cutest little towns I’ve ever seen! I ended up here on my way to the slightly more visited town of Comares – taking the small roads, of course! – and couldn’t help but stay a while. Cútar is small and I don’t even think there’s a hotel, but if you combine it with some of the other white villages of Málaga, it makes for an awesome day trip!</p>
                <img src="https://www.daylighted.com/blog/media/uploads/blog/6-853d5387dfae886ff85d14e6f61f16de.jpg" alt="image" />

                <div className="row">
                    <div className="col-sm-12 text-left">
                        <span className="authorname p-2"> - Dia Bhavsar</span>
                    </div>
                </div>

            </div>

            <div className="container bottomMargin">
                <h2>MORE (NOT SO) GLAMOUROUS MOMENTS ON THE ROAD</h2>
                <p>“Just breath slowly in and out and you’ll be fine”.
                Chong was holding my hand in the pitch black night as I tried to control my breathing. Our dim torches were the only source of light but they were enough to see that his eyes weren’t letting go of mine for even a second. “It’s just like normal breathing and we’re almost there”, he said, with his soft reassuring voice.</p>

                <img src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2015/06/travel-photography-career-sahara-morocco-camels-hillary-fox.jpg" alt="image" />
                <div className="row">
                    <div className="col-sm-12 text-left">
                        <span className="authorname p-2"> - Dia Bhavsar</span>
                    </div>
                </div>

            </div>

            <div className="container bottomMargin">
                <h2>Butterfly valley of Petaloudes, Rhodes, Greece</h2>
                <p>Beautiful nature and butterflies everywhere, that’s what you get in the Valley of the Butterflies in Rhodes. Most people visit the park, which is not that unknown or hidden and has an entrance fee, but there’s a few places outside of the actual park that are just as beautiful and where you can wander around freely and – most of the time – alone. Just ask the locals, they’ll tell you where to go.

In order not to disturb the butterflies, try to be as silent as possible and keep some distance.</p>

                <img src="https://s23527.pcdn.co/wp-content/uploads/2019/01/Aquamarine.jpg.optimal.jpg" alt="image" />
                <div className="row">
                    <div className="col-sm-12 text-left">
                        <span className="authorname p-2"> - Dia Bhavsar</span>
                    </div>
                </div>

            </div>


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
