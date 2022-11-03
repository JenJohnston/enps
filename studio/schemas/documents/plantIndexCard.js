import { GiFlowers } from "react-icons/gi";

export default {
  title: "Plant Index Card",
  name: "plantIndexCard",
  type: "document",
  icon: GiFlowers,
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
        title: "Feature Image",
        name: "featureImage",
        type: "customImage",
        description: "This is the Link Image"
    },
    {
        title: "Card Image One",
        name: "cardImageOne",
        type: "customImage",
        description: "This Image Will Display in the Card"
    },
    {
        title: "Card Image Two",
        name: "cardImageTwo",
        type: "customImage",
        description: "This Image Will Display in the Card"
    },
    {
        title: "Card Image Three",
        name: "cardImageThree",
        type: "customImage",
        description: "This Image Will Display in the Card"
    },
    {
        title: "Card Image Four",
        name: "cardImageFour",
        type: "customImage",
        description: "This Image Will Display in the Card"
    },
    {
        title: "Growth Habit",
        name: "growthHabit",
        type: "string",
      },
      {
        title: "Height",
        name: "height",
        type: "string",
      },
      {
        title: "Spread",
        name: "spread",
        type: "string",
      },
      {
        title: "Bloom Time",
        name: "bloomTime",
        type: "string",
      },
      {
        title: "Bloom Colour",
        name: "bloomColour",
        type: "string",
      },
      {
        title: "Light",
        name: "light",
        type: "string",
      },
      {
        title: "Moisture",
        name: "moisture",
        type: "string",
      },
      {
        title: "Soil",
        name: "soil",
        type: "string",
      },
      {
        title: "Seeding",
        name: "seeding",
        type: "string",
      },
      {
        title: "Landscape Uses",
        name: "landscapeUses",
        type: "string",
      },
      {
        title: "Interesting Features",
        name: "interestingFeatures",
        type: "string",
      },
      {
        title: "Natural habitat",
        name: "naturalHabitat",
        type: "string",
      },
      {
        title: "Ecology",
        name: "ecology",
        type: "string",
      },
  ],
  preview: {
    select: {
      title: "commonName",
      subtitle: "botanicalName",
      image: "featureImage"
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