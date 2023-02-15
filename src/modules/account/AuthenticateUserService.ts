import { prisma } from "../../lib/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";


interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({email, password}: IAuthenticateUser){

    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })
    
    if(!user) {
      throw new Error("Username or password invalid")
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new Error("Username or password invalid")
    }

    const newUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar_url: user.image_url
    }

    const token = sign({email}, "18e7cd5e01496fdd623b8f47053a6897", {
      subject: user.id,
      expiresIn: "7d"
    })

    return {token: token, user: newUser};

  }
}