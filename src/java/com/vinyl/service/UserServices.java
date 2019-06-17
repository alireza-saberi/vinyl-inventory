/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.vinyl.service;

import com.vinyl.DAO.UserDAO;
import com.vinyl.model.Users;
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
@Path("user")
public class UserServices {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of UserServices
     */
    public UserServices() {
    }

    @POST
    @Path("/adduser")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces("text/plain")
    public int addUser(Users user) {
        System.out.println("Adding user ..." + user.toString());
        UserDAO db = new UserDAO();
        return db.addUser(user);
    }

    @DELETE
    @Path("/deluser")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces("text/plain")
    public int deleteUser(Users user) {
        UserDAO db = new UserDAO();
        return db.deleteUser(user);
    }

    @PUT
    @Path("/updateuser")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces("text/plain")
    public int updateUser(Users user) {
        UserDAO db = new UserDAO();
        return db.deleteUser(user);
    }

    @POST
    @Path("/isuservalid")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces("text/plain")
    public boolean isUserValid(Users user) {
        UserDAO db = new UserDAO();
        return db.isUserValid(user);
    }

    @POST
    @Path("/readuser")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Users readUser(Users user) {
        System.out.println("Reading user ..." + user.toString());
        UserDAO db = new UserDAO();
        Users daoOutcome = db.readUser(user);
        if (daoOutcome != null) {
            return daoOutcome;
        }
        return new Users();
    }

}
