import { GiPlantRoots } from "react-icons/gi";

export default {
  title: "WF Index",
  name: "wfIndex",
  type: "document",
  icon: GiPlantRoots,
  fields: [
    {
      title: "Common Name",
      name: "commonName",
      type: "string",
    },
    {
      title: "Botanical Name",
      name: "botanicalName",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "botanicalName",
        maxLength: 96,
      },
    },
    {
      title: "Plant Family",
      name: "plantFamily",
      type: "string",
    },
    {
      title: "Index ID",
      name: "indexID",
      type: "string",
      description: "please use pi for plant index"
    },
    {
        title: "Spread",
        name: "spreadBy",
        type: "string",
    },
    {
      title: "Plant Details",
      name: "body",
      type: "richText",
      description: "A full description of the plant goes here",
    },
    {
        title: "WildFlower Image",
        name: "wildflowerImage",
        type: "customImage",
      },
  ],
  preview: {
    select: {
      title: "commonName",
      subtitle: "botanicalName",
      image: "wildflowerImage"
    },
    prepare({  title, image, subtitle }) {
      return {
        title: title,
        subtitle: subtitle,
        media: image
      };
    },
  },
};