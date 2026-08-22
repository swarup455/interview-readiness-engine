-- Initial Interview Readiness Engine database foundation.
CREATE SCHEMA IF NOT EXISTS "public";

CREATE TYPE "ProfileProvider" AS ENUM ('LINKEDIN', 'GITHUB', 'LEETCODE', 'CODECHEF', 'OTHER');
CREATE TYPE "DataSourceType" AS ENUM ('CURATED', 'PUBLIC_SOURCE', 'USER_SUBMITTED', 'DEMO_SEED', 'OFFICIAL_INTEGRATION');
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');
CREATE TYPE "InterviewRoundType" AS ENUM ('ONLINE_ASSESSMENT', 'TECHNICAL_SCREEN', 'TECHNICAL_INTERVIEW', 'SYSTEM_DESIGN', 'HIRING_MANAGER', 'BEHAVIORAL', 'HR', 'OTHER');
CREATE TYPE "InterviewOutcome" AS ENUM ('ADVANCED', 'OFFERED', 'REJECTED', 'WITHDREW', 'UNKNOWN');
CREATE TYPE "ImportanceLevel" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

CREATE TABLE "User" (
  "id" UUID NOT NULL, "email" VARCHAR(320) NOT NULL, "displayName" VARCHAR(120),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "CandidateProfile" (
  "id" UUID NOT NULL, "userId" UUID NOT NULL, "headline" VARCHAR(240), "bio" TEXT, "experience" TEXT, "education" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CandidateProfile_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "ProfileLink" (
  "id" UUID NOT NULL, "candidateProfileId" UUID NOT NULL, "provider" "ProfileProvider" NOT NULL, "url" VARCHAR(2048) NOT NULL, "label" VARCHAR(120),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "ProfileLink_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Company" (
  "id" UUID NOT NULL, "name" VARCHAR(160) NOT NULL, "slug" VARCHAR(180) NOT NULL, "description" TEXT, "website" VARCHAR(2048), "logoUrl" VARCHAR(2048), "isActive" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Role" (
  "id" UUID NOT NULL, "companyId" UUID NOT NULL, "name" VARCHAR(160) NOT NULL, "slug" VARCHAR(180) NOT NULL, "description" TEXT, "isActive" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Topic" (
  "id" UUID NOT NULL, "name" VARCHAR(120) NOT NULL, "slug" VARCHAR(140) NOT NULL, "category" VARCHAR(120) NOT NULL, "description" TEXT, "parentTopicId" UUID,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "InterviewExperience" (
  "id" UUID NOT NULL, "companyId" UUID NOT NULL, "roleId" UUID NOT NULL, "interviewYear" INTEGER NOT NULL, "roundType" "InterviewRoundType" NOT NULL, "outcome" "InterviewOutcome", "experienceText" TEXT NOT NULL,
  "dataSourceType" "DataSourceType" NOT NULL, "sourceName" VARCHAR(160) NOT NULL, "sourceUrl" VARCHAR(2048), "provenance" TEXT NOT NULL, "confidence" DOUBLE PRECISION NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "InterviewExperience_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "InterviewQuestion" (
  "id" UUID NOT NULL, "questionText" TEXT NOT NULL, "normalizedQuestionText" VARCHAR(2000), "difficulty" "Difficulty" NOT NULL, "sourceExperienceId" UUID,
  "dataSourceType" "DataSourceType" NOT NULL, "sourceName" VARCHAR(160) NOT NULL, "provenance" TEXT NOT NULL, "confidence" DOUBLE PRECISION NOT NULL, "metadata" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "InterviewQuestion_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "QuestionTopic" (
  "questionId" UUID NOT NULL, "topicId" UUID NOT NULL, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "QuestionTopic_pkey" PRIMARY KEY ("questionId", "topicId")
);
CREATE TABLE "CompanyRoleTopic" (
  "id" UUID NOT NULL, "roleId" UUID NOT NULL, "topicId" UUID NOT NULL, "importance" "ImportanceLevel" NOT NULL, "weight" DECIMAL(5,2),
  "dataSourceType" "DataSourceType" NOT NULL, "sourceName" VARCHAR(160) NOT NULL, "sourceUrl" VARCHAR(2048), "provenance" TEXT NOT NULL, "confidence" DOUBLE PRECISION NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CompanyRoleTopic_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "CandidateProfile_userId_key" ON "CandidateProfile"("userId");
CREATE INDEX "ProfileLink_candidateProfileId_provider_idx" ON "ProfileLink"("candidateProfileId", "provider");
CREATE UNIQUE INDEX "ProfileLink_candidateProfileId_provider_url_key" ON "ProfileLink"("candidateProfileId", "provider", "url");
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");
CREATE UNIQUE INDEX "Company_slug_key" ON "Company"("slug");
CREATE INDEX "Role_companyId_isActive_idx" ON "Role"("companyId", "isActive");
CREATE UNIQUE INDEX "Role_companyId_slug_key" ON "Role"("companyId", "slug");
CREATE UNIQUE INDEX "Topic_name_key" ON "Topic"("name");
CREATE UNIQUE INDEX "Topic_slug_key" ON "Topic"("slug");
CREATE INDEX "Topic_category_idx" ON "Topic"("category");
CREATE INDEX "Topic_parentTopicId_idx" ON "Topic"("parentTopicId");
CREATE INDEX "InterviewExperience_companyId_roleId_idx" ON "InterviewExperience"("companyId", "roleId");
CREATE INDEX "InterviewExperience_companyId_interviewYear_idx" ON "InterviewExperience"("companyId", "interviewYear");
CREATE INDEX "InterviewExperience_roleId_idx" ON "InterviewExperience"("roleId");
CREATE INDEX "InterviewQuestion_difficulty_idx" ON "InterviewQuestion"("difficulty");
CREATE INDEX "InterviewQuestion_sourceExperienceId_idx" ON "InterviewQuestion"("sourceExperienceId");
CREATE INDEX "InterviewQuestion_normalizedQuestionText_idx" ON "InterviewQuestion"("normalizedQuestionText");
CREATE INDEX "QuestionTopic_topicId_idx" ON "QuestionTopic"("topicId");
CREATE INDEX "CompanyRoleTopic_topicId_idx" ON "CompanyRoleTopic"("topicId");
CREATE INDEX "CompanyRoleTopic_roleId_importance_idx" ON "CompanyRoleTopic"("roleId", "importance");
CREATE UNIQUE INDEX "CompanyRoleTopic_roleId_topicId_key" ON "CompanyRoleTopic"("roleId", "topicId");

ALTER TABLE "CandidateProfile" ADD CONSTRAINT "CandidateProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ProfileLink" ADD CONSTRAINT "ProfileLink_candidateProfileId_fkey" FOREIGN KEY ("candidateProfileId") REFERENCES "CandidateProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Role" ADD CONSTRAINT "Role_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_parentTopicId_fkey" FOREIGN KEY ("parentTopicId") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "InterviewExperience" ADD CONSTRAINT "InterviewExperience_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "InterviewExperience" ADD CONSTRAINT "InterviewExperience_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "InterviewQuestion" ADD CONSTRAINT "InterviewQuestion_sourceExperienceId_fkey" FOREIGN KEY ("sourceExperienceId") REFERENCES "InterviewExperience"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "QuestionTopic" ADD CONSTRAINT "QuestionTopic_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "InterviewQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "QuestionTopic" ADD CONSTRAINT "QuestionTopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CompanyRoleTopic" ADD CONSTRAINT "CompanyRoleTopic_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CompanyRoleTopic" ADD CONSTRAINT "CompanyRoleTopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
