import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section
      class="flex w-full flex-col justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-10 shadow-sm sm:rounded-3xl sm:px-8 sm:py-16"
    >
      <p
        class="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 sm:text-sm sm:tracking-[0.3em]"
      >
        Platzhalter
      </p>
      <h1
        class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:mt-4 sm:text-4xl md:text-5xl"
      >
        Hauptseite
      </h1>
    </section>
  `,
})
export class HomePageComponent {}
