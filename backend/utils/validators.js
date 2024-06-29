import joi from "joi";

const userSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  name: joi.string().required(),
  age: joi.number().integer().min(1).max(100).required(),
  contactNumber: joi.string().min(10).max(10).required(),
});

const userAccDetailsSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  password: joi
    .string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .min(8)
    .max(16)
    .required(),
  passwordConfirm: joi
    .string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .min(8)
    .max(16)
    .required(),
  role: joi.string().required(),
});

const validateUser = ({
  name,
  username,
  age,
  contactNumber,
  role,
  password,
  passwordConfirm,
}) => {
  const { error } =
    userSchema.validate({ username, name, age, contactNumber }) ||
    userAccDetailsSchema.validate({
      username,
      password,
      passwordConfirm,
      role,
    });
  if (error) {
    return error.details[0].message;
  } else {
    return null;
  }
};

export { validateUser };
