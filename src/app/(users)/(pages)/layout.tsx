import React from "react";
import PageWrapper from "../../components/PageWrapper";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageWrapper>{children}</PageWrapper>;
}
