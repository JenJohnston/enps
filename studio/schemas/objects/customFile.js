import { MdFileUpload } from "react-icons/md";

export default {
  name: "customFile",
  title: "File",
  type: "file",
  icon: MdFileUpload,
  options: {
    hotspot: true,
  },
  fields: [
    {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
  ],
  preview: {
    select: {
      fileUrl: "asset.url",
    },
  },
};