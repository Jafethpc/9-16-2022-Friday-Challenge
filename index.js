let cookies = 0;

let cookiesPerClick = 1;

let cookiesPerSecond = 0;

let cursorUpgrade = 0;

let cursorUpgradeCost = 100;

let grandmaUpgrade = 0;

let grandmaUpgradeCost = 1000;

let currentCursorUpgradeHTML = document.querySelector(".current-cursor-amount");

let cursorUpgradeCostHTML = document.querySelector(".current-cursor-cost");

let amountOfCookiesHTML = document.querySelector(".amount-of-cookies");

let cookiesPerSecHTML = document.querySelector(".cookies-per-second");

let currentGrandmaUpgradeHTML = document.querySelector(
  ".current-grandma-amount"
);

let grandmaUpgradeCostHTML = document.querySelector(".current-grandma-cost");

document.querySelector(".cookie-img").addEventListener("click", function () {
  cookies += cookiesPerClick + cursorUpgrade;
  amountOfCookiesHTML.innerHTML = `${cookies} Cookies`;
});

document
  .querySelector(".cursor-upgradebtn")
  .addEventListener("click", function () {
    if (cookies >= cursorUpgradeCost) {
      cursorUpgrade++;
      cookies -= cursorUpgradeCost;
      amountOfCookiesHTML.innerHTML = `${cookies} Cookies`;
      cursorUpgradeCost += 100;
      cursorUpgradeCostHTML.innerHTML = `Current Cursor Upgrade: ${cursorUpgradeCost}`;
      currentCursorUpgradeHTML.innerHTML = `Cursor Upgrade: ${cursorUpgrade}`;
    }
  });

document
  .querySelector(".grandma-upgradebtn")
  .addEventListener("click", function () {
    if (cookies >= grandmaUpgradeCost) {
      grandmaUpgrade++;
      cookies -= grandmaUpgradeCost;
      amountOfCookiesHTML.innerHTML = `${cookies} Cookies`;
      grandmaUpgradeCost += 100;
      grandmaUpgradeCostHTML.innerHTML = `Current Grandma Upgrade: ${grandmaUpgradeCost}`;
      currentGrandmaUpgradeHTML.innerHTML = `Grandma Upgrade: ${grandmaUpgrade}`;
      cookiesPerSecHTML.innerHTML = `per second: ${grandmaUpgrade}`;
      setInterval(function () {
        cookies++;
        amountOfCookiesHTML.innerHTML = `${cookies} Cookies`;
      }, 1000);
    }
  });
