package com.appspaker.model;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface RepoFileList extends CrudRepository<FileList, FileListPK> {
	
	List<FileList> findByCat(String cat);

}
