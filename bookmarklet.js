// ==Bookmarklet==
// @name Bookmarklet Job Agent
// @author Steve Swanson
// ==/Bookmarklet==

(async () => {
  const url = window.location.href.trim().split("?")[0];
  const isLinkedIn = url.includes("linkedin.com");

  if (!isLinkedIn) {
    console.error("This bookmarklet only works on LinkedIn job postings.");
    return;
  }
  if (!isLinkedIn) {
    console.error("This bookmarklet only works on LinkedIn job postings.");
    return;
  }

  const jobDescription = document.querySelector(
    "[data-testid=expandable-text-box]",
  ).innerText;
  const jobTitle = document.querySelector("title");

  if (jobDescription && jobTitle && url) {
    navigator.clipboard
      .writeText(
        JSON.stringify({
          jobTitle: jobTitle.innerText,
          jobDescription: jobDescription,
          jobUrl: url,
        }),
      )
      .then(() => {
        console.info("Successfully copied to clipboard!\n");
      })
      .catch((err) => {
        console.error("Failed to copy to clipboard: ", err);
      });
  } else {
    console.error("Could not find job description, title, or URL");
  }
})();
