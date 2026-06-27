export type ComponentStatus =
  | "stable"
  | "beta"
  | "coming-soon";

export interface SidebarLink {
  name: string;
  path: string;
  status: ComponentStatus;
}

export interface SidebarSection {
  title: string;
  items: SidebarLink[];
}

export const sidebar: SidebarSection[] = [
  {
    title: "Layout",
    items: [
      {
        name: "Box",
        path: "/layout/box",
        status: "stable",
      },
      {
        name: "Flex",
        path: "/layout/flex",
        status: "stable",
      },
      {
        name: "Stack",
        path: "/layout/stack",
        status: "stable",
      },
      {
        name: "Spacer",
        path: "/layout/spacer",
        status: "stable",
      },
      {
        name: "Divider",
        path: "/layout/divider",
        status: "coming-soon",
      },
      {
        name: "Container",
        path: "/layout/container",
        status: "coming-soon",
      },
      {
        name: "Grid",
        path: "/layout/grid",
        status: "coming-soon",
      },
      {
        name: "Center",
        path: "/layout/center",
        status: "coming-soon",
      },
      {
        name: "AspectRatio",
        path: "/layout/aspect-ratio",
        status: "coming-soon",
      },
    ],
  },

  {
    title: "Forms",
    items: [
      {
        name: "Button",
        path: "/forms/button",
        status: "stable",
      },
      {
        name: "Input",
        path: "/forms/input",
        status: "coming-soon",
      },
      {
        name: "Textarea",
        path: "/forms/textarea",
        status: "coming-soon",
      },
      {
        name: "Checkbox",
        path: "/forms/checkbox",
        status: "coming-soon",
      },
      {
        name: "Radio",
        path: "/forms/radio",
        status: "coming-soon",
      },
      {
        name: "Switch",
        path: "/forms/switch",
        status: "coming-soon",
      },
      {
        name: "Select",
        path: "/forms/select",
        status: "coming-soon",
      },
    ],
  },

  {
    title: "Typography",
    items: [
      {
        name: "Text",
        path: "/typography/text",
        status: "coming-soon",
      },
      {
        name: "Heading",
        path: "/typography/heading",
        status: "coming-soon",
      },
      {
        name: "Link",
        path: "/typography/link",
        status: "coming-soon",
      },
      {
        name: "Code",
        path: "/typography/code",
        status: "coming-soon",
      },
    ],
  },

  {
    title: "Feedback",
    items: [
      {
        name: "Alert",
        path: "/feedback/alert",
        status: "coming-soon",
      },
      {
        name: "Badge",
        path: "/feedback/badge",
        status: "coming-soon",
      },
      {
        name: "Spinner",
        path: "/feedback/spinner",
        status: "coming-soon",
      },
      {
        name: "Toast",
        path: "/feedback/toast",
        status: "coming-soon",
      },
    ],
  },

  {
    title: "Navigation",
    items: [
      {
        name: "Tabs",
        path: "/navigation/tabs",
        status: "coming-soon",
      },
      {
        name: "Menu",
        path: "/navigation/menu",
        status: "coming-soon",
      },
      {
        name: "Breadcrumb",
        path: "/navigation/breadcrumb",
        status: "coming-soon",
      },
      {
        name: "Pagination",
        path: "/navigation/pagination",
        status: "coming-soon",
      },
    ],
  },

  {
    title: "Design Tokens",
    items: [
      {
        name: "Colors",
        path: "/tokens/colors",
        status: "stable",
      },
      {
        name: "Spacing",
        path: "/tokens/spacing",
        status: "stable",
      },
      {
        name: "Radius",
        path: "/tokens/radius",
        status: "stable",
      },
      {
        name: "Shadows",
        path: "/tokens/shadows",
        status: "stable",
      },
      {
        name: "Typography",
        path: "/tokens/typography",
        status: "stable",
      },
    ],
  },
];