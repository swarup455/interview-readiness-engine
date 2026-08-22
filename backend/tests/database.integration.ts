import { DataSourceType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  await prisma.$connect();

  const company = await prisma.company.findFirst({
    where: { slug: "amazon" },
    include: {
      roles: {
        where: { slug: "software-development-engineer" },
        include: { topicImportances: { include: { topic: true } } },
      },
    },
  });
  const role = company?.roles[0];
  if (!company || company.roles.length !== 1 || !role || role.topicImportances.length === 0) {
    throw new Error("Expected seeded company → role → topic importance relationship.");
  }

  const experience = await prisma.interviewExperience.findFirst({
    where: { dataSourceType: DataSourceType.DEMO_SEED },
    include: { questions: { include: { topics: { include: { topic: true } } } } },
  });
  const question = experience?.questions[0];
  if (!experience || experience.questions.length === 0 || !question || question.topics.length === 0) {
    throw new Error("Expected seeded interview experience → question → topic relationship.");
  }

  console.info("Database integration checks passed.");
}

main()
  .catch((error: unknown) => {
    console.error("Database integration checks failed.", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
