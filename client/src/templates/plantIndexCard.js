import React, { useState, useContext } from "react";
import { graphql, Link, PageRenderer } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Modal from "react-modal";
import Seo from "../components/seo";

import { CgClose } from "react-icons/cg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ModalContext } from "../context/ModalContext";
import { GiFallingLeaf } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";

Modal.setAppElement(`#___gatsby`);

export const wfQuery = graphql`
  query SinglePIQuery($id: String!) {
    sanityPlantIndexCard(id: { eq: $id }) {
      id
      commonName
      botanicalName
      plantFamily
      featureImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      cardImageOne {
        alt
        asset {
          filename
          gatsbyImageData
        }
      }
      cardImageTwo {
        alt
        asset {
          filename
          gatsbyImageData
        }
      }
      cardImageThree {
        alt
        asset {
          filename
          gatsbyImageData
        }
      }
      cardImageFour {
        alt
        asset {
          filename
          gatsbyImageData
        }
      }
      growthHabit
      height
      spread
      bloomTime
      bloomColour
      light
      moisture
      soil
      seeding
      landscapeUses
      interestingFeatures
      naturalHabitat
      ecology
    }
  }
`;

export default function PlantIndexCard({ data, pageContext }) {
  const plantCard = data.sanityPlantIndexCard;

  const imgOne = plantCard.cardImageOne;
  const imgTwo = plantCard.cardImageTwo;
  const imgThree = plantCard.cardImageThree;
  const imgFour = plantCard.cardImageFour;

  let isImgOneActive = false;
  let isImgTwoActive = false;
  let isImgThreeActive = false;
  let isImgFourActive = false;

  console.log(imgThree);

  if (imgOne.asset.filename === "placeholderTransparent.png") {
    isImgOneActive = true;
  }
  if (imgTwo.asset.filename === "placeholderTransparent.png") {
    isImgTwoActive = true;
  }
  if (imgThree.asset.filename === "placeholderTransparent.png") {
    isImgThreeActive = true;
  }
  if (imgFour.asset.filename === "placeholderTransparent.png") {
    isImgFourActive = true;
  }

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
      <Seo title={plantCard.botanicalName} />

      <section className='plantIndexCard'>
        <div className='pageScroll'>
          {prev && (
            <Link to={prev.url}>
              <FiChevronLeft className='pageScroll__chevron' />
            </Link>
          )}
          {next && (
            <Link to={next.url}>
              <FiChevronRight className='pageScroll__chevron' />
            </Link>
          )}
          <Link className='pageScroll__toggle' to='/wfindex'>
            <CgClose />
          </Link>
        </div>
        <div className='container'>
          <div className='plantIndexCard__card'>
            <div className='plantIndexCard__content'>
              <div className='plantIndexCard__header'>
                <GatsbyImage
                  image={plantCard.featureImage.asset.gatsbyImageData}
                  alt={plantCard.featureImage.alt}
                  className='plantIndexCard__img'
                  placeholder='none'
                />
                <div className='plantIndexCard__title'>
                  <h5>
                    <span>
                      <FaLeaf />
                    </span>
                    {plantCard.commonName}
                  </h5>
                  <h5 className='botanicalName'>
                    <span>
                      <FaLeaf />
                    </span>
                    {plantCard.botanicalName}
                  </h5>
                  <h5 className='plantFamily'>
                    <span>
                      <FaLeaf />
                    </span>
                    {plantCard.plantFamily}
                  </h5>
                  <div className='dividerBar'></div>
                </div>
              </div>
              <div className='plantIndexCard__gallery'>
                <GatsbyImage
                  image={plantCard.cardImageOne.asset.gatsbyImageData}
                  alt={plantCard.cardImageOne.alt}
                  className={isImgOneActive ? "hide" : "plantIndexCard__img"}
                  placeholder='none'
                />
                <GatsbyImage
                  image={plantCard.cardImageTwo.asset.gatsbyImageData}
                  alt={plantCard.cardImageTwo.alt}
                  className={isImgTwoActive ? "hide" : "plantIndexCard__img"}
                  placeholder='none'
                />
                <GatsbyImage
                  image={plantCard.cardImageThree.asset.gatsbyImageData}
                  alt={plantCard.cardImageThree.alt}
                  className={isImgThreeActive ? "hide" : "plantIndexCard__img"}
                  placeholder='none'
                />
                <GatsbyImage
                  image={plantCard.cardImageFour.asset.gatsbyImageData}
                  alt={plantCard.cardImageFour.alt}
                  className={isImgFourActive ? "hide" : "plantIndexCard__img"}
                  placeholder='none'
                />
              </div>
              <div className='plantIndexCard__body'>
                <div className='dataset'>
                  <p>
                    <span>Growth habit: </span>
                    {plantCard.growthHabit}
                  </p>
                  <p>
                    <span>Height: </span>
                    {plantCard.height}
                  </p>
                  <p>
                    <span>Spread: </span>
                    {plantCard.spread}
                  </p>
                  <p>
                    <span>Bloom Time: </span>
                    {plantCard.bloomTime}
                  </p>
                  <p>
                    <span>Bloom Colour: </span>
                    {plantCard.bloomColour}
                  </p>
                </div>
                <div className='dataset'>
                  <p>
                    <span>Light: </span>
                    {plantCard.light}
                  </p>
                  <p>
                    <span>Moisture: </span>
                    {plantCard.moisture}
                  </p>
                  <p>
                    <span>Soil: </span>
                    {plantCard.soil}
                  </p>
                </div>
                <div className='dataset'>
                  <p>
                    <span>Seeding: </span>
                    {plantCard.seeding}
                  </p>
                </div>
                <div className='dataset'>
                  <p>
                    <span>Landscape uses: </span>
                    {plantCard.landscapeUses}
                  </p>
                  <p>
                    <span>Interesting features: </span>
                    {plantCard.interestingFeatures}
                  </p>
                  <p>
                    <span>Natural habitat: </span>
                    {plantCard.naturalHabitat}
                  </p>
                  <p>
                    <span>Ecology: </span>
                    {plantCard.ecology}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
