import {MdOutlinePictureAsPdf} from 'react-icons/md'

export default {
    title: "Wildflower News",
    name: "wildflowerNews",
    type: "document",
    icon: MdOutlinePictureAsPdf,
    fields: [
      {
        title: "Title",
        name: "title",
        type: "string",
      },
      {
        title: "Published On",
        name: "publishedOn",
        type: "datetime",
      },
      {
        title: "Preview Image",
        name: "previewImage",
        type: "customImage",
      },
      {
        title: "NewsLetter Excerpt",
        name: "excerpt",
        type: "normalText",
        description: "A brief description of the Wildflower News edition",
      },
      {
        title: "PDF Upload",
        name: "wildflowerpdf",
        type: "customFile",
      },
    ],
    preview: {
      select: {
        title: "title",
      },
      prepare({ title }) {
        return {
          title: title,
        };
      },
    },
  };