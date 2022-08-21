import React from 'react'
import { Link } from 'gatsby'

export default function Hero() {
    

    return (
        <section className='container hero'>
            <div className="hero__content">
            <h1>Edmonton Native Plant Society</h1>
            <h2>Native Plant Stewards</h2>
            <Link to="/members">Buy a Membership</Link>
            </div>
        </section>
    )
}
