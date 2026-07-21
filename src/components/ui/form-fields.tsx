import * as React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-2xl border border-border bg-muted/40 px-5 py-4 text-[15px] text-foreground placeholder:text-muted-foreground/70 transition-all duration-300 outline-none focus:border-electric/50 focus:bg-background focus:shadow-glow-sm";

export function FieldLabel({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 flex items-baseline justify-between text-sm font-medium text-foreground"
    >
      {children}
      {optional && (
        <span className="text-xs font-normal text-muted-foreground">Optional</span>
      )}
    </label>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-2 text-xs text-red-400">
      {message}
    </p>
  );
}

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }
>(({ className, invalid, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(fieldBase, invalid && "border-red-400/60", className)}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }
>(({ className, invalid, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(fieldBase, "resize-none", invalid && "border-red-400/60", className)}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }
>(({ className, invalid, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      fieldBase,
      "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%239a9aa8%22 stroke-width=%221.5%22 fill=%22none%22 fill-rule=%22evenodd%22/></svg>')] bg-[right_1.25rem_center] bg-no-repeat pr-12",
      invalid && "border-red-400/60",
      className
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";

export function CheckboxField({
  id,
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { id: string; label: React.ReactNode }) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
      <input
        id={id}
        type="checkbox"
        className="mt-0.5 size-4 shrink-0 rounded border-border accent-electric"
        {...props}
      />
      <span>{label}</span>
    </label>
  );
}
