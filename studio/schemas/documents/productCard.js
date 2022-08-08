import { TiShoppingCart } from "react-icons/ti";

export default {
  title: "Products",
  name: "products",
  type: "document",
  icon: TiShoppingCart,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Sub Title",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Cover Image",
      name: "coverImage",
      type: "customImage",
    },
    {
      title: "Products excerpt",
      name: "excerpt",
      type: "richText",
      description: "A short description of the service",
    },
    {
      title: "Products Content",
      name: "body",
      type: "richText",
      description: "A full description of the service goes here",
    },
    {
      title: "Products Price",
      name: "price",
      type: "number",
      description: "The price of the service goes here",
    },
  ],
  preview: {
    select: {
      image: "coverImage",
      title: "title",
      subtitle: "subtitle",
      price: "price",
      excerpt: "excerpt",
    },
    prepare({ image, title, excerpt, price, subtitle }) {
      return {
        title,
        subtitle,
        media: image,
        excerpt,
        price,
      };
    },
  },
};