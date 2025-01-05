import dbCon from "../Utils/db1.js";
import dbCon2 from "../Utils/db2.js";

const RFilter = async (req,res) => {
    try {
        const [result] = await  dbCon.execute("SELECT p.uid, p.f_name, p.gender, r.house_number, p.phone_num, p.blood_group, p.education, p.cancer, p.bp, p.sugar, p.job_sec, p.bedridden, p.ex_serv,p.income,p.pension_avl,p.marital FROM per_details AS p INNER JOIN res_details AS r ON p.uid = r.uid WHERE p.id > 0;");
         return res.status(200).json({success : true,message : "Data fetched Successfully !",data: result})
    } catch (error) {
        return res.status(500).json({success : false,message:"Internal Server Error"})
    }
}

const CFilter = async (req,res) =>{
        try {
            const [result] = await dbCon2.execute("SELECT NR.nid,CB.liscense,NR.phone,CB.name_of_businness,NR.building_number,CB.cctv_avl,CB.type_of_businnes,CB.name_of_business_owner,CB.emergency_ss FROM commerical_building AS CB INNER JOIN non_res AS NR ON CB.nid=NR.nid;")
            return res.status(200).json({success:true,message:"Fetched Data Successfully",data:result})
        } catch (error) {
            return res.status(500).json({success:false,message:"Internal Server Error"})
        }
}
export default {RFilter,CFilter};