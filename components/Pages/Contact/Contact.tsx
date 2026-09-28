"use client";

import { FormEvent, useState } from "react";
import LiquidGlass from "@/components/Resuable/LiquideGlass/LiquideGlass";
import { useSettings } from "@/context/SettingsContext";
import {
  LuArrowUpRight,
  LuCheck,
  LuGithub,
  LuLinkedin,
  LuSend,
} from "react-icons/lu";

export default function Contact() {
  const { glassFrost, glassTint } = useSettings();
  const [copied, setCopied] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      `Hi Nafiz, I'm ${formData.get("name")}.`,
      `My email: ${formData.get("email")}`,
      "",
      formData.get("message"),
    ].join("\n");

    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-1 pb-24 pt-2 text-white sm:px-4 sm:pb-28 sm:pt-6">
      <header className="mb-8 max-w-3xl sm:mb-10">
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
          <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
          Contact
        </p>
        <h1 className="heading-font text-4xl leading-tight drop-shadow-md sm:text-5xl md:text-6xl">
          Have a good idea?
          <span className="mt-1 block bg-linear-to-r from-white to-emerald-300 bg-clip-text text-transparent">
            Let&apos;s make it real.
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
          I&apos;m open to thoughtful collaborations, product ideas, and
          front-end opportunities. Tell me a little about what you have in mind.
        </p>
      </header>

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.75fr)]">
        <LiquidGlass
          className="p-4 sm:p-6 md:p-8"
          radius={18}
          tint={glassTint}
          frost={glassFrost}
        >
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
              Start here
            </p>
            <h2 className="mt-1 text-xl font-semibold sm:text-2xl">Write a message</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-white/80">
                Your name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Name"
                  className="mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-black/15 px-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-emerald-300/70 focus:bg-black/25 focus:ring-2 focus:ring-emerald-300/15"
                />
              </label>
              <label className="block text-sm font-medium text-white/80">
                Your email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-black/15 px-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-emerald-300/70 focus:bg-black/25 focus:ring-2 focus:ring-emerald-300/15"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-white/80">
              What are you thinking about?
              <textarea
                required
                name="message"
                rows={5}
                placeholder="A few details about your project, idea, or opportunity..."
                className="mt-2 min-h-36 w-full resize-y rounded-xl border border-white/15 bg-black/15 px-4 py-3 text-base leading-6 text-white outline-none transition placeholder:text-white/35 focus:border-emerald-300/70 focus:bg-black/25 focus:ring-2 focus:ring-emerald-300/15"
              />
            </label>

            <div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p aria-live="polite" className="min-h-5 text-xs leading-5 text-white/55">
                {copied
                  ? "Message copied. Paste it into a LinkedIn message."
                  : "Your message is copied for you to send through LinkedIn."}
              </p>
              <button
                type="submit"
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-emerald-200/30 bg-emerald-300/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-emerald-200/60 hover:bg-emerald-300/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 active:scale-[0.98]"
              >
                {copied ? <LuCheck aria-hidden="true" /> : <LuSend aria-hidden="true" />}
                {copied ? "Copied" : "Copy message"}
              </button>
            </div>
          </form>
        </LiquidGlass>

        <aside className="flex flex-col gap-4 sm:gap-5">
          <LiquidGlass
            className="p-5 sm:p-6"
            radius={18}
            tint={glassTint}
            frost={glassFrost}
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
              Find me online
            </p>
            <div className="mt-4 space-y-3">
              <a
                href="https://www.linkedin.com/in/nafiz-al-turabi-570386278/"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-16 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 transition hover:border-emerald-200/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-emerald-200"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 text-lg text-emerald-200">
                  <LuLinkedin aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">LinkedIn</span>
                  <span className="block truncate text-xs text-white/55">Let&apos;s connect</span>
                </span>
                <LuArrowUpRight aria-hidden="true" className="shrink-0 text-white/55 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </a>

              <a
                href="https://github.com/Nafiz-Al-Turabi"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-16 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 transition hover:border-emerald-200/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-emerald-200"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 text-lg text-emerald-200">
                  <LuGithub aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">GitHub</span>
                  <span className="block truncate text-xs text-white/55">See what I&apos;m building</span>
                </span>
                <LuArrowUpRight aria-hidden="true" className="shrink-0 text-white/55 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </a>
            </div>
          </LiquidGlass>

          <div className="rounded-[18px] border border-emerald-200/20 bg-emerald-300/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
              <span className="size-2 rounded-full bg-emerald-300" />
              Open to opportunities
            </span>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Have a project that needs a thoughtful interface or a developer
              who cares about the details? I&apos;d be glad to hear about it.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
