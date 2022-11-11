import {GrDocumentUpload} from 'react-icons/gr'

export default {
    title: "Additional Reading",
    name: "additionalReading",
    type: "document",
    icon: GrDocumentUpload,
    fields: [
      {
        title: "Reading PDF",
        name: "readingPdf",
        type: "string",
      },
      {
        title: "Reading PDF Upload",
        name: "readingPdfUpload",
        type: "customFile",
      },
    ],
    preview: {
      select: {
        title: "readingPdf",
      },
      prepare({ title }) {
        return {
          title: title,
        };
      },
    },
  };