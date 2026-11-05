import { Link } from "wouter";
import { Nav } from "@/components/site/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="wrap flex min-h-[80vh] flex-col justify-center pt-24">
        <h1 className="h-section max-w-[16ch]">This page doesn't exist</h1>
        <p className="lede mt-5">The link may be from an older version of this site.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/work" className="btn btn-primary press">
            See the work
          </Link>
          <Link href="/" className="btn btn-quiet press">
            Go to the home page
          </Link>
        </div>
      </main>
    </>
  );
}
