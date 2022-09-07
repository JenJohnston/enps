import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function SearchField({ value, setValue, onFocus}) {
    

    return (
        <div className='search'>
            <h2>Trouble Finding Something?</h2>
            <p>Maybe We Can Help You Find What You're Looking For</p>
            <div className="formControl">
                <button className='search__btn'>
                    <MdSearch/>
                </button>
                <input
                    className='search__input' 
                    type="text" 
                    placeholder='search' 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={onFocus && onFocus}
                />
            </div>
        </div>
    )
}