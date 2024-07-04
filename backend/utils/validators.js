import joi from "joi";

const userSchema = joi.object({
  name: joi.string().required(),
});

const userAccDetailsSchema = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "lk"] } })
    .required(),
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

const validateUser = ({ name, email, role, password, passwordConfirm }) => {
  const { error } =
    userSchema.validate({ name }) ||
    userAccDetailsSchema.validate({
      email,
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
