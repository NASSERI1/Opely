# Opely

Opely is an open-source website where students find their lectures, slides, sources, and announcements, sorted by department, stage, and semester. Admins add and manage the content from their phone.

It is a static site hosted free on GitHub Pages. There is no server and no database: the content lives in this repository, and the admin page saves changes through the GitHub API.

- **Students:** open the site, choose a department and a stage, and read or download lecture files. PDFs open inside the page and are kept in the browser for next time.
- **Admins:** each one looks after one stage of one department. They sign in once with a token and can add courses, lectures, sources, and announcements.
- **Languages:** English and Arabic, chosen automatically from the device's language. Arabic pages read right to left.
- **Light and Dark Mode:** follows the device.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The student site |
| `admin.html` | The admin site |
| `style.css` | The design, shared by both pages |
| `lang.js` | The translations, shared by both pages |
| `catalog.json` | The list of universities, faculties, and departments |
| `data/*.json` | One content file per department: stages, courses, lectures, sources, announcements |
| `admins.json` | Who each admin token belongs to. Created on the first sign-in. It never holds a token, only a fingerprint of it |
| `files/` | Uploaded lecture files. Created by the first upload |
| `lib/` | PDF.js, which shows PDFs inside the page |

## Setting it up

1. Create a **public** repository on GitHub named `Opely` and upload these files to it.
2. In the repository, open **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, and save. After a minute or two the site is live at `https://<your-username>.github.io/Opely/`.
3. Make your own access token: on GitHub, open **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
   - Repository access: **Only select repositories**, then choose `Opely`.
   - Permissions: **Contents → Read and write**.
   - Give it an expiry date. Copy the token; GitHub shows it only once.
4. Open `https://<your-username>.github.io/Opely/admin.html`, paste the token, and press **Sign in**. Because nobody is registered yet, the page asks you to set yourself up as the owner.
5. To add an admin, make a token for them the same way, open **Admins** on your admin home page, register it with their name, department, and stage, and send them the token privately.

Keep every token private. Never put one in a file in this repository or send it in a group chat. Deleting a token on GitHub cuts off access at once.

## Changing things

- **Add a department, faculty, or university:** add it to `catalog.json`. Its content file in `data/` is created by the first upload.
- **Add a language:** add it to `lang.js`. The notes at the top of that file explain how.
- **Change the design:** colours, glass, and corner sizes are set at the top of `style.css`.
- **Run it on your own computer:** in this folder run `python3 -m http.server 8000` and open `http://localhost:8000`. To sign in to the admin page from there, write your GitHub username in the `OWNER` line near the top of the script in `admin.html`.

## Limits to know

- GitHub Pages sites can be at most 1 GB. Uploaded lecture files count towards this. When the site gets close, share new files as links (for example from Google Drive) instead of uploading them.
- A file uploaded from the admin page can be at most 25 MB.
- Everything in a public repository can be read by anyone, including the admins' names in `admins.json` and in the history of changes.
- Share lecturers' slides and recordings only with their permission.

## License

MIT. See `LICENSE`. PDF.js is by the Mozilla Foundation, under the Apache License 2.0.
