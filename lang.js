/* =====================================================================
   OPELY — languages, shared by every page

   The pages are written in English. This file shows them in the language
   of the visitor's device when a translation exists below, and turns the
   whole page right-to-left for languages that are written that way.

   How it works: the English text itself is the key. t("Files") gives
   "الملفات" on an Arabic device and "Files" everywhere else.

   To add a language: add its two-letter code to TRANSLATIONS with the same
   keys as "ar", add its words to COUNT_WORDS, and add it to RIGHT_TO_LEFT
   if it is written right to left. Nothing else needs to change.

   Only the interface is translated. Course names, lecture titles, and
   announcements appear exactly as the admins typed them.
   ===================================================================== */

const TRANSLATIONS = {
  ar: {
    // ----- shared -----
    ", ": "، ",
    "Admin": "الإدارة",
    "Stage {n}": "المرحلة {n}",
    "Stage 1": "المرحلة الأولى",
    "Stage 2": "المرحلة الثانية",
    "Stage 3": "المرحلة الثالثة",
    "Stage 4": "المرحلة الرابعة",
    "Semester {n}": "الفصل {n}",
    "Semester 1": "الفصل الأول",
    "Semester 2": "الفصل الثاني",
    "Semester": "الفصل الدراسي",
    "Lectures": "المحاضرات",
    "Sources": "المصادر",
    "Announcements": "الإعلانات",
    "Announcement": "إعلان",
    "No announcements yet.": "لا توجد إعلانات بعد.",
    "No lectures yet.": "لا توجد محاضرات بعد.",
    "No sources yet.": "لا توجد مصادر بعد.",
    "Not added yet": "لم يُضف بعد",
    "Page not found": "الصفحة غير موجودة",
    "Department": "القسم",
    "Stage": "المرحلة",

    // ----- student page -----
    "Saved": "محفوظ",
    "Latest": "الأحدث",
    "No departments yet.": "لا توجد أقسام بعد.",
    "Departments": "الأقسام",
    "Lectures, slides, and announcements for your department.": "محاضرات وشرائح وإعلانات لقسمك.",
    "Choose your department.": "اختر قسمك.",
    "{n} more": "إعلانات أخرى: {n}",
    "All stages": "كل المراحل",
    "Choose your stage.": "اختر مرحلتك.",
    "No stages yet.": "لا توجد مراحل بعد.",
    "Updated {date}": "آخر تحديث {date}",
    "No lectures yet": "لا توجد محاضرات بعد",
    "No courses yet.": "لا توجد مواد بعد.",
    "Course content": "محتوى المادة",
    "Watch recording": "مشاهدة التسجيل",
    "No recording yet": "لا يوجد تسجيل بعد",
    "Previous": "السابق",
    "Next": "التالي",
    "Lecture {n}": "المحاضرة {n}",
    "Recording": "التسجيل",
    "Summary": "الملخص",
    "Files": "الملفات",
    "No files yet.": "لا توجد ملفات بعد.",
    "Downloading…": "جارٍ التنزيل…",
    "Download": "تنزيل",
    "Opening…": "جارٍ الفتح…",
    "saved in this browser": "محفوظ في هذا المتصفح",
    "Can’t show this file here. You can still download it.": "تعذّر عرض هذا الملف هنا. ما زال بإمكانك تنزيله.",
    "Can’t get this file. Check your connection, then reload.": "تعذّر جلب هذا الملف. تحقق من اتصالك ثم أعد تحميل الصفحة.",
    "Page {n}": "الصفحة {n}",
    "Can’t load the lectures. Check your connection, then reload.": "تعذّر تحميل المحاضرات. تحقق من اتصالك ثم أعد تحميل الصفحة.",
    "Loading…": "جارٍ التحميل…",
    "This department, stage, course, or lecture may have been renamed.": "ربما تغيّر اسم هذا القسم أو المرحلة أو المادة أو المحاضرة.",
    "See all departments": "عرض كل الأقسام",

    // ----- admin page: signing in -----
    "Opely Admin": "إدارة Opely",
    "Student site": "موقع الطلبة",
    "Manage your stage’s courses, lectures, sources, and announcements.": "أدِر مواد مرحلتك ومحاضراتها ومصادرها وإعلاناتها.",
    "Sign in": "تسجيل الدخول",
    "Paste the access token the site owner gave you. It is saved in this browser only. Never share it.": "الصق رمز الدخول الذي أعطاك إياه مالك الموقع. يُحفظ في هذا المتصفح فقط. لا تشاركه مع أحد.",
    "Access token": "رمز الدخول",
    "Set up the owner": "إعداد مالك الموقع",
    "No admins are registered yet. Register yourself as the owner. You can then add the other admins.": "لا يوجد مشرفون مسجّلون بعد. سجّل نفسك مالكاً للموقع، ثم أضف بقية المشرفين.",
    "Full name": "الاسم الكامل",
    "Your three-part name, in English. It is written next to every change you make.": "اسمك الثلاثي بالإنجليزية. يُكتب بجانب كل تغيير تجريه.",
    "Username": "اسم المستخدم",
    "Save and continue": "حفظ ومتابعة",
    "Preview": "معاينة",
    "Look around the admin pages without a token. Nothing is saved.": "تصفّح صفحات الإدارة من دون رمز دخول. لا يُحفظ أي شيء.",
    "Look around": "تصفّح",
    "Connected as": "متصل باسم",
    "Preview of": "معاينة",
    "Sign out": "تسجيل الخروج",
    "Close": "إغلاق",
    "Preview mode. You can try everything, but nothing is saved or sent to GitHub. Reloading the page undoes your changes.": "وضع المعاينة. يمكنك تجربة كل شيء، لكن لا يُحفظ شيء ولا يُرسل إلى GitHub. إعادة تحميل الصفحة تلغي تغييراتك.",
    "Signing in…": "جارٍ تسجيل الدخول…",
    "Paste your access token.": "الصق رمز الدخول.",
    "Enter your full three-part name, in English letters.": "اكتب اسمك الثلاثي الكامل بالأحرف الإنجليزية.",
    "Enter a username.": "اكتب اسم المستخدم.",
    "This token isn’t registered on the site. Ask the site owner to add you.": "هذا الرمز غير مسجّل في الموقع. اطلب من مالك الموقع إضافتك.",
    "Your department is no longer on the site. Ask the site owner.": "قسمك لم يعد موجوداً في الموقع. راجع مالك الموقع.",
    "Your stage is no longer on the site. Ask the site owner.": "مرحلتك لم تعد موجودة في الموقع. راجع مالك الموقع.",
    "Someone else was registered just now. Reload the page.": "سُجّل شخص آخر للتو. أعد تحميل الصفحة.",
    "Can’t load the list of departments. Check your connection, then reload.": "تعذّر تحميل قائمة الأقسام. تحقق من اتصالك ثم أعد تحميل الصفحة.",
    "Can’t load catalog.json. It belongs next to this page.": "تعذّر تحميل الملف catalog.json. مكانه بجانب هذه الصفحة.",
    "catalog.json has no departments yet.": "الملف catalog.json لا يحتوي أقساماً بعد.",
    "Signing in needs a secure address. Open the site with https, or at localhost.": "تسجيل الدخول يحتاج عنواناً آمناً. افتح الموقع عبر https أو من localhost.",
    "This copy of the site isn’t on GitHub Pages. Write the repository owner’s username in the OWNER line of admin.html.": "هذه النسخة من الموقع ليست على GitHub Pages. اكتب اسم مستخدم مالك المستودع في سطر OWNER داخل admin.html.",

    // ----- admin page: GitHub answers -----
    "GitHub rejected the token. Check it, or ask the site owner for a new one.": "رفض GitHub رمز الدخول. تحقق منه أو اطلب رمزاً جديداً من مالك الموقع.",
    "This token isn’t allowed to do that. It needs Contents set to “Read and write”.": "هذا الرمز لا يملك الصلاحية. يحتاج أن تكون صلاحية Contents هي “Read and write”.",
    "Can’t find the site’s repository with this token. Check that the token was made for this repository.": "تعذّر العثور على مستودع الموقع بهذا الرمز. تأكد أن الرمز أُنشئ لهذا المستودع.",
    "The content changed while saving. Try again.": "تغيّر المحتوى أثناء الحفظ. حاول مرة أخرى.",
    "GitHub refused the file:": "رفض GitHub الملف:",
    "Can’t reach GitHub. Check your connection and try again.": "تعذّر الوصول إلى GitHub. تحقق من اتصالك وحاول مرة أخرى.",
    "GitHub answered with error {n}.": "أجاب GitHub بالخطأ {n}.",
    "Couldn’t read {name}.": "تعذّرت قراءة {name}.",

    // ----- admin page: saving -----
    "Saving…": "جارٍ الحفظ…",
    "Saved.": "تم الحفظ.",
    "Students will see it in a minute or two.": "سيراه الطلبة خلال دقيقة أو دقيقتين.",
    "Preview only. Nothing was saved.": "معاينة فقط. لم يُحفظ شيء.",
    "Saved, but {n} file(s) could not be removed from the repository.": "تم الحفظ، لكن تعذّر حذف {n} من الملفات من المستودع.",
    "Uploading file {i} of {n}…": "جارٍ رفع الملف {i} من {n}…",
    "Removing file {i} of {n}…": "جارٍ حذف الملف {i} من {n}…",
    "{name} is larger than 25 MB. Share it as a link instead.": "{name} أكبر من 25 ميغابايت. شاركه كرابط.",
    "Tap again to delete": "اضغط مرة أخرى للحذف",
    "Delete": "حذف",
    "That stage no longer exists. Reload the page.": "هذه المرحلة لم تعد موجودة. أعد تحميل الصفحة.",
    "That course no longer exists. Reload the page.": "هذه المادة لم تعد موجودة. أعد تحميل الصفحة.",

    // ----- admin page: stage and courses -----
    "No announcements yet": "لا توجد إعلانات بعد",
    "Post or remove": "نشر أو حذف",
    "Admins": "المشرفون",
    "Add or remove": "إضافة أو حذف",
    "Add course": "إضافة مادة",
    "New course": "مادة جديدة",
    "Course code": "رمز المادة",
    "Lecturer": "التدريسي",
    "Course title": "اسم المادة",
    "Enter the course’s code and title.": "اكتب رمز المادة واسمها.",
    "Course added.": "أُضيفت المادة.",
    "Link": "رابط",
    "File": "ملف",
    "Add source": "إضافة مصدر",
    "Save changes": "حفظ التغييرات",
    "Delete course": "حذف المادة",
    "Add lecture": "إضافة محاضرة",
    "Course": "المادة",
    "Details": "التفاصيل",
    "That lecture is already gone. Reload the page.": "هذه المحاضرة محذوفة مسبقاً. أعد تحميل الصفحة.",
    "Lecture deleted.": "حُذفت المحاضرة.",
    "That source is already gone. Reload the page.": "هذا المصدر محذوف مسبقاً. أعد تحميل الصفحة.",
    "Source deleted.": "حُذف المصدر.",
    "Course deleted.": "حُذفت المادة.",

    // ----- admin page: new lecture and new source -----
    "New lecture": "محاضرة جديدة",
    "Lecture title": "عنوان المحاضرة",
    "Date": "التاريخ",
    "Slides, notes, or PDFs. Up to 25 MB each.": "شرائح أو ملاحظات أو ملفات PDF. حتى 25 ميغابايت لكل ملف.",
    "Recording link (optional)": "رابط التسجيل (اختياري)",
    "Summary (optional)": "الملخص (اختياري)",
    "Upload": "رفع",
    "Enter the lecture title.": "اكتب عنوان المحاضرة.",
    "Choose the lecture date.": "اختر تاريخ المحاضرة.",
    "The link must start with https://": "يجب أن يبدأ الرابط بـ https://",
    "Uploaded.": "تم الرفع.",
    "New source": "مصدر جديد",
    "Source name": "اسم المصدر",
    "Course textbook": "الكتاب المنهجي",
    "Up to 25 MB. Or use a link instead.": "حتى 25 ميغابايت. أو استخدم رابطاً.",
    "Enter the source name.": "اكتب اسم المصدر.",
    "Add a file or a link for the source.": "أضف ملفاً أو رابطاً للمصدر.",

    // ----- admin page: announcements -----
    "Students of {stage} see these.": "يراها طلبة {stage}.",
    "Title": "العنوان",
    "Midterm exam dates": "مواعيد امتحانات نصف الفصل",
    "Message": "نص الإعلان",
    "Post announcement": "نشر الإعلان",
    "Posted": "المنشورة",
    "Enter the announcement’s title.": "اكتب عنوان الإعلان.",
    "Posted.": "تم النشر.",
    "That announcement is already gone. Reload the page.": "هذا الإعلان محذوف مسبقاً. أعد تحميل الصفحة.",
    "Announcement deleted.": "حُذف الإعلان.",

    // ----- admin page: admins -----
    "owner": "المالك",
    "Make a token on GitHub for each admin, register it here, then send it to them privately.": "أنشئ على GitHub رمزاً لكل مشرف، وسجّله هنا، ثم أرسله إليه بشكل خاص.",
    "Three-part name, in English.": "الاسم الثلاثي بالإنجليزية.",
    "Their access token": "رمز الدخول الخاص به",
    "Only its fingerprint is saved, never the token itself.": "تُحفظ بصمته فقط، لا الرمز نفسه.",
    "Add admin": "إضافة مشرف",
    "Registered": "المسجّلون",
    "Enter their full three-part name, in English letters.": "اكتب اسمه الثلاثي الكامل بالأحرف الإنجليزية.",
    "Enter their username.": "اكتب اسم المستخدم الخاص به.",
    "Paste their access token.": "الصق رمز الدخول الخاص به.",
    "That token is already registered.": "هذا الرمز مسجّل مسبقاً.",
    "Admin added.": "أُضيف المشرف.",
    "That admin is already gone. Reload the page.": "هذا المشرف محذوف مسبقاً. أعد تحميل الصفحة.",
    "Admin removed.": "حُذف المشرف.",
    "This page isn’t part of your admin area, or it was removed.": "هذه الصفحة ليست ضمن صلاحياتك، أو أنها حُذفت.",
    "Back to the start": "العودة إلى البداية",

    // ----- settings -----
    "Settings": "الإعدادات",
    "Back": "رجوع",
    "Appearance": "المظهر",
    "Automatic": "تلقائي",
    "Light": "فاتح",
    "Dark": "داكن",
    "Language": "اللغة",
    "Automatic follows your device.": "الخيار التلقائي يتبع إعدادات جهازك.",
    "Saved files": "الملفات المحفوظة",
    "PDFs you open are kept in this browser, so they open faster next time.": "تُحفظ ملفات PDF التي تفتحها في هذا المتصفح لتفتح أسرع في المرة القادمة.",
    "No saved files.": "لا توجد ملفات محفوظة.",
    "Remove saved files": "حذف الملفات المحفوظة",
    "Tap again to remove": "اضغط مرة أخرى للحذف",
    "Saved files removed.": "حُذفت الملفات المحفوظة.",
    "Saving files isn’t available in this browser.": "حفظ الملفات غير متاح في هذا المتصفح.",
    "For people who manage a stage.": "لمن يدير إحدى المراحل.",
    "Admin page": "صفحة الإدارة",
    "About": "حول الموقع",
    "Opely is open source, under the MIT License.": "موقع Opely مفتوح المصدر، برخصة MIT."
  }
};

