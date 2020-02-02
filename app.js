// дэлгэцтэй ажиллах контроллер
var uiController = (function() {})();
// санхүүтэй ажиллах контроллер
var financeController = (function() {})();
// програмын холбогч контроллер
var appController = (function(uiController, financeController) {
  document.querySelector(".add__btn").addEventListener("click", function() {
    // 1. оруулах өгөгдлийг дэлгэцээс авах
    // 2. олсон өгөгдлөө санхүүгийн контроллерт дамжуулж тэнд нь хадгална
    // 3. өгөгдлүүдийг дэлгэцэнд гаргана
    // 4. төсвийг тооцоолно
    // 5. тооцооллыг дэлгэцлэнэ
  });
  document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") console.log(event);
  });
})(uiController, financeController);
