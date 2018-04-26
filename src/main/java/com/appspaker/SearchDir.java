package com.appspaker;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SearchDir {
	@RequestMapping("/search")
	public String search() {
		return "{cat:\"1\", dir:\"/abc/def/lib\", fname:\"mylib001.so\", sz:300012}";
	}

	@RequestMapping(value="/test")
	public Map<String, Object> test(){
	    	Map<String, Object> map = new HashMap<String, Object>();
	    	map.put("cat", "B");
	    	map.put("dir", "/mydir");
	    	map.put("fname", "appsparker.java");
	    	map.put("sz", 5500);
	    	return map;
	    }
}
