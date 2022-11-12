import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Seo from "../components/seo";
import PortableTextHandler from "../components/PortableTextHandler.jsx";

export const boardMemberQuery = graphql`
  query BoardMemberQuery($id: String!) {
    sanityBoardExecutive(id: { eq: $id }) {
      id
      name
      title
      _rawBio
      profileImage {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

export default function BoardMember({ data }) {
  const boardMember = data.sanityBoardExecutive;
  return (
    <>
      <Seo title={boardMember.name} />
      <article className='boardMember'>
        <div className='container card'>
          <GatsbyImage
            image={boardMember.profileImage.asset.gatsbyImageData}
            alt={boardMember.profileImage.alt}
            className='boardMember__img'
          />
          <div className='boardMember__content'>
            <div className='boardMember__header'>
              <p>{boardMember.title}</p>
              <h5>{boardMember.name}</h5>
            </div>
            <div className='boardMember__body'>
              <PortableTextHandler value={boardMember._rawBio} />
              <Link className='boardMember__link' to='/about#boardMembers'>
                Return to Board Members
                <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
