"use client";

import { useState } from "react";
import { tabs } from "../data/tabs";
import { allowedFlags } from "../data/allowedFlags";
import { requiredFlags } from "../data/requiredFlags";
import type { Tab } from "../interfaces/Tab";
import { sendMail } from "../../utils/api";
import type { Mail } from "../interfaces/Mail";

const FIXED_EMAIL = "contact@nooridev.com";

const parseCommand = (cmd: string) => {
  const tokens = cmd.trim().split(/\s+/);
  const commandName = tokens[0];

  if (commandName !== "sendmail") {
    throw new Error("Invalid command. Use `sendmail`.");
  }

  if (tokens.includes("--help")) {
    return {
      help: `Usage: sendmail --to "email" --message "text" [--name "your name" --email "your email"]`,
    };
  }

  const args = Object.fromEntries(
    [...cmd.matchAll(/--(\w+)\s+"([^"]+)"/g)].map(([, key, value]) => {
      if (!allowedFlags.includes(key)) {
        throw new Error(`Unknown flag --${key}`);
      }
      return [key, value];
    })
  );

  for (const flag of requiredFlags) {
    if (!args[flag]) {
      throw new Error(`Missing required flag --${flag}`);
    }
  }

  if (args.to && args.to !== FIXED_EMAIL) {
    throw new Error(
      `You can only send to the fixed address: --to "${FIXED_EMAIL}"`
    );
  }

  return {
    to: FIXED_EMAIL,
    name: args.name || "",
    email: args.email || "",
    message: args.message,
  };
};

const Contact = () => {
  const [mode, setMode] = useState("standard");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const handleStandardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const to = "contact@nooridev.com";

    if(!message) {
      setError("Message required");
      return;
    }

    try{
      await sendMail({to, name, email, message} as Mail);
      setResult(`Awesome :) Thanks for your message, ${name} ${email}`)
      form.reset();
    }
    catch(error: any){
      setError(error.message || "Unknown error occurred.");
    }
  };

  const handleTerminalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const command = formData.get("command")?.toString() ?? "";

    try {
      const parsed = parseCommand(command);

      if("help" in parsed){
        setError(parsed.help!);
        setResult(null)
        return;
      }

      await sendMail(parsed);

      setError(null);
      setResult(`Awesome :) Thanks for your message ${parsed.name} ${parsed.email}`);
      form.reset();
    } catch (error: any) {
      setError(error.message || "Unknown error occurred.");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center spacing section-spacing"
    >
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary w-full">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Bring your ideas to life</h2>
          <p className="text-neutral-400">I'm available for remote work. Reach out in a way that suits you best</p>
        </div>

        <div className="flex space-x-4 mb-6">
          {tabs.map((tab: Tab) => (
            <button
              key={tab.value}
              onClick={() => setMode(tab.value)}
              className={`px-4 py-2 text-sm rounded-full transition ${
                mode === tab.value
                  ? "bg-aurora text-deepNight"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {mode === "linux" ? (
          <form onSubmit={handleTerminalSubmit} className="w-full space-y-3">
            <p className="font-mono text-neutral-500 text-xs">
              $ Enter command below to send message
            </p>
            <textarea
              name="command"
              className="font-mono contactInput contactInput-focus text-sm h-24"
              placeholder={`sendmail --to "${FIXED_EMAIL}" --name "noelia" --message "hey noori"`}
            />
            {error && <p className="text-sm text-red-400">{error}</p>}
            {result && <p className="text-sm text-green-400">{result}</p>}
            <button
              type="submit"
              className="bg-binaryGlow text-black px-4 py-2 rounded hover:bg-white transition"
            >
              Execute Command
            </button>
          </form>
        ) : (
          <form onSubmit={handleStandardSubmit} className="w-full space-y-3">
            <input
              name="name"
              placeholder="Your Name"
              className="contactInput contactInput-focus"
            />
            <input
              name="email"
              placeholder="Your Email"
              className="contactInput contactInput-focus"
            />
            <div className="sr-only">
              <label htmlFor="confirm_email">Confirm Email</label>
              <input type="text" name="confirm_email" id="confirm_email" autoComplete="off" tabIndex={-1}/>
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="contactInput contactInput-focus h-24"
            />
            {error && <p className="text-sm text-red-400">{error}</p>}
            {result && <p className="text-sm text-green-400">{result}</p>}
            <button
              type="submit"
              className="bg-binaryGlow text-black px-4 py-2 rounded hover:bg-white transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;