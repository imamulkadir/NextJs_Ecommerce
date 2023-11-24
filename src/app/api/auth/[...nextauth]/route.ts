import { mergeAnonymousCartIntoUserCart } from "@/lib/db/carts";
import { prisma } from "@/lib/db/prisma";
import { env } from "@/lib/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import {authOptions} from "@/app/authoptions";


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }