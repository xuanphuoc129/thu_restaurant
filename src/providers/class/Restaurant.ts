import { Paramskey } from "../smartfox/Paramkeys";

export class Restaurants {
    private restaurant_id: number = -1;
    private name: string = "";
    private address: string = "";
    private hotline: string = "";
    private status: number = -1;
    private type_service: number = -1;
    private form_service: number = -1;

    constructor() {

    }

    public toSFSObject(o) {
        o.putInt(Paramskey.RESTAURANT_ID, this.getRestaurant_id());
        o.putUtfString(Paramskey.NAME, this.getName());
        o.putUtfString(Paramskey.HOTLINE, this.getHotline());
        o.putUtfString(Paramskey.ADDRESS, this.getAddress());
        o.putInt(Paramskey.TYPE_SERVICE, this.getType_service());
        o.putInt(Paramskey.FORM_SERVICE, this.getForm_service());
        o.putInt(Paramskey.STATUS, this.getStatus());
        return o;
    }

    public fromSFSObject(o) {
        if (o.containsKey(Paramskey.RESTAURANT_ID)) {
            this.setRestaurant_id(o.getInt(Paramskey.RESTAURANT_ID));
        }
        if (o.containsKey(Paramskey.NAME)) {
            this.setName(o.getUtfString(Paramskey.NAME));
        }
        if (o.containsKey(Paramskey.HOTLINE)) {
            this.setHotline(o.getUtfString(Paramskey.HOTLINE));
        }
        if (o.containsKey(Paramskey.TYPE_SERVICE)) {
            this.setType_service(o.getInt(Paramskey.TYPE_SERVICE));
        }
        if (o.containsKey(Paramskey.FORM_SERVICE)) {
            this.setForm_service(o.getInt(Paramskey.FORM_SERVICE));
        }
        if (o.containsKey(Paramskey.ADDRESS)) {
            this.setAddress(o.getUtfString(Paramskey.ADDRESS));
        }
        if (o.containsKey(Paramskey.STATUS)) {
            this.setStatus(o.getInt(Paramskey.STATUS));
        }
    }

    public getRestaurant_id() {
        return this.restaurant_id;
    }

    public setRestaurant_id(restaurant_id) {
        this.restaurant_id = restaurant_id;
    }

    public getName() {
        return this.name;
    }

    public setName(name) {
        this.name = name;
    }

    public getAddress() {
        return this.address;
    }

    public setAddress(address) {
        this.address = address;
    }

    public getHotline() {
        return this.hotline;
    }

    public setHotline(hotline) {
        this.hotline = hotline;
    }

    public getStatus() {
        return this.status;
    }

    public setStatus(status) {
        this.status = status;
    }

    public getType_service() {
        return this.type_service;
    }

    public setType_service(type_service) {
        this.type_service = type_service;
    }

    public getForm_service() {
        return this.form_service;
    }

    public setForm_service(form_service) {
        this.form_service = form_service;
    }
}