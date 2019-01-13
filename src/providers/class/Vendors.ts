import { Paramskey } from "../smartfox/Paramkeys";

export class Vendors{
    private  vendor_id : number = -1;
	private  name : string = "";
	private  status : number = -1;
	constructor(){

    }

    public  toSFSObject(o) {
		o.putInt(Paramskey.VENDOR_ID,this.vendor_id);
		o.putInt(Paramskey.STATUS, this.status);
		o.putUtfString(Paramskey.NAME, this.name);
		return o;
	}
	
	public  fromSFSObject( o) {
		if(o.containsKey(Paramskey.VENDOR_ID)) {
			this.setVendor_id(o.getInt(Paramskey.VENDOR_ID));
		}
		if(o.containsKey(Paramskey.NAME)) {
			this.setName(o.getUtfString(Paramskey.NAME));
		}
		if(o.containsKey(Paramskey.STATUS)) {
			this.setStatus(o.getInt(Paramskey.STATUS));
		}
	}
	
	
	public  getVendor_id() {
		return this.vendor_id;
	}
	public  setVendor_id( vendor_id) {
		this.vendor_id = vendor_id;
	}
	public  getName() {
		return this.name;
	}
	public  setName( name) {
		this.name = name;
	}
	public  getStatus() {
		return this.status;
	}
	public  setStatus( status) {
		this.status = status;
	}
}