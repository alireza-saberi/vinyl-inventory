package com.vinyl.model;

import java.util.Objects;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Album {

    private int album_id;
    private String album_name;
    private String artist;
    private int album_year;
    private String album_condition;
    private String upc;
    private String note;
    private String username;

    public Album() {
    }

    public Album(int album_id, String album_name, String artist, int album_year, String album_condition, String upc, String note, String username) {
        this.album_id = album_id;
        this.album_name = album_name;
        this.artist = artist;
        this.album_year = album_year;
        this.album_condition = album_condition;
        this.upc = upc;
        this.note = note;
        this.username = username;
    }

    public int getAlbum_id() {
        return album_id;
    }

    public void setAlbum_id(int album_id) {
        this.album_id = album_id;
    }

    public String getAlbum_name() {
        return album_name;
    }

    public void setAlbum_name(String album_name) {
        this.album_name = album_name;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public int getAlbum_year() {
        return album_year;
    }

    public void setAlbum_year(int album_year) {
        this.album_year = album_year;
    }

    public String getAlbum_condition() {
        return album_condition;
    }

    public void setAlbum_condition(String album_condition) {
        this.album_condition = album_condition;
    }

    public String getUpc() {
        return upc;
    }

    public void setUpc(String upc) {
        this.upc = upc;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 37 * hash + this.album_id;
        hash = 37 * hash + Objects.hashCode(this.album_name);
        hash = 37 * hash + Objects.hashCode(this.artist);
        hash = 37 * hash + this.album_year;
        hash = 37 * hash + Objects.hashCode(this.album_condition);
        hash = 37 * hash + Objects.hashCode(this.upc);
        hash = 37 * hash + Objects.hashCode(this.note);
        hash = 37 * hash + Objects.hashCode(this.username);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Album other = (Album) obj;
        if (this.album_id != other.album_id) {
            return false;
        }
        if (this.album_year != other.album_year) {
            return false;
        }
        if (!Objects.equals(this.album_name, other.album_name)) {
            return false;
        }
        if (!Objects.equals(this.artist, other.artist)) {
            return false;
        }
        if (!Objects.equals(this.album_condition, other.album_condition)) {
            return false;
        }
        if (!Objects.equals(this.upc, other.upc)) {
            return false;
        }
        if (!Objects.equals(this.note, other.note)) {
            return false;
        }
        if (!Objects.equals(this.username, other.username)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Album{" + "album_id=" + album_id + ", album_name=" + album_name + ", artist=" + artist + ", album_year=" + album_year + ", album_condition=" + album_condition + ", upc=" + upc + ", note=" + note + ", username=" + username + '}';
    }

}
