# Redesign notes

Implementation notes for the Summer 2027 portfolio redesign. Source of truth: the redesign spec and the resume facts it lists.

## Changed files
- `index.html`: rewritten. Eight sections in the spec's order. One H1, correct heading nesting, static stats (no counters).
- `styles.css`: rewritten. Same dark theme and violet accent. Contrast raised for body and muted text. Content is visible by default; there are no scroll-reveal or hidden states.
- `script.js`: reduced to header scroll state, active-section highlight, and mobile menu (closes on link click, Escape, and outside click). The reveal, counter, progress bar, and gallery code is removed.
- `REDESIGN_NOTES.md`: this file.

## Open items (TODO, not published as fact)

- **TODO resume PDF:** `assets/resume.pdf` is still the older resume. The Summer 2027 PDF was not in the download folder, so it has not been replaced. The current PDF doesn't match the spec: it has no May 2030 date, no coursework, and it says "30+" sessions where the spec says 50+. Replace the file with the Summer 2027 PDF. All resume buttons already point to `assets/resume.pdf`.
- **TODO Regents' and Chancellor's Scholar:** removed from the page. Publish only after confirming the exact official title.
- **TODO Udemy certificate titles:** the Java and Python entries use generic titles ("Java course certificate", "Python course certificate"). Both credential links resolve (HTTP 200). Confirm the exact course titles and update the cards.
- **TODO Coding4Kidz (Vice President) and STEM Tutor:** removed because they are not on the resume. Re-add only with confirmed roles, dates, and scope.
- **TODO unverified technical claims:** React, Node.js, PostgreSQL, TensorFlow, Flask, real-time notifications, and student-body-wide usage were removed. Confirm before re-adding.
- **TODO rocket simulator:** the team project is mentioned in one Experience bullet only. No software or presentation claims are made. Confirm whether Nitin presented it.
- **TODO Track Talk link:** no podcast URL is on file. Add one if there is a public page.
- **TODO F1 and sports preferences:** team and driver names were removed. Add them back if Nitin wants them public.
- **TODO Coding4Cause status:** described as an outreach initiative. Nonprofit status is not claimed.
- **TODO favicon:** the old site linked `assets/icons/favicon.svg`, which does not exist. No favicon link is included.
- **TODO canonical and OG domain:** the site uses `https://nitinbalaji.dev/`, carried over from the old page. Confirm the domain.
- **Verify College Assistant Bot image:** `assets/images/project-college-assistant-bot.png` shows a college-ranking graphic, not the bot. Replace it with a real screenshot, or remove the image.
- **Unused assets:** `northroplogo.png`, `coding4kidz.jpg`, the Coding4Cause logos, and `assets/images/rome.jpg`, among others, are no longer referenced. They are left in place.

## Verification
- Headless Chrome render at 360, 768, and 1440 px widths. No horizontal overflow at any width (document scroll width matches the viewport and no element extends past it).
- Credential links checked with curl: Coursera and both Udemy links return 200. LinkedIn returns 999 to scripted requests, so it was not verified by curl.
