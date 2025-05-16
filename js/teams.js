document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.team-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const teamId = card.getAttribute('data-team');

      // Animate
      card.classList.add('clicked-animation');
      setTimeout(() => {
        card.classList.remove('clicked-animation');
      }, 500); // match the animation duration

      // Show corresponding team section
      document.querySelectorAll('.team-section').forEach(section =>
        section.classList.remove('active')
      );

      const targetSection = document.getElementById(teamId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });
});
