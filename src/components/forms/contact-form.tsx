"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { FieldLabel, FieldError, Input, Textarea, Select, CheckboxField } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type."),
  budget: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().min(10, "Tell us a little more — at least 10 characters."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please agree to the privacy policy to continue." }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const PROJECT_TYPES = [
  "Web Development",
  "E-Commerce Development",
  "UI/UX & Graphic Design",
  "Branding & Identity",
  "SEO Optimization",
  "Digital Marketing",
  "AI & Automation",
  "Data Analytics & Business Intelligence",
  "Mobile App Development",
  "Cloud & DevOps",
  "API & Integrations",
  "Creative Studio",
  "Something else",
];

const BUDGET_RANGES = ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+", "Not sure yet"];

const TIME_SLOTS = [
  "9:00 AM – 10:00 AM",
  "11:00 AM – 12:00 PM",
  "2:00 PM – 3:00 PM",
  "4:00 PM – 5:00 PM",
  "6:00 PM – 7:00 PM",
];

export function ContactForm({ variant = "contact" }: { variant?: "contact" | "consultation" }) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("submitting");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, type: variant }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 rounded-3xl border border-electric/20 bg-electric/5 p-10 text-center"
      >
        <CheckCircle2 className="size-12 text-electric" />
        <h3 className="text-xl font-semibold">
          {variant === "consultation" ? "Consultation request sent!" : "Message sent!"}
        </h3>
        <p className="max-w-sm text-muted-foreground">
          {variant === "consultation"
            ? "We'll confirm your slot by email within 24 hours. Keep an eye on your inbox."
            : `Thanks for reaching out — we typically reply within a few hours. You can also WhatsApp us directly if it's urgent.`}
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")} magnetic={false}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="name">Full name</FieldLabel>
          <Input id="name" placeholder="Jane Doe" invalid={Boolean(errors.name)} {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <FieldLabel htmlFor="email">Email address</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="jane@company.com"
            invalid={Boolean(errors.email)}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="company" optional>
            Company
          </FieldLabel>
          <Input id="company" placeholder="Company name" {...register("company")} />
        </div>
        <div>
          <FieldLabel htmlFor="phone" optional>
            Phone / WhatsApp
          </FieldLabel>
          <Input id="phone" placeholder="+1 234 567 8901" {...register("phone")} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="projectType">Project type</FieldLabel>
          <Select id="projectType" invalid={Boolean(errors.projectType)} defaultValue="" {...register("projectType")}>
            <option value="" disabled>
              Select a service
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
          <FieldError message={errors.projectType?.message} />
        </div>
        <div>
          <FieldLabel htmlFor="budget" optional>
            Budget range
          </FieldLabel>
          <Select id="budget" defaultValue="" {...register("budget")}>
            <option value="" disabled>
              Select a range
            </option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </Select>
        </div>
      </div>

      {variant === "consultation" && (
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="preferredDate">Preferred date</FieldLabel>
            <Input
              id="preferredDate"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              {...register("preferredDate")}
            />
          </div>
          <div>
            <FieldLabel htmlFor="preferredTime">Preferred time slot</FieldLabel>
            <Select id="preferredTime" defaultValue="" {...register("preferredTime")}>
              <option value="" disabled>
                Select a time
              </option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </Select>
          </div>
        </div>
      )}

      <div>
        <FieldLabel htmlFor="message">
          {variant === "consultation" ? "What would you like to discuss?" : "Your message"}
        </FieldLabel>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, goals, and timeline…"
          invalid={Boolean(errors.message)}
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <div>
        <CheckboxField
          id="consent"
          label={
            <>
              I agree to the{" "}
              <a href="/privacy" className="text-foreground underline underline-offset-2">
                Privacy Policy
              </a>{" "}
              and consent to being contacted about my inquiry.
            </>
          }
          {...register("consent")}
        />
        <FieldError message={errors.consent?.message} />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 rounded-2xl border border-red-400/30 bg-red-400/5 px-4 py-3 text-sm text-red-400"
          >
            <AlertCircle className="size-4 shrink-0" />
            {errorMessage || `Something went wrong. You can also reach us directly at ${SITE_CONFIG.email}.`}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            {variant === "consultation" ? "Request Consultation" : "Send Message"}
            <Send className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
}
