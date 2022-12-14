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
            className="modalSearch"
        >
            <GatsbyImage
                image={blog.coverImage.asset.gatsbyImageData}
                alt={blog.coverImage.alt}
                className="modalSearch__img"
            />
            <div className="modalSearch__searchContent">
                <h5>{blog.title}</h5>
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
            className="modalSearch"
        >
            <div className="modalSearch__searchContent">
                <h5 className='categoryTitle'>{category.title}</h5>
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
            className="modalSearch"
        >
            <GatsbyImage
                image={volunteer.coverImage.asset.gatsbyImageData}
                alt={volunteer.coverImage.alt}
                className="modalSearch__img"
            />
            <div className="modalSearch__searchContent">
                <h5>{volunteer.title}</h5>
            </div>
        </Link>
    )
}

function NewsResultItems({ news }) {
    const { closeSearchModal } = useContext(ModalContext);
    return (
        <Link
            to={news.wildflowerpdf.asset.url}  
            onClick={() => closeSearchModal()}
            className="modalSearch"
        >
            <GatsbyImage
                image={news.previewImage.asset.gatsbyImageData}
                alt={news.previewImage.alt}
                className="modalSearch__img"
            />
            <div className="modalSearch__searchContent">
                <h5>{ news.title}</h5>
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
            className="modalSearch"
        >
            <div className="modalSearch__searchContent">
                <h5>{ events.title}</h5>
            </div>
        </Link>
    )
}

function WfIndexResultItems({ wfindex }) {
    const { closeSearchModal } = useContext(ModalContext);
    return (
        <Link
        to={`/wfindex/${wfindex.slug.current}`}
        onClick={() => closeSearchModal()}
        className="modalSearch"
        >
            <GatsbyImage
                image={wfindex.wildflowerImage.asset.gatsbyImageData}
                alt={wfindex.wildflowerImage.alt}
                className="modalSearch__img"
            />
            <div className="modalSearch__searchContent">
                <h5 className='modalSearch__wfIndexName'><span className='plantSearchTitle'>Common Name: </span>{wfindex.commonName}</h5>
                <p className='botanicalName'><span className='botanicalSearchTitle'>Botanical Name: </span>{wfindex.botanicalName}</p>
            </div>
        </Link>
    )
    
}

function PlantCardResultItems({ plantCard }) {
    const { closeSearchModal } = useContext(ModalContext);
    return (
        <>
            
            <Link
            to={`/wfindex/${plantCard.slug.current}`}
            onClick={() => closeSearchModal()}
            className="modalSearch"
            >
                <GatsbyImage
                    image={plantCard.featureImage.asset.gatsbyImageData}
                    alt={plantCard.featureImage.alt}
                    className="modalSearch__img"
                />
                <div className="modalSearch__searchContent">
                    <h5 className='modalSearch__wfIndexName'>Common Name:{plantCard.commonName}</h5>
                    <p>{plantCard.botanicalName}</p>
                </div>
            </Link>
        </>
    )
    
}

export {
    BlogResultItems,
    CategoryResultItems,
    NewsResultItems,
    VolunteerResultItems,
    EventResultItems,
    WfIndexResultItems,
    PlantCardResultItems,
}


