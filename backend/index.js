const express = require("express");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors());

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/backend_1")
  .then(() => console.log("database connect"))
  .catch((err) => console.log("err occurred : ", err));

const userSchema = mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

// collection
const user = new mongoose.model("user", userSchema);

app.post("/usersLogin", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const person = await user.findOne({ name: req.body.Name });
    if (person && person.password === req.body.Password) {
      res.json({"message" : "user authenticated"})
    } else {
      res.json({"message" : "user not found"})
    }
  } catch (err) {
    console.log("error occured in authentication : ", err);
  }
});

app.post("/users", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const person = await user.findOne({ name: req.body.signupName });
    // console.log(person);
    if(!person){
      const { signupName, signupEmail, signupPassword } = req.body;
      let newUser = {
        id: uuidv4(),
        name: signupName,
        email: signupEmail,
        password: signupPassword,
      };
      await user.create(newUser);
      res.json({"message":"user created"})
    }
    else{
      res.json({"message":"username already taken"})
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
});

app.post("/users/resetPassword", async  (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    // console.log(req.body);
    const person = await user.findOne({ name: req.body.Name });
    if (person) {
      person.password = req.body.ConfirmPassword;
      await person.save();
      res.json({"message":"password changed successfully!"});
    } else {
      res.json({"message":"User not found!"});
    }
  } catch (error) {
    console.error("Error finding user:", error);
  }
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
