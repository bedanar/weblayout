document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.steps__item-step').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path=event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content').forEach( function(tabContent){
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelectorAll(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  });
  document.querySelector('.nav__burger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('is-active')
  })
})
