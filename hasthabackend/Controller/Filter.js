import dbCon from "../Utils/db1.js";

const RFilter = async (req,res) => {
    try {
        const [result] = await  dbCon.execute("SELECT p.uid, p.f_name, p.gender, r.house_number, p.phone_num, p.blood_group, p.education, p.cancer, p.bp, p.sugar, p.job_sec, p.bedridden, p.ex_serv,p.income,p.pension_avl,p.marital FROM per_details AS p INNER JOIN res_details AS r ON p.uid = r.uid WHERE p.id > 0;");
         return res.status(200).json({success : true,message : "Data fetched Successfully !",data: result})
    } catch (error) {
        return res.status(500).json({success : false,message:"Internal Server Error"})
    }
}
export default RFilter;