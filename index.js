window.alert = function(name) {
  var iframe = document.createElement('IFRAME')
  iframe.style.display = 'none'
  iframe.setAttribute('src', 'data:text/plain,')
  document.documentElement.appendChild(iframe)
  window.frames[0].window.alert(name)
  iframe.parentNode.removeChild(iframe)
}

window.confirm = function (name) {
  var iframe = document.createElement('IFRAME')
  iframe.style.display = 'none'
  iframe.setAttribute('src', 'data:text/plain,')
  document.documentElement.appendChild(iframe)
  mframe = window.frames[0].window.confirm(name)
  iframe.parentNode.removeChild(iframe)
  return mframe
}

window.prompt = function (name, value) {
  var iframe = document.createElement('IFRAME')
  iframe.style.display = 'none'
  iframe.setAttribute('src', 'data:text/plain,')
  document.documentElement.appendChild(iframe)
  mframe = window.frames[0].window.prompt(name, value)
  iframe.parentNode.removeChild(iframe)
  return mframe
}
