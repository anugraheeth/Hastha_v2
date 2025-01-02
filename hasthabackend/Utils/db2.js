import mysql from 'mysql2/promise';

const dbCon2 = mysql.createPool({
    host: "localhost",
    user: "cek",
    password: "hastha@123",
    database: "elephant_py2",
    waitForConnections: true,
    connectionLimit: 10, //traffic control 10@a time
    queueLimit: 0,       //unlimited queueing
});

const logConnection = async () => {
    try {
        const connection = await dbCon2.getConnection();
        console.log("elephant_py2 connected");
        connection.release(); 
        return dbCon2;
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; 
    }
};

logConnection();

export default dbCon2;
