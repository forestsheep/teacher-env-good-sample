import './app.less'
import $ from 'jquery'

kintone.events.on('app.record.index.show', (event) => {
  const myContainer = kintone.app.getHeaderSpaceElement()
  myContainer.innerHTML = `<div class="progress-bar progress-bar--success">
  <div class="progress-bar__bar"></div>
</div>`

  // Send bar to point of click
  $('.progress-bar').on('click', function (e) {
    const offset = $(this).offset()
    const position = Math.floor(((e.pageX - offset.left) / $(this).width()) * 100) + 1
    $(this).find('.progress-bar__bar').css('transform', `translateX(${position}%)`)
    $(this).find('.progress-bar__bar').css('-webkit-transform', `translateX(${position}%)`)
  })

  // Send bar to random point
  $(document).ready(function () {
    $('.progress-bar__bar').each(function () {
      $(this).css('transform', `translateX(${Math.random() * 100}%)`)
      $(this).css('-webkit-transform', `translateX(${Math.random() * 100}%)`)
    })
  })

  return event
})
