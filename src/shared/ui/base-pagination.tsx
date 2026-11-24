"use client";

import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from "@/shared/ui/shadcn/pagination";
import { Button } from "@/shared/ui/shadcn/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

type PageItem = number | "ellipsis-start" | "ellipsis-end";

interface BasePaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  prevLabel?: string;
  nextLabel?: string;
}

const MAX_PAGES_WITHOUT_ELLIPSIS = 5;
const EDGE_PAGES_COUNT = 4;
const EDGE_THRESHOLD = 3;

const range = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, index) => from + index);

const getPageItems = (page: number, totalPages: number): PageItem[] => {
  if (totalPages <= MAX_PAGES_WITHOUT_ELLIPSIS) return range(1, totalPages);
  if (page <= EDGE_THRESHOLD) return [...range(1, EDGE_PAGES_COUNT), "ellipsis-end", totalPages];
  if (page > totalPages - EDGE_THRESHOLD) {
    return [1, "ellipsis-start", ...range(totalPages - EDGE_PAGES_COUNT + 1, totalPages)];
  }
  return [1, "ellipsis-start", ...range(page - 1, page + 1), "ellipsis-end", totalPages];
};

export function BasePagination({ page, onPageChange, totalPages, prevLabel, nextLabel }: BasePaginationProps) {
  const t = useTranslations();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            size="icon"
            variant="ghost"
            className="cursor-pointer"
            aria-label={prevLabel ?? t("actions.prev")}
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
          >
            <ChevronLeft />
          </Button>
        </PaginationItem>
        {getPageItems(page, totalPages).map((item) => (
          <PaginationItem key={item}>
            {typeof item === "number" ? (
              <Button
                variant={item === page ? "default" : "outline"}
                size="icon"
                className="cursor-pointer"
                aria-current={item === page ? "page" : undefined}
                onClick={() => onPageChange(item)}
              >
                {item}
              </Button>
            ) : (
              <PaginationEllipsis />
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <Button
            size="icon"
            variant="ghost"
            className="cursor-pointer"
            aria-label={nextLabel ?? t("actions.next")}
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            <ChevronRight />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
