/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro } from '../chunks/astro/server_Deeqg--D.mjs';
import 'kleur/colors';
import { b as projectsPageContent, $ as $$Layout } from '../chunks/Layout_B00_tB81.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_CVYUXSGw.mjs';
import { M as Markdown } from '../chunks/component_CgdfdVUf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description, image, year, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} target="_blank" class="sm:py-5 py-10 flex flex-col sm:flex-row gap-6 group-hover:opacity-60 hover:!opacity-100 transition-opacity"> <div class="h-full bg-gray-700 rounded-lg aspect-video sm:h-[150px]"> ${renderComponent($$result, "Image", $$Image, { "width": 1920, "height": 1080, "src": image, "alt": title, "class": "w-full h-full object-cover rounded-lg aspect-video" })} </div> <div> <div class="flex items-center gap-1 mb-2"> <h2 class="font-medium">${title}</h2> <span class="opacity-60">· ${year}</span> </div> <div class="opacity-60"> ${renderComponent($$result, "Markdown", Markdown, { "of": description })} </div> </div> </a>`;
}, "/home/infoetu/baptiste.royer.etu/BUT2/Semestre 1/Communication/site/src/components/ProjectCard.astro", void 0);

const $$Projets = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": projectsPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">Projets</h1> <p class="opacity-60 mb-10">${projectsPageContent.subtitle}</p> <div class="grid grid-cols-1 group"> ${projectsPageContent.projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...project })}`)} </div> </section> ` })}`;
}, "/home/infoetu/baptiste.royer.etu/BUT2/Semestre 1/Communication/site/src/pages/projets.astro", void 0);

const $$file = "/home/infoetu/baptiste.royer.etu/BUT2/Semestre 1/Communication/site/src/pages/projets.astro";
const $$url = "/projets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projets,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
