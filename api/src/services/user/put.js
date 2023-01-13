import User from "../../models/User";


export const byId = async (id, user) => User.findByIdAndUpdate(id, user);
