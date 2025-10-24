// validate.js
import fs from "fs";
import path from "path";

const pages = [
  {
    file: "index.html",
    testIds: [
      "test-user-name",
      "test-user-bio",
      "test-user-time",
      "test-user-hobbies",
      "test-user-dislikes",
    ],
  },
  {
    file: "about.html",
    testIds: [
      "test-about-page",
      "test-about-bio",
      "test-about-goals",
      "test-about-confidence",
      "test-about-future-note",
      "test-about-extra",
    ],
  },
  {
    file: "contact.html",
    testIds: [
      "test-contact-name",
      "test-contact-email",
      "test-contact-subject",
      "test-contact-message",
      "test-contact-submit",
      "test-contact-success",
      "test-contact-error-email",
    ],
  },
];

// --- utility ---
function checkFile(filePath, requiredIds) {
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${filePath} not found`);
    return;
  }

  const html = fs.readFileSync(filePath, "utf8");
  console.log(`\n🔍 Checking ${filePath} ...`);
  let allFound = true;

  requiredIds.forEach((id) => {
    const regex = new RegExp(`data-testid=["']${id}["']`, "i");
    if (regex.test(html)) {
      console.log(`✅ Found: ${id}`);
    } else {
      console.log(`❌ Missing: ${id}`);
      allFound = false;
    }
  });

  if (allFound) console.log(`🎉 All required test IDs found in ${filePath}!\n`);
  else console.log(`⚠️ Some test IDs are missing in ${filePath}\n`);
}

// --- run validation ---
console.log("🧠 Running Local HNG HTML Validator...");
pages.forEach(({ file, testIds }) =>
  checkFile(path.resolve(process.cwd(), file), testIds)
);
