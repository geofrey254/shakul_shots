import { Block } from "payload";

export const TeamBlock: Block = {
    slug: "team",
    fields: [
        {
            type:'text',
            name:'sectionTitle',
            label:'Section Title',
            required:true,
        },
        {
            type:'textarea',
            name:'sectionParagraph',
            label:'Section Paragraph',
            required:true,
        },
        {
            type:'relationship',
            name:'members',
            label:'Team Members',
            relationTo:'team',
            hasMany:true,
            required:true,
        }
    ]
}