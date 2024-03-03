export interface GlobalOrderInterface {
    id: string;
    userId : string;
    status: 'new' |'running' | 'send';
    createdAt: Date;
    cart : {
        productId : string;
        quantity: number;
    }[];
 }