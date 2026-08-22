import {
  DataSourceType,
  Difficulty,
  ImportanceLevel,
  InterviewOutcome,
  InterviewRoundType,
  PrismaClient,
} from "@prisma/client";

const prisma = new PrismaClient();
const demoProvenance = "DEMO / SEED DATA — synthetic records for local architecture validation only; not interview statistics or sourced interview content.";

const topics = [
  ["Arrays", "arrays", "DSA"],
  ["Strings", "strings", "DSA"],
  ["Linked Lists", "linked-lists", "DSA"],
  ["Stacks & Queues", "stacks-queues", "DSA"],
  ["Trees", "trees", "DSA"],
  ["Graphs", "graphs", "DSA"],
  ["Binary Search", "binary-search", "DSA"],
  ["Dynamic Programming", "dynamic-programming", "DSA"],
  ["Hashing", "hashing", "DSA"],
  ["DBMS", "dbms", "CS Fundamentals"],
  ["Operating Systems", "operating-systems", "CS Fundamentals"],
  ["SQL", "sql", "CS Fundamentals"],
  ["Communication", "communication", "Behavioral"],
  ["Teamwork", "teamwork", "Behavioral"],
  ["Ownership", "ownership", "Behavioral"],
] as const;

async function main(): Promise<void> {
  await prisma.questionTopic.deleteMany();
  await prisma.interviewQuestion.deleteMany();
  await prisma.interviewExperience.deleteMany();
  await prisma.companyRoleTopic.deleteMany();
  await prisma.role.deleteMany();
  await prisma.company.deleteMany();
  await prisma.topic.deleteMany();

  for (const [name, slug, category] of topics) {
    await prisma.topic.create({ data: { name, slug, category } });
  }

  const createDemoCompany = (name: string, slug: string) =>
    prisma.company.create({
      data: {
        name,
        slug,
        description: "DEMO / SEED DATA — a synthetic company record for local validation.",
      },
    });
  const amazon = await createDemoCompany("Amazon", "amazon");
  const northstar = await createDemoCompany("Northstar Systems", "northstar-systems");
  const apex = await createDemoCompany("Apex Labs", "apex-labs");
  await createDemoCompany("Vertex Cloud", "vertex-cloud");
  await createDemoCompany("Bluewave Technologies", "bluewave-technologies");

  const [amazonSde, northstarBackend, apexData] = await Promise.all([
    prisma.role.create({ data: { companyId: amazon.id, name: "Software Development Engineer", slug: "software-development-engineer", description: "DEMO / SEED DATA" } }),
    prisma.role.create({ data: { companyId: northstar.id, name: "Backend Engineer", slug: "backend-engineer", description: "DEMO / SEED DATA" } }),
    prisma.role.create({ data: { companyId: apex.id, name: "Data Engineer", slug: "data-engineer", description: "DEMO / SEED DATA" } }),
  ]);

  const topicBySlug = new Map((await prisma.topic.findMany()).map((topic) => [topic.slug, topic]));
  const topic = (slug: string) => {
    const value = topicBySlug.get(slug);
    if (!value) throw new Error(`Missing seed topic: ${slug}`);
    return value;
  };

  await prisma.companyRoleTopic.createMany({
    data: [
      { roleId: amazonSde.id, topicSlug: "graphs", importance: ImportanceLevel.HIGH, weight: 0.9 },
      { roleId: amazonSde.id, topicSlug: "trees", importance: ImportanceLevel.HIGH, weight: 0.85 },
      { roleId: amazonSde.id, topicSlug: "operating-systems", importance: ImportanceLevel.MEDIUM, weight: 0.55 },
      { roleId: amazonSde.id, topicSlug: "ownership", importance: ImportanceLevel.HIGH, weight: 0.8 },
      { roleId: northstarBackend.id, topicSlug: "sql", importance: ImportanceLevel.HIGH, weight: 0.85 },
      { roleId: northstarBackend.id, topicSlug: "dbms", importance: ImportanceLevel.HIGH, weight: 0.8 },
      { roleId: northstarBackend.id, topicSlug: "communication", importance: ImportanceLevel.MEDIUM, weight: 0.55 },
      { roleId: apexData.id, topicSlug: "sql", importance: ImportanceLevel.HIGH, weight: 0.9 },
      { roleId: apexData.id, topicSlug: "hashing", importance: ImportanceLevel.MEDIUM, weight: 0.55 },
    ].map(({ roleId, topicSlug, importance, weight }) => ({
      roleId,
      topicId: topic(topicSlug).id,
      importance,
      weight,
      dataSourceType: DataSourceType.DEMO_SEED,
      sourceName: "DEMO / SEED DATA",
      provenance: demoProvenance,
      confidence: 0.1,
    })),
  });

  const graphExperience = await prisma.interviewExperience.create({
    data: {
      companyId: amazon.id,
      roleId: amazonSde.id,
      interviewYear: 2025,
      roundType: InterviewRoundType.TECHNICAL_INTERVIEW,
      outcome: InterviewOutcome.UNKNOWN,
      experienceText: "DEMO / SEED DATA — a synthetic technical interview note for schema validation.",
      dataSourceType: DataSourceType.DEMO_SEED,
      sourceName: "DEMO / SEED DATA",
      provenance: demoProvenance,
      confidence: 0.1,
    },
  });
  const sqlExperience = await prisma.interviewExperience.create({
    data: {
      companyId: northstar.id,
      roleId: northstarBackend.id,
      interviewYear: 2025,
      roundType: InterviewRoundType.TECHNICAL_SCREEN,
      outcome: InterviewOutcome.ADVANCED,
      experienceText: "DEMO / SEED DATA — a synthetic backend interview note for schema validation.",
      dataSourceType: DataSourceType.DEMO_SEED,
      sourceName: "DEMO / SEED DATA",
      provenance: demoProvenance,
      confidence: 0.1,
    },
  });

  const questions = await Promise.all([
    ["Traverse a directed graph while tracking visited nodes.", "traverse a directed graph while tracking visited nodes", Difficulty.MEDIUM, graphExperience.id, ["graphs"]],
    ["Describe the trade-off between breadth-first and depth-first traversal.", "describe bfs dfs traversal trade offs", Difficulty.MEDIUM, graphExperience.id, ["graphs", "trees"]],
    ["Write a query that groups orders by customer.", "write a query that groups orders by customer", Difficulty.EASY, sqlExperience.id, ["sql", "dbms"]],
    ["Explain how an index can affect a filtered query.", "explain how an index affects a filtered query", Difficulty.MEDIUM, sqlExperience.id, ["sql", "dbms"]],
  ].map(async ([questionText, normalizedQuestionText, difficulty, sourceExperienceId, topicSlugs]) => {
    const question = await prisma.interviewQuestion.create({
      data: {
        questionText: questionText as string,
        normalizedQuestionText: normalizedQuestionText as string,
        difficulty: difficulty as Difficulty,
        sourceExperienceId: sourceExperienceId as string,
        dataSourceType: DataSourceType.DEMO_SEED,
        sourceName: "DEMO / SEED DATA",
        provenance: demoProvenance,
        confidence: 0.1,
        metadata: { demo: true },
      },
    });
    await prisma.questionTopic.createMany({
      data: (topicSlugs as string[]).map((topicSlug) => ({ questionId: question.id, topicId: topic(topicSlug).id })),
    });
    return question;
  }));

  console.info(`Seeded DEMO / SEED DATA: 5 companies, 3 roles, ${topics.length} topics, 9 importance records, 2 experiences, and ${questions.length} questions.`);
}

main()
  .catch((error: unknown) => {
    console.error("Database seed failed.", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
