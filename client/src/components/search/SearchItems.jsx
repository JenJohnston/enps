import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';

import { ModalContext } from '../../context/ModalContext';

function BlogResultItems({ blog }) {
    const { closeSearchModal } = useContext(ModalContext);
    return (
        <Link
            to={`/blogs/${blog.slug.current}`}  
            onClick={() => closeSearchModal()}
            className="modalSearch__blog"
        >
            <GatsbyImage
                image={blog.coverImage.asset.gatsbyImageData}
                alt={blog.coverImage.alt}
                className="modalSearch__img"
            />
            <div className="modalSearch__searchContent">
                <h3>{blog.title}</h3>
                <p>
                {format(new Date(blog.publishedOn), 'p, MMMM dd, yyyy')}
                </p>
            </div>
        </Link>
    )
}

function CategoryResultItems({ category }) {
    const { closeSearchModal } = useContext(ModalContext);
    return (
        <Link
            to={`/category/${category.slug.current}`}  
            onClick={() => closeSearchModal()}
            className="modalSearch__category"
        >
            <div className="modalSearch__searchContent">
                <h3>{category.title}</h3>
            </div>
        </Link>
    )
}

function VolunteerResultItems({ volunteer }) {
    const { closeSearchModal } = useContext(ModalContext);
    return (
        <Link
            to={`/volunteer/${volunteer.slug.current}`}  
            onClick={() => closeSearchModal()}
            className="modalSearch__volunteer"
        >
            <GatsbyImage
                image={volunteer.coverImage.asset.gatsbyImageData}
                alt={volunteer.coverImage.alt}
                className="modalSearch__img"
            />
            <div className="modalSearch__searchContent">
                <h3>{volunteer.title}</h3>
            </div>
        </Link>
    )
}

function NewsResultItems({ news }) {
    const { closeSearchModal } = useContext(ModalContext);
    return (
        <Link
            to={`/news/${news.wildflowerpdf.asset.url}`}  
            onClick={() => closeSearchModal()}
            className="modalSearch__news"
        >
            <GatsbyImage
                image={news.previewImage.asset.gatsbyImageData}
                alt={news.previewImage.alt}
                className="modalSearch__img"
            />
            <div className="modalSearch__searchContent">
                <h3>{ news.title}</h3>
                <p>
                {format(new Date(news.publishedOn), 'p, MMMM dd, yyyy')}
                </p>
            </div>
        </Link>
    )
}

function EventResultItems({ events }) {
    const { closeSearchModal } = useContext(ModalContext);
    return (
        <Link
            to={`/event/${events.slug.current}`}  
            onClick={() => closeSearchModal()}
            className="modalSearch__event"
        >
            <div className="modalSearch__searchContent">
                <h3>{ events.title}</h3>
            </div>
        </Link>
    )
}

export {
    BlogResultItems,
    CategoryResultItems,
    NewsResultItems,
    VolunteerResultItems,
    EventResultItems
}


