// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { v4: uuidv4 } = require("uuid");

// const s3Client = new S3Client({ region: process.env.AWS_REGION });

// User login
async function login(req, res) {
  const {userName, password} = req.body;
  try {
    const user = await UserModel.findOne({ userName });

    if (user && bcrypt.compareSync(password, user.password)){
      const token = jwt.sign({user}, process.env.JWT_SECRET);

      res.status(200).json({user, token});
    } else {
      res.status(400).json({error: "Username or Password is incorrect"});
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// User Sign up
async function signup(req, res) {
  let { userName, password, email } = req.body;

  console.log(req.body);
  try {
    const userDoc = await UserModel.findOne({ userName });
    if (userDoc) {
      return res.status(400).json({ error: "Username already taken." });
    }

    // if (!req.file)
    //   return res.status(400).json({ error: "Please Submit a Photo!" });

    // const filePath = `Mentor-List/profile-imgs/${uuidv4()}-${
    //   req.file.originalname
    // }`;
    // const params = {
    //   Bucket: process.env.BUCKET_NAME,
    //   Key: filePath,
    //   Body: req.file.buffer,
    // };

    // const command = new PutObjectCommand(params);

    try {
      // const data = await s3Client.send(command);

      password = bcrypt.hashSync(password, 10);

      const createdUser = await UserModel.create({
        username: userName,
        email,
        password,
        // profileImg: `https://${params.Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${filePath}`,
      });

      const token = jwt.sign({ user: createdUser }, process.env.JWT_SECRET);

      res.status(201).json({ token });
    } catch (err) {
      // console.log("Error uploading to S3:", err);

      return res
        .status(500)
        .json({ error: "Check back later, server issues with AWS upload" });
    }
  } catch (err) {
    console.log(err);

    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  signup,
  login,
};