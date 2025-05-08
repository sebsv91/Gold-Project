import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sv9a:Albondiga9901x***@cluster0.lhs7jtr.mongodb.net/"
    );
    console.log("---DB Connected");
  } catch (err) {
    console.error(err);
  }
};
