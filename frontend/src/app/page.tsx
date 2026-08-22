export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-canvas px-6">
      <section className="w-full max-w-lg border border-slate-200 bg-white p-8 shadow-subtle sm:p-10">
        <p className="text-sm font-medium text-primary">Interview Readiness Engine</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
          Frontend is running.
        </h1>
        <p className="mt-3 text-base leading-7 text-muted">
          Phase 1 provides the project foundation. Product features will be added in later phases.
        </p>
      </section>
    </main>
  );
}
