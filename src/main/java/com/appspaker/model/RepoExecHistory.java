package com.appspaker.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepoExecHistory extends JpaRepository<ExecHistory, Long> {

}
