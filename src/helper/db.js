import mysql from "mysql2";

const pool = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "jsr",
  waitForConnections: true,
  connectionLimit: 10, // Maximum number of connections in the pool
  queueLimit: 0, // Unlimited queueing
  connectTimeout: 10000, // Optional: 10 seconds connection timeout
});
// Function to periodically ping the database to keep the connections alive
function keepConnectionAlive() {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error in getting connection for keep-alive:", err);
      return;
    }
    // Ping the database to keep the connection alive
    connection.ping((pingError) => {
      if (pingError) {
        console.error("Error in pinging the database:", pingError);
      }
      connection.release(); // Always release the connection back to the pool
    });
  });
}

// Set an interval to run the keep-alive function every 15 minutes
setInterval(keepConnectionAlive, 900000); // 900000 ms = 15 minutes

export default pool.promise();
// export default connection;
