package com.appspaker.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;

@Entity
@Getter
public class ExecHistory {
	@Id
    @GeneratedValue
    private Long id;
	
	private String ename;
	private String opt;
	
	public ExecHistory(String ename, String opt) {
		this.ename = ename;
		this.opt = opt;
	}

	@Override
	public String toString() {
		return "ExecHistory [id=" + id + ", ename=" + ename + ", opt=" + opt + "]";
	}

	public ExecHistory() {
	}
	
}
