const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your Name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your Email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter vaild Email"],
  },
  password: {
    type: String,
    required: [true],
    minlength: 8,
  },
  passwordConform: {
    type: String,
    required: [true, "Please conform your password"],
    validate: {
      // This will works only for Create and Save
      validator: function (el) {
        return el === this.password;
      },
      message: "Password isn't matched",
    },
  },
  photo: {
    type: String,
  },
});

// Middleware , pre('save') works between getting data and sending date to Database
UserSchema.pre("save", async function (next) {
  // Only run if password is not modified
  if (!this.isModified("password")) return next();

  // Hash the password with the cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConform = undefined;

  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
