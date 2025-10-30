import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
    slug: "services",
    labels: {
        singular: "Service",
        plural: "Services",
    },
    admin: {
        defaultColumns: ["title", "description"],
        useAsTitle: "title",
        description: "Collection of services offered",
    },
    fields: [
        {
            type: "upload",
            name: "icon",
            label: "Service Icon",
            relationTo: "media",
            required: true,
        },
        {
            type: "text",
            name: "title",
            label: "Service Title",
            required: true,
        },
        {
            type: "textarea",
            name: "description",
            label: "Service Description",
            required: true,
        },
    ],
};