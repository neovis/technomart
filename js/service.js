var serviceDelivery = document.querySelector(".service-delivery");
var serviceGaranty = document.querySelector(".service-garanty");
var serviceCredit = document.querySelector(".service-credit");

var infoDelivery = document.querySelector(".info-delivery");
var infoGaranty = document.querySelector(".info-garanty");
var infoCredit = document.querySelector(".info-credit");


serviceDelivery.addEventListener("click", function() {
  serviceDelivery.classList.add("service-active");
  infoDelivery.classList.add("info-active");

  serviceCredit.classList.remove("service-active");
  infoCredit.classList.remove("info-active");

  serviceGaranty.classList.remove("service-active");
  infoGaranty.classList.remove("info-active");
});


serviceGaranty.addEventListener("click", function() {
  serviceDelivery.classList.remove("service-active");
  infoDelivery.classList.remove("info-active");

  serviceCredit.classList.remove("service-active");
  infoCredit.classList.remove("info-active");

  serviceGaranty.classList.add("service-active");
  infoGaranty.classList.add("info-active");
});


serviceCredit.addEventListener("click", function() {
  serviceDelivery.classList.remove("service-active");
  infoDelivery.classList.remove("info-active");

  serviceCredit.classList.add("service-active");
  infoCredit.classList.add("info-active");

  serviceGaranty.classList.remove("service-active");
  infoGaranty.classList.remove("info-active");
});