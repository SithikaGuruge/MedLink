import joi from "joi";

const userSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  password: joi
    .string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .min(8)
    .max(16)
    .required(),
  name: joi.string().required(),
  email: joi.string().email(),
  role: joi.string().required(),
  age: joi.number().integer().min(1).max(100).required(),
  contactNumber: joi.string().min(10).max(10).required(),
});

export const validateUser = (user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    return error.details[0].message;
  } else {
    return null;
  }
};
