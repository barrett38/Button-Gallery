const addBubbleToClick = (e) => {
  const button = e.currentTarget;
  const buttonRect = button.getBoundingClientRect();

  for (let i = 0; i < 10; i++) {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");

    const size = Math.random() * 10 + 5;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${
      buttonRect.left + buttonRect.width / 2 + (Math.random() - 0.5) * 50
    }px`;
    bubble.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
    bubble.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    document.body.appendChild(bubble);
    setTimeout(() => {
      bubble.remove();
    }, 1500);
  }
};

export default addBubbleToClick;
