export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="pb-4">
          <h1>Welcome to Pozko</h1>
        </div>
        {children}
      </main>
    </>
  );
}
