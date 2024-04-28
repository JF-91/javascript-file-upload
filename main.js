import './style.css'
import { uploadpdf } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div id="container">
    <input type="file" id="input" acept="pdf" />

    <div id="content">

    </div>
  </div>
`

uploadpdf(document.querySelector('#container'))
