package com.appspaker.model;

import java.io.Serializable;

public class FileListPK implements Serializable {

		private String cat;
		private String dir;
		private String fname;
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
		
}
