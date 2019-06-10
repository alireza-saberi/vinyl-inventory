/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.vinyl.service;

import com.vinyl.DAO.AlbumDAO;
import com.vinyl.model.Album;
import com.vinyl.model.UserAlbum;
import com.vinyl.model.Users;
import java.util.ArrayList;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.Produces;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author alans
 */
@Path("albums")
public class AlbumsResources {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of AlbumsResources
     */
    public AlbumsResources() {
    }

    @POST
    @Path("/addalbum")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces("text/plain")
    public int addAlbum(UserAlbum userAlbum) {
        Users user = userAlbum.getUser();
        Album album = userAlbum.getAlbum();
        AlbumDAO db = new AlbumDAO();
        return db.addAlbum(user, album);
    }

    @POST
    @Path("/readalbums")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Album> readAlbums(Users user) {
        System.out.println("reading user albums ....");
        AlbumDAO db = new AlbumDAO();
        System.out.println(db.readAlbums(user).size());
        return db.readAlbums(user);
    }

    @PUT
    @Path("/updateuser")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces("text/plain")
    public int updateAlbum(UserAlbum userAlbum) {
        Users user = userAlbum.getUser();
        Album album = userAlbum.getAlbum();
        AlbumDAO db = new AlbumDAO();
        return db.updateAlbum(user, album);
    }

    @POST
    @Path("/delalbum")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces("text/plain")
    public int deleteAlbum(Album album) {
//        Users user = userAlbum.getUser();
//        Album album = userAlbum.getAlbum();
        System.out.println("deleting an album from the user");
        System.out.println("" + album);
        AlbumDAO db = new AlbumDAO();
        return db.deleteAlbum(album);
    }

    @DELETE
    @Path("/delalbums")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces("text/plain")
    public int deleteAllAlbum(Users user) {
        AlbumDAO db = new AlbumDAO();
        return db.deleteAllAlbum(user);
    }
}
