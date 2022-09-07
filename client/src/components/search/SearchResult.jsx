import React from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { BlogResultItems, CategoryResultItems, NewsResultItems, VolunteerResultItems, EventResultItems } from './SearchItems'



export default function SearchResult({
    searchQuery,
    blogsIndexStore,
    categoriesIndexStore,
    newsIndexStore,
    volunteerIndexStore,
    
}) {
    
    const blogsResult = useFlexSearch(
        searchQuery,
        JSON.stringify(blogsIndexStore.index),
        blogsIndexStore.store
    )
    const categoriesResult = useFlexSearch(
        searchQuery,
        JSON.stringify(categoriesIndexStore.index),
        categoriesIndexStore.store
    )
    const volunteerResult = useFlexSearch(
        searchQuery,
        JSON.stringify(volunteerIndexStore.index),
        volunteerIndexStore.store
    )
    const newsResult = useFlexSearch(
        searchQuery,
        JSON.stringify(newsIndexStore.index),
        newsIndexStore.store
    )
    
    if (
        blogsResult.length === 0 &&
        categoriesResult.length === 0 &&
        volunteerResult.length === 0 &&
        newsResult.length === 0 
        
    ) {
        return <p>No Result Found.</p>
      }
    return (
        <>
            {blogsResult.length > 0 && (
                    <>
                        <h2 className='search__header'>Blogs</h2>
                        {blogsResult.map((result) => (
                            <BlogResultItems
                                key={result.id}
                                blog={result}
                            />
                        ))}
                    </>
            )}
            {categoriesResult.length > 0 && (
                <>
                    <h2 className='search__header'>Categories</h2>
                    {categoriesResult.map((result) => (
                        <CategoryResultItems 
                            key={result.id} 
                            category={result} 
                        />
                    ))}
                </>
            )}
            {newsResult.length > 0 && (
                <>
                    <h2 className='search__header'>News</h2>
                    {newsResult.map((result) => (
                        <NewsResultItems 
                            key={result.id} 
                            news={result} 
                        />
                    ))}
                </>
            )}
            {volunteerResult.length > 0 && (
                <>
                    <h2 className='search__header'>Volunteer Opportunities</h2>
                    {volunteerResult.map((result) => (
                        <VolunteerResultItems 
                            key={result.id} 
                            volunteer={result} 
                        />
                    ))}
                </>
            )}
        </>
    )
}
