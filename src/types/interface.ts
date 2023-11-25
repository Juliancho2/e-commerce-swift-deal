export interface simplifiedProduct{
    _id: string,
    name: string,
    price: number,
    categoryName: string,
    imageUrl: string
}

export interface fullProduct extends simplifiedProduct{
    description: string,
    images: string[],
    price_id: string
}


export interface Welcome {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}

export interface Rating {
    rate:  number;
    count: number;
}