// Words used when counting things, for languages where "5 lectures" needs
// grammar that changes with the number. They are shown as "Lectures: 5".
const COUNT_WORDS = {
  ar: { course: "المواد", lecture: "المحاضرات", source: "المصادر", file: "الملفات", page: "الصفحات", announcement: "الإعلانات", admin: "المشرفون" }
};

const RIGHT_TO_LEFT = ["ar"];

// ---------- The visitor's own choices (from the Settings page) ----------
// Saved in this browser only. "auto" means: follow the device.
const LANGUAGE_KEY = "opely-language";   // "auto", "en", or "ar"
const APPEARANCE_KEY = "opely-theme";    // "auto", "light", or "dark"

function savedChoice(key) {
  try { return localStorage.getItem(key) || "auto"; } catch (error) { return "auto"; }
}
function saveChoice(key, value) {
  try {
    if (value === "auto") localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch (error) { /* storage blocked: the choice lasts until the page is closed */ }
}

// Light or Dark Mode. The colours for each are in style.css.
function applyAppearance() {
  const choice = savedChoice(APPEARANCE_KEY);
  if (choice === "auto") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = choice;
  // The colour of the phone's status bar follows the same choice
  document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
    if (!meta.dataset.auto) meta.dataset.auto = meta.content; // remember the device-following colour
    meta.content = choice === "auto" ? meta.dataset.auto : choice === "dark" ? "#141210" : "#F7F5F1";
  });
}
applyAppearance();

