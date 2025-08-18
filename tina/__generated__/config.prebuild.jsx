// tina/config.ts
import { defineConfig } from "tinacms";
var styleFields = [
  {
    type: "object",
    name: "padding",
    label: "Padding",
    fields: [
      { type: "number", name: "top", label: "Top" },
      { type: "number", name: "bottom", label: "Bottom" },
      { type: "number", name: "left", label: "Left" },
      { type: "number", name: "right", label: "Right" }
    ]
  },
  {
    type: "object",
    name: "margin",
    label: "Margin",
    fields: [
      { type: "number", name: "top", label: "Top" },
      { type: "number", name: "bottom", label: "Bottom" }
    ]
  }
];
var heroBlockSchema = {
  name: "hero",
  label: "Hero Section",
  ui: {
    defaultItem: {
      headline: "Welcome to Highvale Events",
      tagline: "Creating unforgettable moments"
    },
    itemProps: (item) => ({
      label: item?.headline || "Hero Section"
    })
  },
  fields: [
    { type: "string", name: "headline", label: "Headline" },
    { type: "string", name: "tagline", label: "Tagline" },
    { type: "rich-text", name: "text", label: "Text" },
    { type: "image", name: "backgroundImage", label: "Background Image" },
    {
      type: "object",
      name: "style",
      label: "Style",
      fields: [
        {
          type: "string",
          name: "textAlign",
          label: "Text Alignment",
          options: ["left", "center", "right"]
        },
        {
          type: "string",
          name: "height",
          label: "Height",
          options: ["auto", "screen", "large", "medium", "small"]
        },
        ...styleFields,
        { type: "string", name: "backgroundColor", label: "Background Color" },
        { type: "string", name: "textColor", label: "Text Color" },
        { type: "string", name: "overlayOpacity", label: "Overlay Opacity" }
      ]
    },
    {
      type: "object",
      list: true,
      name: "actions",
      label: "Action Buttons",
      fields: [
        { type: "string", name: "label", label: "Button Label" },
        { type: "string", name: "link", label: "Button Link" },
        {
          type: "string",
          name: "style",
          label: "Button Style",
          options: ["primary", "secondary", "outline", "ghost"]
        }
      ]
    }
  ]
};
var servicesBlockSchema = {
  name: "services",
  label: "Services Section",
  fields: [
    { type: "string", name: "headline", label: "Headline" },
    { type: "string", name: "subheadline", label: "Subheadline" },
    {
      type: "string",
      name: "columns",
      label: "Number of Columns",
      options: ["1", "2", "3", "4", "6"]
    },
    {
      type: "object",
      list: true,
      name: "services",
      label: "Services",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "rich-text", name: "description", label: "Description" },
        { type: "image", name: "image", label: "Image" },
        { type: "string", name: "buttonText", label: "Button Text" },
        { type: "string", name: "buttonLink", label: "Button Link" }
      ]
    },
    {
      type: "object",
      name: "style",
      label: "Style",
      fields: [
        { type: "string", name: "backgroundColor", label: "Background Color" },
        ...styleFields,
        {
          type: "string",
          name: "cardStyle",
          label: "Card Style",
          options: ["minimal", "shadow", "border", "gradient"]
        },
        {
          type: "string",
          name: "imagePosition",
          label: "Image Position",
          options: ["top", "left", "right", "background"]
        }
      ]
    }
  ]
};
var testimonialBlockSchema = {
  name: "testimonials",
  label: "Testimonials Section",
  fields: [
    { type: "string", name: "headline", label: "Headline" },
    {
      type: "string",
      name: "layout",
      label: "Layout",
      options: ["grid", "carousel", "masonry"]
    },
    {
      type: "object",
      list: true,
      name: "testimonials",
      label: "Testimonials",
      fields: [
        { type: "string", name: "name", label: "Name" },
        { type: "string", name: "role", label: "Role/Event Type" },
        { type: "rich-text", name: "quote", label: "Quote" },
        { type: "image", name: "image", label: "Image" },
        { type: "number", name: "rating", label: "Rating (1-5)" }
      ]
    },
    {
      type: "object",
      name: "style",
      label: "Style",
      fields: [
        { type: "string", name: "backgroundColor", label: "Background Color" },
        { type: "boolean", name: "showQuoteMarks", label: "Show Quote Marks" },
        { type: "boolean", name: "showRatings", label: "Show Ratings" }
      ]
    }
  ]
};
var ctaBlockSchema = {
  name: "cta",
  label: "Call to Action",
  fields: [
    { type: "string", name: "headline", label: "Headline" },
    { type: "rich-text", name: "text", label: "Text" },
    {
      type: "object",
      list: true,
      name: "buttons",
      label: "Buttons",
      fields: [
        { type: "string", name: "label", label: "Button Label" },
        { type: "string", name: "link", label: "Button Link" },
        {
          type: "string",
          name: "style",
          label: "Button Style",
          options: ["primary", "secondary", "outline"]
        }
      ]
    },
    {
      type: "object",
      name: "style",
      label: "Style",
      fields: [
        {
          type: "string",
          name: "backgroundStyle",
          label: "Background Style",
          options: ["solid", "gradient", "image"]
        },
        { type: "string", name: "backgroundColor", label: "Background Color" },
        { type: "image", name: "backgroundImage", label: "Background Image" },
        {
          type: "string",
          name: "textAlign",
          label: "Text Alignment",
          options: ["left", "center", "right"]
        }
      ]
    }
  ]
};
var contentBlockSchema = {
  name: "content",
  label: "Content Block",
  fields: [
    { type: "string", name: "headline", label: "Headline" },
    { type: "rich-text", name: "content", label: "Content", isBody: true },
    {
      type: "string",
      name: "layout",
      label: "Layout",
      options: ["single-column", "two-column", "sidebar-left", "sidebar-right"]
    },
    {
      type: "object",
      name: "style",
      label: "Style",
      fields: [
        ...styleFields,
        { type: "string", name: "backgroundColor", label: "Background Color" },
        { type: "number", name: "maxWidth", label: "Max Width (px)" }
      ]
    }
  ]
};
var galleryBlockSchema = {
  name: "gallery",
  label: "Gallery",
  fields: [
    { type: "string", name: "headline", label: "Headline" },
    {
      type: "string",
      name: "layout",
      label: "Layout",
      options: ["grid", "masonry", "carousel", "lightbox"]
    },
    {
      type: "string",
      name: "columns",
      label: "Number of Columns",
      options: ["2", "3", "4", "5", "6"]
    },
    {
      type: "object",
      list: true,
      name: "images",
      label: "Images",
      fields: [
        { type: "image", name: "image", label: "Image" },
        { type: "string", name: "caption", label: "Caption" },
        { type: "string", name: "alt", label: "Alt Text" }
      ]
    },
    {
      type: "object",
      name: "style",
      label: "Style",
      fields: [
        { type: "number", name: "imageSpacing", label: "Image Spacing (px)" },
        {
          type: "string",
          name: "imageEffect",
          label: "Hover Effect",
          options: ["none", "zoom", "fade", "grayscale", "blur"]
        },
        { type: "boolean", name: "showCaptions", label: "Show Captions" },
        {
          type: "string",
          name: "imageBorderRadius",
          label: "Border Radius",
          options: ["none", "small", "medium", "large", "round"]
        }
      ]
    }
  ]
};
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "SEO Description"
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Page Sections",
            templates: [
              heroBlockSchema,
              servicesBlockSchema,
              testimonialBlockSchema,
              ctaBlockSchema,
              contentBlockSchema,
              galleryBlockSchema
            ]
          }
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return "/";
            }
            return `/${document._sys.filename}`;
          }
        }
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          global: true,
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "object",
            name: "header",
            label: "Header",
            fields: [
              { type: "string", name: "siteName", label: "Site Name" },
              { type: "image", name: "logo", label: "Logo" },
              {
                type: "object",
                list: true,
                name: "nav",
                label: "Navigation",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "link", label: "Link" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              { type: "rich-text", name: "text", label: "Footer Text" },
              {
                type: "object",
                list: true,
                name: "social",
                label: "Social Links",
                fields: [
                  { type: "string", name: "platform", label: "Platform" },
                  { type: "string", name: "url", label: "URL" },
                  { type: "image", name: "icon", label: "Icon" }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
