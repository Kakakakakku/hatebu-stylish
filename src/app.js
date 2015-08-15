var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    var elements = document.querySelectorAll('#page-content blockquote');
    [].forEach.call(elements, function(element) {
      element.parentNode.removeChild(element);
    });
  });
});
 
var target = document.querySelector('#center-container');
var config = { childList: true };
 
observer.observe(target, config);
