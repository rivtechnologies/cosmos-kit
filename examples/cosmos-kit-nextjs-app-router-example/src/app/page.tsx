import { ConnectWallet } from "@/components/connect-wallet";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-background/80">
      <header className="container flex items-center justify-between py-8 mx-auto">
        <h1 className="text-xl font-bold">
          <span className="text-primary">Cosmos</span>Kit
        </h1>
        <nav className="flex gap-4">
          <a
            href="https://github.com/hyperweb-io/cosmos-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://docs.cosmoskit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </a>
        </nav>
      </header>

      <main className="flex-1 container py-12">
        <div className="flex flex-col items-center gap-12 max-w-2xl mx-auto">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="text-primary">Cosmos Kit</span> Next.js Demo
            </h2>
            <p className="text-muted-foreground text-lg">
              A powerful wallet adapter for Cosmos-based chains. Integrate
              blockchain functionality into your Next.js application with ease.
            </p>
            <div className="flex justify-center gap-4">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1"
                href="https://docs.cosmoskit.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the docs
              </a>
            </div>
          </div>

          <div className="w-full max-w-md">
            <ConnectWallet />
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted/40 mt-auto">
        <div className="container py-8 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Built with{" "}
              <a
                href="https://nextjs.org"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://cosmoskit.com"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Cosmos Kit
              </a>
            </p>
            <div className="flex gap-6">
              <a
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Next.js
              </a>
              <a
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js Docs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
