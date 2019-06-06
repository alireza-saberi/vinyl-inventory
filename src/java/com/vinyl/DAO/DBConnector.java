package com.vinyl.DAO;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Properties;

/**
 *
 * @author alans
 */
public class DBConnector {

    Connection connection = null;
//    private Connection dbConnection

    public Connection getConnection() {

        Properties conf = new Properties();
        try {
            conf.load(new FileInputStream("D:\\JavaCourse\\WebSevice\\finalproject\\VinylRecord\\config\\database.properties"));
            String dbUrl = conf.getProperty("dbURL");
            String user = conf.getProperty("user");
            String pass = conf.getProperty("password");
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection(dbUrl, user, pass);
        } catch (ClassNotFoundException | SQLException | IOException e) {
            System.out.println(e);
        }
        return connection;
    }

    public void closeConnection(DBConnector myConn, PreparedStatement myStmt) {

        try {
            if (myStmt != null) {
                myStmt.close();
            }

            if (myConn != null) {
                myConn.connection.close();
            }
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    public int executeQuery(String query) throws ClassNotFoundException, SQLException {
        return connection.createStatement().executeUpdate(query);
    }

}
