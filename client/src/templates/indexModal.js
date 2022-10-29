import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import PortableTextHandler from "../components/PortableTextHandler.jsx";
import Seo from "../components/seo";

import { GiFallingLeaf } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";

export const wfQuery = graphql`
  query SingleWfQuery($id: String!) {
    sanityWfIndex(id: { eq: $id }) {
      id
      commonName
      botanicalName
      plantFamily
      _rawBody
      wildflowerImage {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

export default function WfIndexSingle({ data }) {
  const wfIndex = data.sanityWfIndex;
  return (
    <>
      <Seo title={wfIndex.botanicalName} />
      <section className='wfIndexHero'>
        <StaticImage
          src='../images/wfindex-banner.jpg'
          alt='an autumn photo of the Walterdale Bridge in Edmonton'
          className='wfIndexHero__img'
        />
        <div className='wfIndexHero__overlay'>
          <div className='container'>
            <h1>Wildflower Index</h1>
            <h5>Exploring native plants in Edmonton</h5>
          </div>
        </div>
      </section>
      <section className='wfIndexSingle'>
        <div className='container'>
          <div className='wfIndexSingle__card'>
            <div className='wfIndexSingle__rectangle'></div>
            <GatsbyImage
              image={wfIndex.wildflowerImage.asset.gatsbyImageData}
              alt={wfIndex.wildflowerImage.alt}
              className='wfIndexSingle__img'
            />
            <div className='wfIndexSingle__content'>
              <div className='wfIndexSingle__contentHeader'>
                <h5>
                  <span>
                    <FaLeaf />
                  </span>
                  {wfIndex.commonName}
                </h5>
                <h5>
                  <span>
                    <FaLeaf />
                  </span>
                  {wfIndex.botanicalName}
                </h5>
                <h5>
                  <span>
                    <FaLeaf />
                  </span>
                  {wfIndex.plantFamily}
                </h5>
              </div>
              <div className='dividerBar'></div>
              <PortableTextHandler value={wfIndex._rawBody} />
            </div>
          </div>
          <div className='wfIndexSingle__link'>
            <Link to='/wfindex'>Return to Plant Index</Link>
            <GiFallingLeaf />
          </div>
        </div>
      </section>
    </>
  );
}
