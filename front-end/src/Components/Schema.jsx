import * as Yup from "yup";

const signUpSchema = Yup.object({
  first_name: Yup.string().min(2).max(25).required("Please enter your first name"),
  last_name: Yup.string().min(2).max(25).required("Please enter your last name"),
  username: Yup.string().min(2).max(25).required("Please enter your username"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one numerical digit, and one special character"
    ),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .test("match", "Passwords must match", function (value) {
      return value === this.resolve(Yup.ref("password"));
    }),
});

export default signUpSchema;
