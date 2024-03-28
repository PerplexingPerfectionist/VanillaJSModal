function ShowModal(htmlElement) {
  if (!htmlElement) return;

  let box = document.createElement("div");
  box.id = `modal${Math.floor(Math.random() * 1000).toString()}`;
  box.classList.add("modalWrapper");

  let modal = document.createElement("div");
  modal.className = "modalCard";

  let closeBtn = document.createElement("div");
  closeBtn.className = "closeBtn";

  let button = document.createElement("button");
  button.type = "button";
  button.id = "closeModal";

  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 384 512");

  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
  );

  svg.appendChild(path);
  button.appendChild(svg);
  closeBtn.appendChild(button);

  let modalBody = document.createElement("div");
  modalBody.className = "modalBody";
  modalBody.innerHTML = htmlElement;

  modal.appendChild(closeBtn);
  modal.appendChild(modalBody);

  box.appendChild(modal);

  const modalAlready = document.body.querySelector(".modalWrapper");
  if (modalAlready) modalAlready.remove();

  document.body.appendChild(box);

  box.addEventListener("click", (event) => {
    if (event.currentTarget != event.target) return;
    CloseModal(box.id);
  });

  closeBtn.addEventListener("click", (event) => {
    CloseModal(box.id);
  });
}

function CloseModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add("closing");
  setTimeout(() => {
    modal.remove();
  }, 200);
}
