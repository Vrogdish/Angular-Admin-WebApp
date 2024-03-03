import { GlobalUserInterface } from "../../../core/interfaces/global-user.interface";

export interface OrderInterface {
    id: string;
    user : GlobalUserInterface | undefined | null;
    status: 'new' |'running' | 'send';
    createdAt: Date;
    cart: {
        productId : string;
        productName: string | undefined;
        price: number | undefined;
        quantity: number;
    }[];
    total: number;
    }
    