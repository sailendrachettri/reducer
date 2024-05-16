import React from 'react'
import { Link } from 'react-router-dom'

const ConvertOptions = () => {
  return (
    <div className='converter'>
      <h1>Conversion tools</h1>
      <div className='tools'>

        <Link to="/reducer">
          <div> <span class="material-symbols-outlined">resize</span>
            <p>Mbs to Kbs</p>
          </div>
        </Link>

        <Link to="/wordtopdf">
          <div><span class="material-symbols-outlined"> swap_horiz</span>
            <p>Word to Pdf</p>
          </div>
        </Link>

        <Link to="/pdftoword">
          <div> <span class="material-symbols-outlined"> swap_vert</span>
            <p>Pdf to Word</p>
          </div>
        </Link>

        <Link to="/odttopdf">
          <div><span class="material-symbols-outlined">token</span>
            <p>Odt to Pdf</p>
          </div>
        </Link>

        <Link to="/pdftoodt">
          <div> <span class="material-symbols-outlined"> view_timeline </span>
            <p>Pdf to Odt</p>
          </div>
        </Link>

        <Link to="/pngtojpeg">
          <div> <span class="material-symbols-outlined"> view_timeline </span>
            <p>PNG to JPEG</p>
          </div>
        </Link>

        <Link to="/jpegtopng">
          <div> <span class="material-symbols-outlined"> view_timeline </span>
            <p>JPEG to PNG</p>
          </div>
        </Link>

        <Link to="/webptopng">
          <div> <span class="material-symbols-outlined"> view_timeline </span>
            <p>WEBP to PNG</p>
          </div>
        </Link>

        <Link to="/pngtowebp">
          <div> <span class="material-symbols-outlined"> view_timeline </span>
            <p>PNG to WEBP</p>
          </div>
        </Link>

        <Link to="/jpegtowebp">
          <div> <span class="material-symbols-outlined"> view_timeline </span>
            <p>JPEG to WEBP</p>
          </div>
        </Link>

        <Link to="/webptojpeg">
          <div> <span class="material-symbols-outlined"> view_timeline </span>
            <p>WEBP to JPEG</p>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default ConvertOptions