import { RiGithubLine } from "react-icons/ri";
import { CiMonitor } from "react-icons/ci";
import { projects } from "@/Data/projectData";

type Project = (typeof projects)[number];

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-glass-target group overflow-hidden rounded-[20px] border border-white/15 transition duration-500 hover:-translate-y-1 hover:border-white/30">
        <div className="relative aspect-16/10 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-black/20" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <span className="project-glass-target rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            Selected work
          </span>
          <span className="grid size-9 place-items-center rounded-full border border-white/25 bg-black/20 text-lg text-white backdrop-blur-md transition-transform duration-300 group-hover:rotate-45">
            ↗
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
            {project.category} project
          </p>
          <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
            {project.title}
          </h2>
        </div>
        </div>

        <div className="p-4 sm:p-5">
          <p className="line-clamp-2 text-sm leading-6 text-white/75">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/85"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 border-t border-white/15 px-4 py-4 sm:px-5">
          <div className="project-glass-target flex-1 rounded-[10px] border border-white/15 px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <RiGithubLine size={19} /> Github Repo
            </a>
          </div>
          <div className="project-glass-target flex-1 rounded-[10px] border border-white/15 px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <CiMonitor size={19} /> Live Site
            </a>
          </div>
        </div>
    </article>
  );
}
