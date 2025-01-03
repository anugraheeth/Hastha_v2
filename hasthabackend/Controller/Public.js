import dbCon from "../Utils/db1.js";
import dbCon2 from "../Utils/db2.js";


const publicc = async (req,res) => {
    try {
        const [result1] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details");
        const population = result1[0].total;

        const [result2] = await dbCon.execute("SELECT COUNT(*) as total FROM res_details");
        const houses = result2[0].total;

        const [result3] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE current_edu != 'nil'");
        const edutotal = result3[0].total;

        const [result4] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE (DATEDIFF(SYSDATE(), dob) / 365) > 60");
        const seniorcitizens = result4[0].total;
        
        const [result5] = await dbCon2.execute("SELECT COUNT(*) as total FROM commerical_building");
        const bussiness = result5[0].total;

        const [result6] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE disability = 'Yes' ");
        const disable = result6[0].total;

        return res.status(200).json({
            success: true,
            message: "Fetched data successfully",
            data: {
              population,
              houses,
              edutotal,
              seniorcitizens,
              bussiness,
              disable
            },
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


export default publicc;
