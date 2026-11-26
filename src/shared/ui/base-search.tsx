"use client";

import { useId } from "react";
import { Search, X } from "lucide-react";
import { useTranslations } from "next-intl";

import { Field, FieldLabel } from "@/shared/ui/shadcn/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/ui/shadcn/input-group";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/shadcn/button";

type BaseSearchProps = React.ComponentProps<"search"> & {
  label?: string;
  query: string;
  placeholder?: string;
  clearLabel?: string;
  setQuery: (value: string) => void;
};

export function BaseSearch({
  query,
  label,
  setQuery,
  className,
  placeholder,
  clearLabel,
  ...props
}: BaseSearchProps): React.ReactNode {
  const t = useTranslations();
  const inputId = useId();

  return (
    <search
      className={cn(className)}
      {...props}
    >
      <form onSubmit={(event) => event.preventDefault()}>
        <Field>
          {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}
          <InputGroup>
            <InputGroupAddon className="w-full">
              <InputGroupInput
                id={inputId}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={placeholder}
              />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              {query.length > 0 && (
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="cursor-pointer"
                  aria-label={clearLabel ?? t("actions.clear")}
                  onClick={() => setQuery("")}
                >
                  <X />
                </Button>
              )}

              <Search
                className="mr-2"
                aria-hidden
              />
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </form>
    </search>
  );
}
