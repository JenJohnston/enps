import React from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { BlogResultItems, CategoryResultItems, NewsResultItems, VolunteerResultItems, EventResultItems, PlantCardResultItems } from './SearchItems'



export default function SearchResult({
    searchQuery,
    blogsIndexStore,
    categoriesIndexStore,
    newsIndexStore,
    volunteerIndexStore,
    eventsIndexStore,
    
    plantCardIndexStore
}) {
    
    // const blogsResult = useFlexSearch(
    //     searchQuery,
    //     JSON.stringify(blogsIndexStore.index),
    //     blogsIndexStore.store
    // )
    // const categoriesResult = useFlexSearch(
    //     searchQuery,
    //     JSON.stringify(categoriesIndexStore.index),
    //     categoriesIndexStore.store
    // )
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
    const eventsResult = useFlexSearch(
        searchQuery,
        JSON.stringify(eventsIndexStore.index),
        eventsIndexStore.store
    )
    // const wfIndexResult = useFlexSearch(
    //     searchQuery,
    //     JSON.stringify(wfIndexStore.index),
    //     wfIndexStore.store
    // )
    const plantCardResult = useFlexSearch(
        searchQuery,
        JSON.stringify(plantCardIndexStore.index),
        plantCardIndexStore.store
    )
    if (
        // blogsResult.length === 0 &&
        // categoriesResult.length === 0 &&
        plantCardResult.length === 0 &&
        volunteerResult.length === 0 &&
        newsResult.length === 0 &&
        eventsResult.length === 0 
        
        
    ) {
        return <p>No Result Found.</p>
      }
    return (
        <>
            {/* {blogsResult.length > 0 && (
                    <>
                        <h3 className='search__header'>Blogs</h3>
                        <div className="contentSearch">
                            {blogsResult.map((result) => (
                                <BlogResultItems
                                    key={result.id}
                                    blog={result}
                                />
                            ))}
                        </div>
                    </>
            )}
            {categoriesResult.length > 0 && (
                <>
                    <h3 className='search__header'>Categories</h3>
                    <div className="contentSearch">
                    {categoriesResult.map((result) => (
                        <CategoryResultItems 
                            key={result.id} 
                            category={result} 
                        />
                    ))}
                    </div>
                    
                </>
            )} */}
            {newsResult.length > 0 && (
                <>
                    <h3 className='search__header'>News</h3>
                    <div className="contentSearch">
                        {newsResult.map((result) => (
                            <NewsResultItems 
                                key={result.id} 
                                news={result} 
                            />
                        ))}
                    </div>
                </>
            )}
            {volunteerResult.length > 0 && (
                <>
                    <h3 className='search__header'>Volunteer Opportunities</h3>
                    <div className="contentSearch">
                        {volunteerResult.map((result) => (
                            <VolunteerResultItems 
                                key={result.id} 
                                volunteer={result} 
                            />
                        ))}
                    </div>
                </>
            )}
            {eventsResult.length > 0 && (
                <>
                    <h3 className='search__header'>Upcoming Events</h3>
                    {eventsResult.map((result) => (
                        <EventResultItems 
                            key={result.id} 
                            events={result} 
                        />
                    ))}
                </>
            )}
            {plantCardResult.length > 0 && (
                <>
                    <h3 className="search__header">Native Plant Index</h3>
                    {plantCardResult.map((result) => (
                        <PlantCardResultItems 
                        key={result.id} 
                        plantCard={result} 
                    />
                    ))}
                </>
            )}
        </>
    )
}
