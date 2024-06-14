"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { Post } from "@/types/posts";

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "date",
    header: "Date"
  }
];
