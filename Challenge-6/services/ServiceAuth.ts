import Users, { IUsers } from "../models/Users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export type TLoginPayload = {
  username: string;
  password: string;
};

const JWT_KEY = "RENTAL_BOOK_JWT_KEY";

class ServiceAuth {
  constructor() {}

  async login(payload: TLoginPayload) {
    const user = (await Users.query().findOne(
      "username",
      payload.username
    )) as unknown as IUsers;

    if (!user) {
      return {
        success: false,
        data: "User not found",
      };
    }

    const validatePassword = bcrypt.compareSync(
      payload.password,
      user.password
    );

    if (!validatePassword) {
      return {
        success: false,
        data: "Username and password wrong",
      };
    }

    return {
      success: true,
      data: user,
    };
  }

  // Register
  async register(payload: {
    username: string;
    email: string;
    password: string;
    role: string;
  }) {
    payload.password = this.hashPassword(payload.password);
    const create = await Users.query().insert(payload);
    return create;
  }

  hashPassword(password: string) {
    const SALT = bcrypt.genSaltSync(5);
    const passwordHash = bcrypt.hashSync(password, SALT);
    return passwordHash;
  }

  async validateUser(token: string) {
    console.log("token validate = ", token);
    const userData = jwt.verify(token, JWT_KEY) as IUsers;
    return userData.username;
  }

  //   async getUserById(id: string) {
  //     const user = await Users.query().findById(id);
  //     return user;
  //   }

  generateToken(user: IUsers) {
    const token = jwt.sign({ ...user }, JWT_KEY);
    return token;
  }

  //   async validateToken(token: string) {
  //     const decode = jwt.verify(token, JWT_KEY);
  //     return decode as IUsers;
  //   }

  //   async validateRole(user: IUsers, role: string) {
  //     return user.role === role;
  //   }
}

export default new ServiceAuth();
