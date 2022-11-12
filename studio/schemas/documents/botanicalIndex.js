import { GiPlantRoots } from "react-icons/gi";

export default {
  title: "Botanical Index",
  name: "botanicalIndex",
  type: "document",
  icon: GiPlantRoots,
  fields: [
    {
      title: "Botanical Name",
      name: "botanicalName",
      type: "string",
    },
    {
        title: "Index ID",
        name: "indexID",
        type: "string",
    },
  ],
  preview: {
    select: {
      title: "botanicalName",
    },
    prepare({  title }) {
      return {
        title: title,
      };
    },
  },
};