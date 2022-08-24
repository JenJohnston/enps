import React from 'react'
import BlogCard from './BlogCard'

export default function BlogCards({blogs}) {
    

    return (
        <>
            {blogs && blogs.map(blog =>
                <BlogCard
                    path={blog.slug.current}
                    title={blog.title}
                    key={blog.id}
                    excerpt={blog._rawExcerpt}
                    publishedOn={blog.publishedOn}
                    categories={blog.categories}
                    image={{
                        imageData: blog.coverImage.asset.gatsbyImageData,
                        altText: blog.coverImage.alt,
                    }}
                    name={blog.boardExecutive.name}
                    authorImage={{
                        imageData: blog.boardExecutive.profileImage.asset.gatsbyImageData,
                        altText: blog.boardExecutive.profileImage.alt
                    }}
                />)}
        </>
    )
}