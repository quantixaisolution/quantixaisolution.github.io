import { Container, Logo } from "@/components/ui";
import { brand, footer } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line pt-16 pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Logo markSrc={brand.mark} name={brand.name} subtitle={brand.subtitle} />
            <p className="mt-4 text-sm text-muted">{footer.blurb}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-sans text-sm font-semibold">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external && { target: "_blank", rel: "noreferrer" })}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-line pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.fullName}. All rights reserved.
          </p>
          <p>{brand.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
