import {GrDocumentUpload} from 'react-icons/gr'

export default {
    title: "Grow Sub Documents",
    name: "growSubDocuments",
    type: "document",
    icon: GrDocumentUpload,
    fields: [
      {
        title: "Grow Sub Document PDF",
        name: "title",
        type: "string",
      },
      {
        title: "Grow Sub Document Upload",
        name: "growSubDocumentPdfUpload",
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