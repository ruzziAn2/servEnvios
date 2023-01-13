import User from "../../models/User";
export const byId = async (id) => User.findByIdAndDelete(id);
