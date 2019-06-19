package com.vinyl.DAO;

import com.vinyl.model.Album;
import com.vinyl.model.Users;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

/**
 *
 * @author alans
 * Data Access Object class for the Album
 */
public class AlbumDAO {

    PreparedStatement preparedstatement = null;
    ResultSet resultSet = null;
    DBConnector obj_DB_Connection = null;
    Connection connection = null;
    int rowsAffected;

    /** Method: add album for a specific user
     * 
     * @param album, albums has username in it
     * @return integer value of effected row in SQL table
     */
    public int addAlbum(Album album) {

        try {
            obj_DB_Connection = new DBConnector();
            connection = obj_DB_Connection.getConnection();

            String query = "INSERT INTO album (album_name, artist, album_year, album_condition, upc, note, username) "
                    + "VALUES (?, ?, ?, ?, ?, ?, ?)";
            preparedstatement = connection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
            preparedstatement.setString(1, album.getAlbum_name());
            preparedstatement.setString(2, album.getArtist());
            preparedstatement.setString(3, Integer.toString(album.getAlbum_year()));
            preparedstatement.setString(4, album.getAlbum_condition());
            preparedstatement.setString(5, album.getUpc());
            preparedstatement.setString(6, album.getNote());
            preparedstatement.setString(7, album.getUsername());

            rowsAffected = preparedstatement.executeUpdate();

        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            obj_DB_Connection.closeConnection(obj_DB_Connection, preparedstatement);

        }
        return rowsAffected;
    }

    /** Method: read all albums of logged-in specific user 
    * 
    * @param user: the user who is already logged-in
    * @return ArrayList of albums for the logged-in user  
    **/
    public ArrayList<Album> readAlbums(Users user) {
        ArrayList<Album> albums = new ArrayList<>();
        Album album;

        try {
            obj_DB_Connection = new DBConnector();
            connection = obj_DB_Connection.getConnection();

            String query = "SELECT * from album "
                    + "WHERE username=?";
            preparedstatement = connection.prepareStatement(query);
            preparedstatement.setString(1, user.getUsername());

            resultSet = preparedstatement.executeQuery();

            while (resultSet.next()) {
                album = new Album();
                album.setAlbum_id(Integer.parseInt(resultSet.getString("album_id")));
                album.setAlbum_name(resultSet.getString("album_name"));
                album.setArtist(resultSet.getString("artist"));
                album.setAlbum_year(Integer.parseInt(resultSet.getString("album_year")));
                album.setAlbum_condition(resultSet.getString("album_condition"));
                album.setUpc(resultSet.getString("upc"));
                album.setNote(resultSet.getString("note"));
                album.setUsername(resultSet.getString("username"));
                albums.add(album);
            };

        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            obj_DB_Connection.closeConnection(obj_DB_Connection, preparedstatement);
        }

        return albums;

    }

    /** Method: update album for of logged-in specific user 
    *
    * @param album : is the album to be modified, album has logged in username information in it
    * @return integer of the affected row in SQL statement
    **/
    public int updateAlbum(Album album) {
        try {
            obj_DB_Connection = new DBConnector();
            connection = obj_DB_Connection.getConnection();

            String query = "UPDATE album "
                    + "SET artist=?, album_year=?, album_condition=?, upc=?, note=? "
                    + "WHERE username=? AND album_name=?";
            preparedstatement = connection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
            preparedstatement.setString(1, album.getArtist());
            preparedstatement.setString(2, Integer.toString(album.getAlbum_year()));
            preparedstatement.setString(3, album.getAlbum_condition());
            preparedstatement.setString(4, album.getUpc());
            preparedstatement.setString(5, album.getNote());
            preparedstatement.setString(6, album.getUsername());
            preparedstatement.setString(7, album.getAlbum_name());

            rowsAffected = preparedstatement.executeUpdate();

        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            obj_DB_Connection.closeConnection(obj_DB_Connection, preparedstatement);

        }
        return rowsAffected;
    }

    /** Method: delete album for of logged-in specific user 
    *
    * @param album : is the album to be modified, album has logged in username information in it
    * @return integer of the affected row in SQL statement
    **/    
    public int deleteAlbum(Album album) {
        try {
            obj_DB_Connection = new DBConnector();
            connection = obj_DB_Connection.getConnection();

            String query = "DELETE FROM album "
                    + "WHERE album_name=? AND artist=? AND album_year=? AND album_condition=? AND upc=? AND note=? AND username=?";
            preparedstatement = connection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
            preparedstatement.setString(1, album.getAlbum_name());
            preparedstatement.setString(2, album.getArtist());
            preparedstatement.setString(3, Integer.toString(album.getAlbum_year()));
            preparedstatement.setString(4, album.getAlbum_condition());
            preparedstatement.setString(5, album.getUpc());
            preparedstatement.setString(6, album.getNote());
            preparedstatement.setString(7, album.getUsername());

            rowsAffected = preparedstatement.executeUpdate();
            ResultSet generatedKeys = preparedstatement.getGeneratedKeys();
            if (generatedKeys.next()) {
                album.setAlbum_id(generatedKeys.getInt(1));
            }

        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            obj_DB_Connection.closeConnection(obj_DB_Connection, preparedstatement);

        }
        return rowsAffected;
    }

    /** Method: delete all albums for of logged-in specific user 
    *
    * @param user is the user who is the owner of the set of albums
    * @return integer of the affected row in SQL statement
    **/ 
    public int deleteAllAlbum(Users user) {
        try {
            obj_DB_Connection = new DBConnector();
            connection = obj_DB_Connection.getConnection();

            String query = "DELETE FROM album "
                    + "WHERE username=?";
            preparedstatement.setString(1, user.getUsername());

            rowsAffected = preparedstatement.executeUpdate();

        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            obj_DB_Connection.closeConnection(obj_DB_Connection, preparedstatement);

        }

        return rowsAffected;

    }

    /** Method: check if album exists for of logged-in specific user 
     * a repeative album is not allowed to be added.
    *
    * @param album 
    * @return boolean 
    **/ 
    public boolean albumExists(Album album) {

        try {
            obj_DB_Connection = new DBConnector();
            connection = obj_DB_Connection.getConnection();

            String query = "SELECT * from album "
                    + "WHERE username=? AND album_name=?";
            preparedstatement = connection.prepareStatement(query);
            preparedstatement.setString(1, album.getUsername());
            preparedstatement.setString(2, album.getAlbum_name());

            resultSet = preparedstatement.executeQuery();

            if (resultSet.next()) {
                return true;
            } else {
                return false;
            }

        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            obj_DB_Connection.closeConnection(obj_DB_Connection, preparedstatement);
        }

        return false;
    }

}
