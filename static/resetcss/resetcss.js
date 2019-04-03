(function () {
  const width = document.documentElement.clientWidth
  console.log(width)
  const styleNode = document.createElement('style')
  styleNode.innerHTML = `html{font-size:${width}/10px !important}`
  document.head.appendChild(styleNode)
})()
