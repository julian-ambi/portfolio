import { notFound } from "next/navigation";
import { projects, detailProjects } from "@/data/portfolio";
import PortfolioDetailClient from "./PortfolioDetailClient";

const allProjects = [...projects, ...detailProjects];

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <PortfolioDetailClient project={project} />;
}
