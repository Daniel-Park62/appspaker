package com.appspaker;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.appspaker.model.FileList;
import com.appspaker.model.RepoFileList;

@Controller
public class SearchDir {

	@Autowired
	RepoFileList dao;

	@GetMapping("/flist/{cat}")
	@ResponseBody
	public List<FileList> findByCat(@PathVariable String cat) {
		System.out.println("cat:"+cat);
		List<FileList> flists = (List<FileList>) dao.findByCat(cat);
		System.out.println("flists = "+ flists.size());
		return flists;
	}

	@RequestMapping(value = "/flist")
	@ResponseBody
	public List<FileList> test() {
		List<FileList> flists = (List<FileList>) dao.findAll();
		System.out.println("flists = "+ flists.size());
		return flists;
	}
}
