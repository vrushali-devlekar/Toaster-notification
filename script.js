function createToaster(config) {
  let parent = document.querySelector(".parent");
  return function (str) {
    let div = document.createElement("div");
    div.textContent = str;
    div.className = `inline-block ${
      config.theme === "dark"
        ? "bg-gray-800 text-white"
        : "bg-gray-100 text-black"
    } px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity `;

    parent.appendChild(div);

    if (config.positionX !== "left" || positionY !== "top") {
      parent.className += `${
        config.positionX === "right" ? " right-5" : "  left-5"
      } ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`;
    }

    setTimeout(() => {
      parent.removeChild(div);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "top",
  theme: "dark",
  duration: 3,
});
let toaster1 = createToaster({
  positionX: "right",
  positionY: "top",
  theme: "light",
  duration: 3,
});
let toaster3 = createToaster({
  positionX: "right",
  positionY: "top",
  theme: "light",
  duration: 4,
});
toaster1("check now");
toaster("Downloading");
toaster("Download Done");
toaster3("Your request is been accepted ..!!");
