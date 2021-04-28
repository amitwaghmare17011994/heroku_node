import { User } from "Connection";

export default class Student {
  Student = [];
  constructor() { }
}

export class StudentOperations extends Student {
  getStudent = async (req, h) => {
    try {
      const data = await User.find()
      return h.response(data).code(200);
    } catch (err) {
      return h.response(err).code(400);
    }
  };


  insertStudent = async (req, h) => {
    try {
      const payload = JSON.parse(req.payload)
      await User.insertMany(payload)
      const data = await User.find()
      return h.response(data).code(200);
    } catch (err) {
      return h.response(err).code(400);
    }
  }

  removeAll = async (req,h) => {
    try {
      await User.remove({})
      return  h.response([]).code(200);
    } catch (err) {
      return h.response(err).code(400);
    }
  }
}
