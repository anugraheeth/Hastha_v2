import mysql from 'mysql2/promise';

const dbCon = mysql.createPool({
  host: "localhost",
  user: "cek",
  password: "hastha@123",
  database: "elephant_cek",
  waitForConnections: true,      
  connectionLimit: 10,           
  queueLimit: 0,          //unlimited queueing of requests
  connectTimeout: 10000,         
});


const logConnection = async () => {
  try {
    const connection = await dbCon.getConnection();
    console.log("elephant_cek connected");
    connection.release(); 
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

logConnection(); 
export default dbCon;
