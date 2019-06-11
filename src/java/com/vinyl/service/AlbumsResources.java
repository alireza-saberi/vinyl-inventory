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
    public int addAlbum(Album album) {
        AlbumDAO db = new AlbumDAO();
        return db.addAlbum(album);
    }

    @POST
    @Path("/readalbums")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Album> readAlbums(Users user) {
        System.out.println("reading user albums ....");
        AlbumDAO db = new AlbumDAO();
        return db.readAlbums(user);
    }

    @POST
    @Path("/updatalbum")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces("text/plain")
    public int updateAlbum(Album album) {
        System.out.println("updating an album from the user");
        AlbumDAO db = new AlbumDAO();
        return db.updateAlbum(album);
    }

    @POST
    @Path("/delalbum")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces("text/plain")
    public int deleteAlbum(Album album) {
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
