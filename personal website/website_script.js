const sections = document.querySelectorAll("section.scroll-reveal");
const triggers = document.querySelectorAll(".scroll-reveal-trigger");

triggers.forEach((trigger, index) => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        sections[index].classList.add("scroll-reveal-active");
      }
    },
    {
      threshold: 0.5, // adjust this value to control when the reveal happens
    }
  );
  observer.observe(trigger);
});

function ToggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
