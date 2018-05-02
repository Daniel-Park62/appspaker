package com.appspaker;

import java.util.List;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.appspaker.model.ExecHistory;
import com.appspaker.model.RepoExecHistory;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class AppspakerApplicationTests {

	@Autowired
	RepoExecHistory repoExecHistory ;
	
//	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Test @Ignore
	public void contextLoads() {
		ExecHistory execHistory = new ExecHistory("find", "-d /mydir") ;
		repoExecHistory.save(execHistory);
		
		List<ExecHistory> execHistorylist = repoExecHistory.findAll();
		
		for( ExecHistory eh : execHistorylist) 
			log.info("test: " + eh) ;
	
	}

}
