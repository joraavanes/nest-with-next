import { Injectable } from "@nestjs/common";

@Injectable()
export default class ApiService {
    allItems() {
        return [{
            id: 1,
            title: 'prod1',
            price: 12.99
        }, {
            id: 2,
            title: 'prod2',
            price: 12.99
        }, {
            id: 3,
            title: 'prod3',
            price: 12.99
        }, {
            id: 4,
            title: 'prod4',
            price: 12.99
        }, {
            id: 5,
            title: 'prod5',
            price: 12.99
        }];
    }
}