import mongoose from 'mongoose';
import bycrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  //Compare the users enteredpassWord with this password that is in the database
  return await bycrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  //If we update our name or email, but not the password we don't want the bycrypt run because if it does it will create a new hash and we won't be able to login so lets check it

  if (!this.isModified('password')) {
    next();
  }

  const salt = await bycrypt.genSalt(10);
  this.password = await bycrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
