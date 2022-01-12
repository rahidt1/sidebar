const collapsibles = document.querySelector(".collapsible");
const closeBtn = document.querySelector('.collapsible__close')
const togglerBtn = document.querySelector('.collapsible__toggler')

togglerBtn.addEventListener("click", function () {
    collapsibles.classList.toggle("collapsible--expanded");
  });
closeBtn.addEventListener("click", function () {
    collapsibles.classList.remove("collapsible--expanded");
  });
  