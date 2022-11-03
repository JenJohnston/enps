import React, { useState, useContext } from "react";
import { graphql, Link, PageRenderer } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Modal from "react-modal";
import { CgClose } from "react-icons/cg";
import PortableTextHandler from "../components/PortableTextHandler.jsx";
import Seo from "../components/seo";
import { ModalContext } from "../context/ModalContext";
import { GiFallingLeaf } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";

Modal.setAppElement(`#___gatsby`);

export const wfQuery = graphql`
  query SingleWfQuery($id: String!) {
    sanityWfIndex(id: { eq: $id }) {
      id
      slug {
        current
      }
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

export default function WfIndexSingle({ data, pageContext }) {
  const wfIndex = data.sanityWfIndex;

  const next = pageContext.next
    ? {
        url: `/wfindex/${pageContext.next.slug.current}`,
      }
    : null;
  const prev = pageContext.previous
    ? {
        url: `/wfindex/${pageContext.previous.slug.current}`,
      }
    : null;

  return (
    <div className='modalOverlay'>
      <Seo title={wfIndex.botanicalName} />
      <Link className='modalOverlay__toggle indexToggle' to='/wfindex'>
        <CgClose />
      </Link>
      <section className='wfIndexSingle'>
        <div className='container'>
          <div className='wfIndexSingle__card'>
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
              <PortableTextHandler
                className='wfIndexSingle__body'
                value={wfIndex._rawBody}
              />
            </div>
          </div>
          <div className='pageScroll'>
            {prev && (
              <Link to={prev.url}>
                <span>Previous</span>
              </Link>
            )}
            {next && (
              <Link to={next.url}>
                <span>Next</span>
              </Link>
            )}
          </div>
          <div className='wfIndexSingle__link'>
            <Link to='/wfindex'>Return to Plant Index</Link>
            <GiFallingLeaf />
          </div>
        </div>
      </section>
    </div>
  );
}
