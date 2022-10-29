// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document import

import blog from "./documents/blog.js";
import category from "./documents/category";
import boardExecutive from "./documents/boardExecutive.js";
import boardDirector from "./documents/boardDirector.js";
import featured from "./documents/featured.js";
import blogFeatured from "./documents/blogFeatured.js";
import event from "./documents/event.js";
import news from "./documents/news.js";
import newsFeatured from "./documents/newsFeatured.js";
import plantCard from "./documents/plantCard.js";
import aboutSlider from "./documents/aboutSlider.js";
import aboutBanner from "./documents/aboutBanner"
import volunteer from "./documents/volunteer.js";
import wildflowerNews from "./documents/wildflowerNews.js";
import heroSlider from "./documents/heroSlider.js";
import springSeedGallery from "./documents/springSeedGallery.js";
import wfIndex from "./documents/wfIndex.js";



// object import

import customImage from "./objects/customImage";
import normalText from "./objects/normalText";
import richText from "./objects/richText.js";
import customFile from "./objects/customFile.js";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    // document schemas

    featured,
    blogFeatured,
    newsFeatured,
    news,
    blog,
    category,
    event,
    boardExecutive,
    boardDirector,
    plantCard,
    aboutSlider,
    aboutBanner,
    heroSlider,
    volunteer,
    wildflowerNews,
    wfIndex,
    springSeedGallery,

    // object schemas

    customFile,
    customImage,
    normalText,
    richText,
  ]),
});