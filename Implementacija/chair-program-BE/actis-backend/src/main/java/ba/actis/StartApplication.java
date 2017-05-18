package ba.actis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"ba.actis"})
@EnableZuulProxy
public class StartApplication {

  public static void main(String[] args) throws Exception {
    SpringApplication.run(StartApplication.class, args);
  }

}