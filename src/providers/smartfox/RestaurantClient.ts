import { SfsClientBaseExtension } from "../core/smartfox/sfs-client-extension";
import { RestaurantCMD } from "./RestaurantCMD";
import { RestaurantOfUser } from "../class/RestaurantOfUser";
import { Restaurants } from "../class/Restaurant";
import { Users } from "../class/Users";
import { Vendors } from "../class/Vendors";
import { Products } from "../class/Products";
import { Floors } from "../class/Floors";
import { Areas } from "../class/Areas";
import { Tables } from "../class/Tables";
import { ProductInOrder } from "../class/ProductInOrder";

export class RestaurantClient extends SfsClientBaseExtension {
    public static _instance: RestaurantClient = null;

    constructor() {
        super();
    }

    public static getInstance() {
        if (this._instance == null) {
            this._instance = new RestaurantClient();
        }
        return this._instance;
    }

    public doBaseDataWithCMDParams(cmd, params) {
        if (cmd == RestaurantCMD.GET_RESTAURANT_OF_USER) {
            return this.onParseGET_RESTAURANT_OF_USER(params);
        }
        else if (cmd == RestaurantCMD.CREATE_FLOOR) {
            return this.onParseCreateFloor(params);
        }
        else if (cmd == RestaurantCMD.GET_LIST_RESTAURANT) {
            return this.onParseGetListRestaurant(params);
        }
        else if (cmd == RestaurantCMD.GET_LIST_ACCOUNT) {
            return this.onParseGetListAccount(params);
        }
        else if (cmd == RestaurantCMD.GET_VENDOR_LIST) {
            return this.onParseGetListVendor(params);
        }
        else if (cmd == RestaurantCMD.GET_PRODUCT_IN_RESTAURANT) {
            return this.onParseGET_PRODUCT_IN_RESTAURANT(params);
        }
        else if (cmd == RestaurantCMD.CREATE_ORDER) {
            return this.doParseInfo(params);
        }
        else if (cmd == RestaurantCMD.ADD_PRODUCT_INTO_ORDER) {
            return params;
        }

        else if (cmd == RestaurantCMD.GET_LIST_FLOOR_IN_RESTAURANT) {
            return this.onParseGET_LIST_FLOOR_IN_RESTAURANT(params);
        } else if (cmd == RestaurantCMD.GET_LIST_AREA_IN_RESTAURANT) {
            return this.onParseGET_LIST_AREA_IN_RESTAURANT(params);
        } else if (cmd == RestaurantCMD.GET_LIST_TABLE_IN_RESTAURANT) {
            return this.onParseGET_LIST_TABLE_IN_RESTAURANT(params);
        }
        else if (cmd == RestaurantCMD.GET_LIST_TABLE_IS_SERVE) {
            return this.onParseGET_LIST_TABLE_IN_RESTAURANT(params);
        }
        else if(cmd == RestaurantCMD.GET_PRODUCT_IN_ORDER){
            return this.doParseArrayExtensions(params);
        }
        else if(cmd == RestaurantCMD.GET_ORDER_INFO){
            return this.doParseInfo(params);
        }
    }

    public onParseProductInOrder(array){
        let res = [];
        if(array){
            for(let i = 0;i < array.size(); i++){
                let sfs = array.getSFSObject(i);
                let newRes = new ProductInOrder();
                newRes.fromSFSObject(sfs);
                res.push(newRes);
            }
        }
        return res;
    }

    public onParseGET_LIST_FLOOR_IN_RESTAURANT(params) {
        let data = this.doParseArrayExtensions(params);
        let array = data.array;
        let res = [];
        if (array) {
            for (let i = 0; i < array.size(); i++) {
                let sfs = array.getSFSObject(i);
                let newRes = new Floors();
                newRes.fromSFSObject(sfs);
                res.push(newRes);
            }
        }
        return res;
    }

    public onParseGET_LIST_AREA_IN_RESTAURANT(params) {
        let data = this.doParseArrayExtensions(params);
        let array = data.array;
        let res = [];
        if (array) {
            for (let i = 0; i < array.size(); i++) {
                let sfs = array.getSFSObject(i);
                let newRes = new Areas();
                newRes.fromSFSObject(sfs);
                res.push(newRes);
            }
        }
        return res;
    }

    public onParseGET_LIST_TABLE_IN_RESTAURANT(params) {
        let data = this.doParseArrayExtensions(params);
        let array = data.array;
        let res = [];
        if (array) {
            for (let i = 0; i < array.size(); i++) {
                let sfs = array.getSFSObject(i);
                let newRes = new Tables();
                newRes.fromSFSObject(sfs);
                res.push(newRes);
            }
        }
        return res;
    }

    public onParseGET_PRODUCT_IN_RESTAURANT(params) {
        let data = this.doParseArrayExtensions(params);
        let array = data.array;
        let res = [];
        if (array) {
            for (let i = 0; i < array.size(); i++) {
                let sfs = array.getSFSObject(i);
                let newRes = new Products();
                newRes.fromSFSObject(sfs);
                res.push(newRes);
            }
        }
        return res;
    }

    public onParseGetListVendor(params) {
        let data = this.doParseArrayExtensions(params);
        let array = data.array;
        let res = [];
        if (array) {
            for (let i = 0; i < array.size(); i++) {
                let sfs = array.getSFSObject(i);
                let newRes = new Vendors();
                newRes.fromSFSObject(sfs);
                res.push(newRes);
            }
        }
        return res;
    }
    public onParseGET_RESTAURANT_OF_USER(params) {
        let data = this.doParseArrayExtensions(params);
        let array = data.array;
        let res = [];
        if (array) {
            for (let i = 0; i < array.size(); i++) {
                let sfs = array.getSFSObject(i);
                let newRes = new RestaurantOfUser();
                newRes.fromSFSObject(sfs);
                res.push(newRes);
            }
        }
        return res;
    }

    public onParseGetListRestaurant(params) {
        let data = this.doParseArrayExtensions(params);
        let array = data.array;
        let res = [];
        if (array) {
            for (let i = 0; i < array.size(); i++) {
                let sfs = array.getSFSObject(i);
                let newRes = new Restaurants();
                newRes.fromSFSObject(sfs);
                res.push(newRes);
            }
        }
        return res;
    }

    public onParseGetListAccount(params) {
        let data = this.doParseArrayExtensions(params);
        let array = data.array;
        let res = [];
        if (array) {
            for (let i = 0; i < array.size(); i++) {
                let sfs = array.getSFSObject(i);
                let newRes = new Users();
                newRes.fromSFSObject(sfs);
                res.push(newRes);
            }
        }
        return res;
    }

    public onParseCreateFloor(params) {
        let res = this.doParseInfo(params);
        return res;
    }

    // public onParseGET_PRODUCT_IN_RESTAURANT(params){
    //     let data = this.doParseArrayExtensions(params);
    //     let array = data.array;
    //     let res = [];
    //     if(array){
    //         for(let i = 0;i < array.size(); i++){
    //             let sfs = array.getSFSObject(i);
    //             let newRes = new RestaurantOfUser();
    //             newRes.fromSFSObject(sfs);
    //             res.push(newRes);
    //         }
    //     }
    //     return res;

    // }
}