import User from "../../models/User";

export const all = async () => User.find({});
export const byId = async (id) => User.findById(id);

