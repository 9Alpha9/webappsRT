"use client";

import PageTransition from "@/components/PageTransition";
import { MetaData } from "./meta/LogrisMetada";

export default function AuthLayout({ children }) {
  return (
    <>
      <title>{MetaData.title.default}</title>
      <meta name="description" content={MetaData.description} />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
