package ba.actis.validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import ba.actis.models.User;
import ba.actis.services.UserService;

@Component
public class UserValidation implements Validator {

	@Autowired
	private UserService userService;

	@Override
	public boolean supports(Class<?> aClass) {
		return User.class.equals(aClass);
	}

	@Override
	public void validate(Object o, Errors errors) {
		User user = (User) o;
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username", "NotEmpty");
		if (user.getEmail().length() < 6 || user.getEmail().length() > 32) {
			errors.rejectValue("email", "Size.userForm.email");
		}

		if (userService.findByEmail(user.getEmail()) != null) {
			errors.rejectValue("email", "Duplicate.userForm.email");
		}

		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", "NotEmpty");
		if (user.getPassword().length() < 4 || user.getPassword().length() > 15) {
			errors.rejectValue("password", "Size.userForm.password");
		}

		// TODO AKO hocemo ovo ispod, treba u User.java dodati i password
		// confirm, ali ne treba gubiti vrijeme na to
		/*
		 * if (!user.getPasswordConfirm().equals(user.getPassword())) {
		 * errors.rejectValue("passwordConfirm",
		 * "Diff.userForm.passwordConfirm"); }
		 */
	}
}
