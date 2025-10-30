import { Block } from "payload";

export const TeamBlock: Block = {
    slug: "team",
    fields: [
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