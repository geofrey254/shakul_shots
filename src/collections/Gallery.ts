import type { CollectionConfig } from "payload";

export const Gallery: CollectionConfig = {
    slug: "gallery",
    labels: {
        singular: "Gallery Item",
        plural: "Gallery Items",
    },
    admin: {
        defaultColumns: ["title"],
        useAsTitle: "title",
        description: "Collection of gallery photos",
    },
    fields: [
        {
            type: "upload",
            name: "image",
            label: "Image",
            relationTo: "media",
            required: true,
        },
        {   
            type: "text",
            name: "title",
            label: "Title",
            required: true,
        },
        {
            type: "text",
            name: "category",
            label: "Category",
        },
    ],
};   