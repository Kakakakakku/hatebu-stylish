var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    element = document.querySelector('#page-content blockquote');
    element.parentNode.removeChild(element);
  });
});
 
var target = document.querySelector('#center-container');
var config = { childList: true };
 
observer.observe(target, config);
