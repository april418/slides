import {Slide} from '@/features/remark/components/Slide';

export default function Home() {
  return (
    <main>
      <Slide
        doc={`
class: center, middle

# My Awesome Presentation

???

Notes for the _first_ slide!

---

# Agenda

1. Introduction
2. Deep-dive
3. ...

[NOTE]: Note that you need active internet connection to access remark.js script file
---

# Introduction
`}
      />
    </main>
  );
}
