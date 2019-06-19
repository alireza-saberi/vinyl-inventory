package com.vinyl.DAO;

import com.vinyl.model.Users;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/** 
 *
 * @author alans
 * Data Access Object that handle user basic needs
 */
public class UserDAO {

    PreparedStatement preparedstatement = null;
    ResultSet resultSet = null;
    DBConnector obj_DB_Connection = null;
    Connection connection = null;
    int rowsAffected;

    /** Method: add a new user to the SQL
     * 
     * @param user an object that has all information 
     * @return integer value of effected row in SQL table
     */
    public int addUser(Users user) {

        try {
            obj_DB_Connection = new DBConnector();
            connection = obj_DB_Connection.getConnection();

            String query = "INSERT INTO users (first_name, last_name, username, user_password) "
                    + "VALUES (?, ?, ?, ?)";
            preparedstatement = connection.prepareStatement(query);
            preparedstatement.setString(1, user.getFirst_name());
            preparedstatement.setString(2, user.getLast_name());
            preparedstatement.setString(3, user.getUsername());
            preparedstatement.setString(4, user.getUser_password());

            rowsAffected = preparedstatement.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            obj_DB_Connection.closeConnection(obj_DB_Connection, preparedstatement);
        }
        return rowsAffected;
    }

    /** Method: drop/delete a new user to the SQL
     * 
     * @param user an object that has all information 
     * @return integer value of effected row in SQL table
     */
    public int deleteUser(Users user) {
        try {
            obj_DB_Connection = new DBConnector();
            connection = obj_DB_Connection.getConnection();

            String query = "DELETE FROM users "
                    + "WHERE username=?";
            preparedstatement = connection.prepareStatement(query);
            preparedstatement.setString(1, user.getUsername());

            rowsAffected = preparedstatement.executeUpdate();

        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            obj_DB_Connection.closeConnection(obj_DB_Connection, preparedstatement);
        }
        return rowsAffected;
    }

    // only changing name, and family name with this methiod
    /** Method: update a user inside the SQL
     * 
     * @param user an object that has all information 
     * @return integer value of effected row in SQL table
     */
    public int updateUser(Users user) {
        try {
            obj_DB_Connection = new DBConnector();
            connection = obj_DB_Connection.getConnection();

            String query = "UPDATE users "
                    + "SET first_name=?, last_name=?, "
                    + "WHERE username=?";
            preparedstatement = connection.prepareStatement(query);
            preparedstatement.setString(1, user.getFirst_name());
            preparedstatement.setString(2, user.getLast_name());
            preparedstatement.setString(3, user.getUsername());

            rowsAffected = preparedstatement.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            obj_DB_Connection.closeConnection(obj_DB_Connection, preparedstatement);
        }
        return rowsAffected;
    }

    // check if the user exist
    /** Method: checks if the user already exists inside database
     * 
     * @param user an object that has all information 
     * @return boolean value of true/false regarding to validation of the a user
     * a user is valid if (s)he doesnt exist inside database
     * a user is invalid if (s)he exist inside database
     */
    public boolean isUserValid(Users user) {
        try {
            obj_DB_Connection = new DBConnector();
            connection = obj_DB_Connection.getConnection();

            String query = "SELECT * from users "
                    + "WHERE username=?";
            preparedstatement = connection.prepareStatement(query);
            preparedstatement.setString(1, user.getUsername());

            resultSet = preparedstatement.executeQuery();

            return resultSet.next();

        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            obj_DB_Connection.closeConnection(obj_DB_Connection, preparedstatement);
        }

        return false;

    }
    
    /** Method: reads a user if it exist inside the SQL database
     * 
     * @param user an object that has user pass information
     * @return user information if it exists inside the database
     */
    public Users readUser(Users user) {
        Users loggedUser = new Users();
        try {
            obj_DB_Connection = new DBConnector();
            connection = obj_DB_Connection.getConnection();

            String query = "SELECT * from users "
                    + "WHERE username=? AND user_password=?";
            preparedstatement = connection.prepareStatement(query);
            preparedstatement.setString(1, user.getUsername());
            preparedstatement.setString(2, user.getUser_password());
            resultSet = preparedstatement.executeQuery();

            while (resultSet.next()) {
                loggedUser.setFirst_name(resultSet.getString("first_name"));
                loggedUser.setLast_name(resultSet.getString("last_name"));
                loggedUser.setUsername(resultSet.getString("username"));
                loggedUser.setUser_password(resultSet.getString("user_password"));
                return loggedUser;
            }

        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            obj_DB_Connection.closeConnection(obj_DB_Connection, preparedstatement);
        }

        return null;
    }

}
