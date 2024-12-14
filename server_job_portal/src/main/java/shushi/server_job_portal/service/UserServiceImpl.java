package shushi.server_job_portal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shushi.server_job_portal.dto.UserDTO;
import shushi.server_job_portal.entity.User;
import shushi.server_job_portal.repository.UserRepository;

@Service(value = "userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDTO registerUser(UserDTO userDTO) {
        User user = userDTO.toEntity();
        user =userRepository.save(user);
        return user.toDTO();
    }
}
