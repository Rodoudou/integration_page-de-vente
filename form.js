document.addEventListener("DOMContentLoaded", function () {
  const measureSlider = document.querySelector(".measure-slider");
  let isDragging = false;

  measureSlider.addEventListener("mousedown", function () {
    isDragging = true;
  });
  window.addEventListener("mousemove", function (event) {
    if (isDragging) {
      const measureBar = document.querySelector(".measure-bar");
      const measureBarRect = measureBar.getBoundingClientRect();
      const newPosition = event.clientX - measureBarRect.left;
      const minPosition = 0;
      const maxPosition = measureBarRect.width;

      if (newPosition >= minPosition && newPosition <= maxPosition) {
        measureSlider.style.left = newPosition + "px";
        const percentage = (newPosition / maxPosition) * 100;
        measureSlider.value = percentage;
      }
    }
  });

  window.addEventListener("mouseup", function () {
    isDragging = false;
  });
});
