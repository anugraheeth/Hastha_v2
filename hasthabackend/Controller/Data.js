import dbCon from "../Utils/db1.js";
import dbCon2 from "../Utils/db2.js";

const dashboard = async (req, res) => {
  try {
    const [result1] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details");
    const population = result1[0].total;

    const [result2] = await dbCon.execute("SELECT COUNT(*) as total FROM res_details");
    const houses = result2[0].total;

    const [result3] = await dbCon2.execute("SELECT COUNT(*) as total FROM non_res");
    const comersial = result3[0].total;

    const [result4] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE (DATEDIFF(SYSDATE(), dob) / 365) > 60 AND (gender = 'male' OR gender = 'Male')");
    const seniormale = result4[0].total;

    const [result5] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE (DATEDIFF(SYSDATE(), dob) / 365) > 60 AND (gender = 'female' OR gender = 'Female')");
    const seniorfemale = result5[0].total;

    const [result6] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE (DATEDIFF(SYSDATE(), dob) / 365) > 60 AND gender = 'transgender'");
    const seniortrans = result6[0].total;

    const [result7] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE (DATEDIFF(SYSDATE(), dob) / 365) > 60");
    const seniorcitizens = result7[0].total;

    const [result8] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE current_edu != 'nil' AND (gender = 'male' OR gender = 'Male')");
    const edumale = result8[0].total;

    const [result9] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE current_edu != 'nil' AND (gender = 'female' OR gender ='Female')");
    const edufemale = result9[0].total;

    const [result10] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE current_edu != 'nil' AND gender = 'transgender'");
    const edutrans = result10[0].total;

    const [result11] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE current_edu != 'nil'");
    const edutotal = result11[0].total;

    const [result12] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE marital = 'widower' AND (gender = 'male' OR gender = 'Male')");
    const widower = result12[0].total;

    const [result13] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE marital = 'widow' AND (gender = 'female' OR gender ='Female')");
    const widow = result13[0].total;

    const [result14] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE marital = 'widow' AND gender = 'transgender'");
    const transwidow = result14[0].total;

    const [result15] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE marital = 'widower' OR marital = 'widow'");
    const widowtotal = result15[0].total;

    const [result16] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE job_sec = 'government' AND gender = 'male'");
    const govempmale = result16[0].total;

    const [result17] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE job_sec = 'government' AND (gender = 'female' OR gender ='Female')");
    const govempfemale = result17[0].total;

    const [result18] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE job_sec = 'government' AND gender = 'transgender'");
    const govemptrans = result18[0].total;

    const [result19] = await dbCon.execute("SELECT COUNT(*) as total FROM per_details WHERE job_sec = 'government' AND (gender = 'male' OR gender = 'female')");
    const govtotal = result19[0].total;

    return res.status(200).json({
      success: true,
      message: "Fetched data successfully",
      data: {
        population,
        houses,
        comersial,
        seniormale,
        seniorfemale,
        seniortrans,
        seniorcitizens,
        edumale,
        edufemale,
        edutrans,
        edutotal,
        widower,
        widow,
        transwidow,
        widowtotal,
        govempmale,
        govempfemale,
        govemptrans,
        govtotal,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export default dashboard;
