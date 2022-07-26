import React, {useContext, useState, useEffect} from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import axios from 'axios'

import { ModalContext } from '../../context/ModalContext'
import SearchField from '../search/SearchField'
import SearchResult from '../search/SearchResult'

import { CgClose } from 'react-icons/cg'

const query = graphql`
{
    localSearchBlogs {
        publicStoreURL
        publicIndexURL
    }
    localSearchCategories {
        publicStoreURL
        publicIndexURL
    }
    localSearchNews {
        publicStoreURL
        publicIndexURL
    }
    localSearchEvents {
        publicStoreURL
        publicIndexURL
    }
    localSearchVolunteer {
        publicStoreURL
        publicIndexURL
    }
    localSearchWfindex {
        publicStoreURL
        publicIndexURL
    }
    localSearchPlantCard {
        publicIndexURL
        publicStoreURL
    }
}
`

export default function SearchModal() {
    
    const { isSearchModalOpen, closeSearchModal } = useContext(ModalContext)

    const handleSearchModal = () => {
        closeSearchModal()
    }

    const { isModalSearchOpen } = useContext(ModalContext);
    const [ searchQuery, setSearchQuery ] = useState('')
    const [blogsIndexStore, setBlogsIndexStore] = useState(null);
    const [categoriesIndexStore, setCategoriesIndexStore] = useState(null);
    const [newsIndexStore, setNewsIndexStore] = useState(null);
    const [eventsIndexStore, setEventsIndexStore] = useState(null);
    const [volunteerIndexStore, setVolunteerIndexStore] = useState(null);
    const [wfIndexStore, setWfIndexStore] = useState(null);
    const [plantCardIndexStore, setPlantCardIndexStore] = useState(null);
    const data = useStaticQuery(query)

    const {
        publicStoreURL: blogsPublicStoreURL,
        publicIndexURL: blogsPublicIndexURL,
    } = data.localSearchBlogs;
    const {
        publicStoreURL: categoriesPublicStoreURL,
        publicIndexURL: categoriesPublicIndexURL,
    } = data.localSearchCategories;
    const {
        publicStoreURL: newsPublicStoreURL,
        publicIndexURL: newsPublicIndexURL,
    } = data.localSearchNews;
    const {
        publicStoreURL: eventsPublicStoreURL,
        publicIndexURL: eventsPublicIndexURL,
    } = data.localSearchEvents;
    const {
        publicStoreURL: volunteerPublicStoreURL,
        publicIndexURL: volunteerPublicIndexURL,
    } = data.localSearchVolunteer;
    const {
        publicStoreURL: wfIndexPublicStoreURL,
        publicIndexURL: wfIndexPublicIndexURL,
    } = data.localSearchWfindex;
    const {
        publicStoreURL: plantCardPublicStoreURL,
        publicIndexURL: plantCardPublicIndexURL,
    } = data.localSearchPlantCard;

    useEffect(() => {
        if (isModalSearchOpen) {
          document.body.style.overflow = 'hidden';
          setSearchQuery('');
        } else {
          document.body.style.overflow = 'initial';
        }
    }, [isModalSearchOpen]);

    const handleOnFocus = async () => {
        if(blogsIndexStore && categoriesIndexStore && newsIndexStore && eventsIndexStore && volunteerIndexStore && wfIndexStore && plantCardIndexStore) return

        const [
            {data: blogsIndex},
            {data: blogsStore},
            {data: categoriesIndex},
            {data: categoriesStore},
            {data: newsIndex},
            {data: newsStore},
            {data: eventsIndex},
            {data: eventsStore},
            {data: volunteerIndex},
            {data: volunteerStore},
            {data: wfindexIndex},
            {data: wfindexStore},
            {data: plantCardIndex},
            {data: plantCardStore},
        ] = await Promise.all([
            axios.get(blogsPublicIndexURL),
            axios.get(blogsPublicStoreURL),
            axios.get(categoriesPublicIndexURL),
            axios.get(categoriesPublicStoreURL),
            axios.get(newsPublicIndexURL),
            axios.get(newsPublicStoreURL),
            axios.get(eventsPublicIndexURL),
            axios.get(eventsPublicStoreURL),
            axios.get(volunteerPublicIndexURL),
            axios.get(volunteerPublicStoreURL),
            axios.get(wfIndexPublicIndexURL),
            axios.get(wfIndexPublicStoreURL),
            axios.get(plantCardPublicIndexURL),
            axios.get(plantCardPublicStoreURL),
        ])
        setBlogsIndexStore({
            index: blogsIndex,
            store: blogsStore,
        })
        setCategoriesIndexStore({
            index: categoriesIndex,
            store: categoriesStore,
        })
        setNewsIndexStore({
            index: newsIndex,
            store: newsStore,
        })
        setEventsIndexStore({
            index: eventsIndex,
            store: eventsStore,
        })
        setVolunteerIndexStore({
            index: volunteerIndex,
            store: volunteerStore,
        })
        setWfIndexStore({
            index: wfindexIndex,
            store: wfindexStore,
        })
        setPlantCardIndexStore({
            index: plantCardIndex,
            store: plantCardStore
        })
    }

    if(!isSearchModalOpen) return null
    return (
        <div className='modalOverlay'>
           <button 
                className='modalOverlay__toggle'
                onClick={handleSearchModal} 
                onKeyDown={handleSearchModal}
                tabIndex={0}
            >
                <CgClose/>
            </button>
            <div className="modalOverlay__content searchContent">
                <div className="container">
                    <SearchField
                        value={searchQuery}
                        setValue={setSearchQuery}
                        onFocus={handleOnFocus}
                    />
                    {
                        searchQuery
                        && blogsIndexStore
                        && categoriesIndexStore
                        && newsIndexStore
                        && volunteerIndexStore
                        && eventsIndexStore
                        && wfIndexStore
                        && plantCardIndexStore 
                        && (
                            <div className='modalOverlay__result'>
                           <SearchResult
                                searchQuery={searchQuery}
                                blogsIndexStore={blogsIndexStore}
                                categoriesIndexStore={categoriesIndexStore}
                                newsIndexStore={newsIndexStore}
                                eventsIndexStore={eventsIndexStore}
                                volunteerIndexStore={volunteerIndexStore}
                                wfIndexStore={wfIndexStore}
                                plantCardIndexStore={plantCardIndexStore}
                           />
                       </div> 
                        )
                    }
                </div>
            </div>
        </div>
    )
}
