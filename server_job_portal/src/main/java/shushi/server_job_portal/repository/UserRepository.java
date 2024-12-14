package shushi.server_job_portal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import shushi.server_job_portal.entity.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

}
