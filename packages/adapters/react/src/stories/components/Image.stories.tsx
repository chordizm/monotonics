import { Image } from "@/components";

export default {
  title: "Components/Image",
  component: Image,
};

export const Default = {
  args: {
    width: "100%",
    height: "100%",
    src: "/_1ee8a886-9546-4f1c-ab96-72ca1f2e7f38.jpeg",
    segments: [
      {
        labels: ["label-1"],
        points: [
          { x: 100, y: 100 },
          { x: 200, y: 100 },
          { x: 200, y: 200 },
        ],
      },
      {
        labels: ["label-2"],
        points: [
          { x: 300, y: 300 },
          { x: 400, y: 300 },
          { x: 400, y: 400 },
        ],
      },
    ],
  },
};
