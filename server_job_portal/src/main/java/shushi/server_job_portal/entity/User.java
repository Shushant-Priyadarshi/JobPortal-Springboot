package shushi.server_job_portal.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import shushi.server_job_portal.dto.AccountType;
import shushi.server_job_portal.dto.UserDTO;

@Data
@Document(collection = "users")
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    private String id;
    private String name;
    @Indexed(unique = true)
    private String email;
    private String password;
    private AccountType accountType;

    public UserDTO toDTO(){
        return  new UserDTO(this.id, this.name, this.email, this.password, this.accountType);
    }
}