// ---------- Choosing the language ----------
// A language chosen in Settings wins. Otherwise the device lists its
// languages in order of preference, for example ["ar-IQ", "en-US"],
// and the first one we have (or English) is used.
let lang = "en";       // the two-letter code of the language being shown
let locale = "en-US";  // the full code, used for writing dates
const chosenLanguage = savedChoice(LANGUAGE_KEY);
const deviceLanguages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
(chosenLanguage !== "auto" ? [chosenLanguage === "ar" ? "ar-IQ" : "en-US"] : deviceLanguages).some(tag => {
  const code = tag.toLowerCase().split("-")[0];
  if (code !== "en" && !TRANSLATIONS[code]) return false;
  lang = code;
  locale = tag;
  return true;
});
// Arabic dates use the local month names with the digits 0-9, to match course codes
if (lang === "ar") locale += "-u-nu-latn";

document.documentElement.lang = lang;
document.documentElement.dir = RIGHT_TO_LEFT.includes(lang) ? "rtl" : "ltr";

// ---------- Translating ----------
// Puts values into the {places} of a text: fill("Page {n}", { n: 3 }) gives "Page 3"
function fill(text, values) {
  return text.replace(/\{(\w+)\}/g, (whole, name) => (values && name in values ? values[name] : whole));
}

