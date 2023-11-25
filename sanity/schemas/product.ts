export default {
    name:"product",
    type:"document",
    title:"Product",
    fields:[
        {
            name:"name",
            type:"string",
            title:"name of the product"
        },
        {
            name:"images",
            type:"array",
            title:"product images",
            of:[
                {
                    type:"image"
                }
            ]
        },
        {
            name:"description",
            type:"text",
            title:"description of the product"
        },
        {
            name:"slug",
            type:"number",
            title:"slug of the product",
            options:{
                source: "name"
            }
        },
        {
            name:"price",
            type:"number",
            title:"price of the product"
        },
        {
            name:"price_id",
            title: "Stripe Price Id",
            type: "string",

        },
        {
            name:"category",
            type:"reference",
            title:"category of the product",
            to:[{type:"category"}]
        }
    ]
}
