import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { themes } from "@storybook/theming";
import "../src/styles/index.css";

// Mirror the Lameh dark surfaces inside the Storybook chrome so the autodocs and canvas
// both render against the same near-black surface the product uses.
const lamehDark = {
  ...themes.dark,
  appBg: "#131414",          // bg-page
  appContentBg: "#131414",   // bg-page
  appBorderColor: "#303133", // border-subtle
  appBorderRadius: 4,        // radius-md cap
  barBg: "#212224",          // bg-surface
  textColor: "#FFFFFF",
  textInverseColor: "#131414",
  colorPrimary: "#00D991",   // brand
  colorSecondary: "#00D991",
  brandTitle: "Lameh Design System",
};

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: { disable: true },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    docs: {
      theme: lamehDark,
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          ["Colors", "Typography", "Spacing", "Radius", "Shadows", "Icons"],
          "Components",
          ["Button", "Icon Button", "Input", "Textarea", "Select", "Checkbox", "Radio", "Switch", "Badge", "Tag", "Avatar", "Card", "Alert", "Tooltip", "Tabs", "Pagination", "Modal", "Empty State", "Spinner", "Table"],
          "Patterns",
        ],
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: { Dark: "dark", Light: "light" },
      defaultTheme: "Dark",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
