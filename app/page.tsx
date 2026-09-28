import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070a0a] px-6 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(76,140,116,0.2),transparent_32%),radial-gradient(circle_at_84%_78%,rgba(76,140,116,0.13),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

      <section className="relative z-10 w-full max-w-3xl text-center">
        <Image
          src="/Group_1.webp"
          alt="Aussie Digital Studios"
          width={280}
          height={112}
          priority
          className="mx-auto mb-14 h-auto w-52 sm:w-64"
        />

        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#4C8C74]/40 bg-[#4C8C74]/10 text-[#73c59f] shadow-[0_0_60px_rgba(76,140,116,0.2)]">
          <svg
            aria-hidden="true"
            className="h-9 w-9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3.5 2" />
            <circle cx="12" cy="12" r="8.5" />
          </svg>
        </div>

        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#73c59f]">
          We&apos;ll be back shortly
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Website under maintenance
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
          We&apos;re making a few improvements behind the scenes. Thanks for your
          patience — Aussie Digital Studios will be back online soon.
        </p>

        <div className="mx-auto mt-12 h-px w-24 bg-[#4C8C74]" />
        <p className="mt-6 text-sm text-white/40">Thank you for your patience.</p>
      </section>
    </main>
  );
}
