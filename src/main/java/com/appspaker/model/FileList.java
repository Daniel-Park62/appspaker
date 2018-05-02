package com.appspaker.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name="filelistt")
@IdClass(FileListPK.class)
public class FileList {

	@Id
	private String cat;
	@Id
	private String dir;
	@Id
	private String fname;
	private int sz;
	
	public String getCat() {
		return cat;
	}
	public void setCat(String cat) {
		this.cat = cat;
	}
	public String getDir() {
		return dir;
	}
	public void setDir(String dir) {
		this.dir = dir;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public int getSz() {
		return sz;
	}
	public void setSz(int sz) {
		this.sz = sz;
	}
	
}
