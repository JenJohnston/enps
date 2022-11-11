import {GrDocumentUpload} from 'react-icons/gr'

export default {
    title: "Plant Idendity pdf",
    name: "plantIdentityPdf",
    type: "document",
    icon: GrDocumentUpload,
    fields: [
      {
        title: "Plant Idendity PDF",
        name: "plantIdentityPdf",
        type: "string",
      },
      {
        title: "Idendity PDF Upload",
        name: "idendityPdfUpload",
        type: "customFile",
      },
    ],
    preview: {
      select: {
        title: "plantIdentityPdf",
      },
      prepare({ title }) {
        return {
          title: title,
        };
      },
    },
  };