import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('renders the shell navigation', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('header');
    const nav = compiled.querySelector('nav[aria-label="Hauptnavigation"]');
    const links = Array.from(compiled.querySelectorAll('nav a')).map(
      (link) => link.textContent?.trim(),
    );
    const headerLogo = compiled.querySelector(
      'header img[alt="JOVISCO Logo"]',
    ) as HTMLImageElement | null;

    expect(header?.className).toContain('sticky');
    expect(nav).toBeTruthy();
    expect(links.slice(0, 2)).toEqual(['Kontakt', 'Impressum']);
    expect(headerLogo?.getAttribute('src')).toContain(
      'assets/img/jovisco_logo_header_large.png',
    );
    expect(headerLogo?.className).toContain('w-72');
  });

  it('renders the footer links and footer logo', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const footerNav = compiled.querySelector('nav[aria-label="Footer-Navigation"]');
    const footerLinks = Array.from(
      compiled.querySelectorAll('nav[aria-label="Footer-Navigation"] a'),
    ).map((link) => link.textContent?.trim());
    const footerLogo = compiled.querySelector(
      'footer img[alt="JOVISCO Signet"]',
    ) as HTMLImageElement | null;

    expect(footerNav).toBeTruthy();
    expect(footerLinks).toEqual(['Kontakt', 'Impressum']);
    expect(footerLogo?.getAttribute('src')).toContain(
      'assets/img/originals/jovisco_nur_logo_klein_transparent.png',
    );
  });

  it('renders the home page for /', async () => {
    const harness = await RouterTestingHarness.create('/');
    expect(harness.routeNativeElement?.textContent).toContain('Hauptseite');
  });

  it('renders the contact page for /kontakt', async () => {
    const harness = await RouterTestingHarness.create('/kontakt');
    expect(harness.routeNativeElement?.textContent).toContain('Kontaktseite');
  });

  it('renders the legal notice page for /impressum', async () => {
    const harness = await RouterTestingHarness.create('/impressum');
    expect(harness.routeNativeElement?.textContent).toContain('Impressum');
  });

  it('redirects unknown routes to /', async () => {
    const harness = await RouterTestingHarness.create('/nicht-vorhanden');
    const router = TestBed.inject(Router);

    expect(router.url).toBe('/');
    expect(harness.routeNativeElement?.textContent).toContain('Hauptseite');
  });
});
