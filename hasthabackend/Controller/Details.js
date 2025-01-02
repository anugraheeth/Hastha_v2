import dbCon from "../Utils/db1.js";
import dbCon2 from "../Utils/db2.js";

const resdetails = async(req,res)=>{
    try {

        const [result] = await dbCon.execute("SELECT * FROM res_details");

        return res.status(200).json({success: true, message: "fetched data succcessfully ",data:result});
    } catch (error) {
        return res.status(500).json({success: false, message: "internal server error "});
    }
}

const comdetails = async(req,res)=>{
    try {     

        const [result] = await dbCon2.execute("SELECT * FROM commerical_building INNER JOIN non_res ON commerical_building.nid=non_res.nid");

        return res.status(200).json({success: true, message: "fetched data succcessfully ",data:result});
    } catch (error) {
        return res.status(500).json({success: false, message: "internal server error "});
    }
}

const hosdetails = async(req,res)=>{
    try {

        const [result] = await dbCon2.execute("SELECT * FROM hospital INNER JOIN non_res ON hospital.nid=non_res.nid");

        return res.status(200).json({success: true, message: "fetched data succcessfully ",data:result});
    } catch (error) {
        return res.status(500).json({success: false, message: "internal server error "});
    }
}

const edudetails = async(req,res)=>{
    try {
   
        const [result] = await dbCon2.execute("SELECT * FROM educational INNER JOIN non_res ON educational.nid=non_res.nid");

        return res.status(200).json({success: true, message: "fetched data succcessfully ",data:result});
    } catch (error) {
        return res.status(500).json({success: false, message: "internal server error "});
    }
}

const inddetails = async(req,res)=>{
    try {

        const [result] = await dbCon2.execute("SELECT * FROM industry INNER JOIN non_res ON industry.nid=non_res.nid");

        return res.status(200).json({success: true, message: "fetched data succcessfully ",data:result});
    } catch (error) {
        return res.status(500).json({success: false, message: "internal server error "});
    }
}

const reldetails = async(req,res)=>{
    try {

        const [result] = await dbCon2.execute("SELECT * FROM religious INNER JOIN non_res ON religious.nid=non_res.nid");

        return res.status(200).json({success: true, message: "fetched data succcessfully ",data:result});
    } catch (error) {
        return res.status(500).json({success: false, message: "internal server error "});
    }
}



export default {resdetails , comdetails , hosdetails , edudetails , inddetails , reldetails};