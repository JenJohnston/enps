import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StaticImage } from "gatsby-plugin-image";
import { format } from "date-fns";

import Seo from "../components/seo";
import PortableTextHandler from "../components/PortableTextHandler.jsx";

import { FaLeaf } from "react-icons/fa";
import { GiFallingLeaf } from "react-icons/gi";

export const eventQuery = graphql`
  query SingleEventQuery($id: String!) {
    sanityEvent(id: { eq: $id }) {
      id
      title
      price
      _rawBody
      eventDate
      location
    }
  }
`;

export default function EventSingle({ data }) {
  const event = data.sanityEvent;

  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");

  const [honeyPot, setHoneyPot] = useState("");

  const onSubmit = async data => {
    const form = document.querySelector("#eventForm");

    if (honeyPot === "" || honeyPot === null) {
      setResult("Sending...");

      const formData = new FormData();

      formData.append("access_key", process.env.GATSBY_WEB_THREE_ACCESS_KEY);

      for (const key in data) {
        if (key === "file") {
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then(res => res.json());

      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
      } else {
        console.log("Error", res);
        setResult(res.message);
      }

      form.action = "https://web3forms.com/success";
    } else {
      form.action = "https://web3forms.com/success";
      return false;
    }
  };

  return (
    <>
      <Seo title={event.title} />
      <section className='eventSingleHero'>
        <StaticImage
          src='../images/eventSingle-banner.jpg'
          alt='field of wild flowers'
          className='eventSingleHero__img'
        />
        <div className='eventSingleHero__overlay'>
          <div className='container eventSingleHero__content'>
            <h1>{event.title}</h1>
            <h5>
              <span>When: </span>
              {format(new Date(event.eventDate), "MMMM dd, yyyy, p")}
            </h5>
            <h5>
              <span>Where:</span> {event.location}
            </h5>
          </div>
        </div>
      </section>
      <div className='eventSingle'>
        <article className='container'>
          <div className='eventSingle__header'>
            <FaLeaf />
            <div className='dividerBar'></div>
          </div>
          <PortableTextHandler value={event._rawBody} />
        </article>
        <div className='eventSingle__link container'>
          <Link to='/events'>Return to Events Page</Link>
          <GiFallingLeaf />
        </div>
      </div>
    </>
  );
}
