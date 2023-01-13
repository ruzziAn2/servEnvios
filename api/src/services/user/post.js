import User from "../../models/User";

export const create = async (user) => User.create(user);
