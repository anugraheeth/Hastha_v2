import dbCon from "../Utils/db1.js";

const login = async (req, res) => {
  try {
    const { your_name, your_pass } = req.body;

    const sql = `SELECT * FROM user_info WHERE username = ? AND password = ?`;
    const [result] = await dbCon.execute(sql, [your_name, your_pass]);

    if (result.length === 0) {
      return res.status(404).json({ success: false, message: "User Does Not Exist or Invalid Credentials" });
    }

    res.status(200).json({ success: true, message: "User exists", data: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export default login;