// Gives a text in the visitor's language. Text without a translation stays in English.
function t(text, values) {
  const words = TRANSLATIONS[lang];
  if (!words) return fill(text, values);
  // A translation for the finished sentence wins: "Stage 1" has its own, nicer wording
  return words[fill(text, values)] || fill(words[text] || text, values);
}

// "5 lectures" in English, "المحاضرات: 5" in Arabic
function plural(n, word) {
  const words = COUNT_WORDS[lang];
  if (words && words[word]) return words[word] + ": " + n;
  return n + " " + word + (n === 1 ? "" : "s");
}

// A date such as "Sep 7, 2026", written the way the visitor's language writes it
function niceDate(date) {
  return new Date(date + "T00:00").toLocaleDateString(locale, { month: "short", day: "numeric", year: "numeric" });
}

// The name of a department, faculty, or university. catalog.json can hold
// translated names:  "names": { "ar": "علوم الحاسوب" }
function localName(item) {
  return (item.names && item.names[lang]) || item.name;
}

// The name of a stage. The usual names ("Stage 1") are translated. A name an
// owner made up themselves is shown as it is.
function stageName(stage) {
  const usual = /^Stage (\d+)$/.exec(stage.name);
  return usual ? t("Stage {n}", { n: usual[1] }) : stage.name;
}

// The comma between two short pieces of text, as the visitor's language writes it
const SEP = t(", ");

// A page title such as "Announcements | Admin", with the parts we can translate translated
function localTitle(title) {
  return title.split(" | ").map(part => t(part)).join(" | ");
}

// Translates the text that is written directly in a page's HTML
// (headings, labels, buttons, placeholders). Called once when a page opens.
function translatePage() {
  document.title = localTitle(document.title);
  if (!TRANSLATIONS[lang]) return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const texts = [];
  while (walker.nextNode()) texts.push(walker.currentNode);
  texts.forEach(node => {
    const english = node.textContent.trim();
    if (english && TRANSLATIONS[lang][english] && !node.parentElement.closest("script, style")) {
      node.textContent = node.textContent.replace(english, TRANSLATIONS[lang][english]);
    }
  });
  document.querySelectorAll("[placeholder]").forEach(field => {
    if (TRANSLATIONS[lang][field.placeholder]) field.placeholder = TRANSLATIONS[lang][field.placeholder];
  });
}
