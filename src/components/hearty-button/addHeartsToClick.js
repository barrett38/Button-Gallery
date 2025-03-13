const addHeartsToClick = (e) => {
  const button = e.currentTarget;
  const buttonRect = button.getBoundingClientRect();

  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("span");
    heart.classList.add("heart");

    const size = Math.random() * 10 + 5;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${
      buttonRect.left + buttonRect.width / 2 + (Math.random() - 0.5) * 50
    }px`;
    heart.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
    heart.style.animationDuration = `${Math.random() * 1 + 0.5}s`;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1500);
  }
};

export default addHeartsToClick;
