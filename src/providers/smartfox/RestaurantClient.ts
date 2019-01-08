import { SfsClientBaseExtension } from "../core/smartfox/sfs-client-extension";
import { RestaurantCMD } from "./RestaurantCMD";
import { RestaurantOfUser } from "../class/RestaurantOfUser";

export class RestaurantClient extends SfsClientBaseExtension{
    public static _instance : RestaurantClient = null;

    constructor(){
        super();
    }

    public static getInstance(){
        if(this._instance == null){
            this._instance = new RestaurantClient();
        }
        return this._instance;
    }

    public doBaseDataWithCMDParams(cmd,params){
        if(cmd == RestaurantCMD.GET_RESTAURANT_OF_USER){
            return this.onParseGET_RESTAURANT_OF_USER(params);
        }
        else if(cmd == RestaurantCMD.CREATE_FLOOR){
            return this.onParseCreateFloor(params);
        }
    }

    public onParseGET_RESTAURANT_OF_USER(params){
        let data = this.doParseArrayExtensions(params);
        let array = data.array;
        let res = [];
        if(array){
            for(let i = 0;i < array.size(); i++){
                let sfs = array.getSFSObject(i);
                let newRes = new RestaurantOfUser();
                newRes.fromSFSObject(sfs);
                res.push(newRes);
            }
        }
        return res;
    }

    public onParseCreateFloor(params){
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