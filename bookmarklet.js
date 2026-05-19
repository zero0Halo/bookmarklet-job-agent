// ==Bookmarklet==
// @name Bookmarklet Job Agent
// @author Steve Swanson
// ==/Bookmarklet==

(async () => {
  const jobDescription = document.querySelector(
    "[data-testid=expandable-text-box]",
  ).innerHTML;
  const jobTitle = document.querySelector("title");
  const url = window.location.href;

  if (jobDescription && jobTitle && url) {
    navigator.clipboard
      .writeText(
        JSON.stringify({
          title: jobTitle.innerText,
          description: jobDescription,
          url: url,
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
