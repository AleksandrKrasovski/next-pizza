import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';
// import { PrismaClient } from '@prisma/client';


async function up() {

    await prisma.user.createMany({
        data: [
            {
                fullName: 'User Test',
                email: 'user@test.ru',
                password: hashSync('123456', 10), 
                role: 'USER',
                verified: true,
            },
            {
                fullName: 'Admin Test',
                email: 'admin@test.ru',
                password: hashSync('123456', 10),
                role: 'ADMIN',
                verified: true,
            }
        ]
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main().then(async () => {
    await prisma.$disconnect()
}) .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
