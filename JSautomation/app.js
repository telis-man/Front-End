const test = 'test'
import 'materialize-css/dist/js/materialize.min.js'

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.parallax')
  var instances = M.Parallax.init(elems, options)
})
