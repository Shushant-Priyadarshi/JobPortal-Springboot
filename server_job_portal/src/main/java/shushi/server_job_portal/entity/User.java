package shushi.server_job_portal.entity;


import lombok.Data;
import shushi.server_job_portal.dto.AccountType;

@Data
public class User {
    private String id;
    private String name;
    private String email;
    private String password;
    private AccountType accountType;
}
