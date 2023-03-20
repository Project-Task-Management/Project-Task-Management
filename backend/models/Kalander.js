import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const Kalander = mongoose.model("Kalander", schema);

export default Kalander;
