export const config = () => ({
  NODE_ENV: process.env.NODE_ENV,
  mysql: {
    host: process.env.MYSQL_HOST || "127.0.0.1",
    port: parseInt(process.env.MYSQL_PORT || "3306", 10),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize:
      (process.env.MYSQL_SYNCHRONIZE || "false").toLowerCase() === "true",
  },
});
