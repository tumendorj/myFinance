// дэлгэцтэй ажиллах контроллер
var uiController = (function() {
  var DOMstrings = {
    type: "add__type",
    description: ".add__description",
    acc: ".add__value",
    btn: ".add__btn"
  };
  return {
    getValues: function() {
      return {
        type: document.querySelector(DOMstrings.type).value,
        description: document.querySelector(DOMstrings.type).value,
        acc: document.querySelector(DOMstrings.acc).value
      };
    },
    getDOM: function() {
      return DOMstrings;
    }
  };
})();
// санхүүтэй ажиллах контроллер
var financeController = (function() {})();
// програмын холбогч контроллер
var appController = (function(uiController, financeController) {
  var ctlAddItem = function() {
    // 1. оруулах өгөгдлийг дэлгэцээс авах
    // 2. олсон өгөгдлөө санхүүгийн контроллерт дамжуулж тэнд нь хадгална
    // 3. өгөгдлүүдийг дэлгэцэнд гаргана
    // 4. төсвийг тооцоолно
    // 5. тооцооллыг дэлгэцлэнэ
  };
  var setupEventListeners = function() {
    var DOM = uiController.getDOM();
    document.querySelector(DOM.btn).addEventListener("click", function() {
      ctlAddItem();
    });
    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13) ctlAddItem();
    });
  };
  return {
    init: function() {
      setupEventListeners();
    }
  };
})(uiController, financeController);
appController.init();
