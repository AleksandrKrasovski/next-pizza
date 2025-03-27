import { prisma } from './prisma-client';
import { hashSync } from 'bcryptjs';
// import { PrismaClient } from '@prisma/client';


async function up() {

    await prisma.user.createMany({
        data: [
            {
                fullName: 'John Doe',
                email: 'user@test.ru',
                password: bcriptjs.hashSync('123456', 10), 
                // verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin',
                email: 'admin@test.ru',
                password: hashSync('123456', 10),
                // verified: new Date(),
                role: 'ADMIN',
            }
        ]
    });

}

async function down() {

}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}