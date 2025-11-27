import { themes } from "prism-react-renderer";

export const customTheme = {
  ...themes.shadesOfPurple,
  styles: [
    ...themes.shadesOfPurple.styles,
    {
      types: ["keyword"],
      style: { color: "#c084fc" },
    },
    {
      types: ["string"],
      style: { color: "#22d3ee" },
    },
    {
      types: ["property", "operator"],
      style: { color: "#e4e4e7" },
    },
    {
      types: ["boolean"],
      style: { color: "#fb923c" },
    },
  ],
  plain: {
    backgroundColor: "transparent",
    color: "#4ade80"
  },
};
