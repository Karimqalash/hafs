import React from 'react';
import ArticlesContainer from './ArticlesContainer';

const ArticlesPage = () => {
    return (
        <div className="articles__wrapper">
            <div className="main-hafs-header articles-header">
                <div className="hafs-header-overlay">
                    <div className="hafs-header-content">
                        <h1>
                            Articles
                        </h1>
                    </div>
                </div>
            </div>
            {/*<img src="img/upper.png" alt="articles page" />*/}
            <ArticlesContainer />
        </div>  
    );
}

export default ArticlesPage;