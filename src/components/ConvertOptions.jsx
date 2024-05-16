import React from 'react'
import { Link } from 'react-router-dom'

const ConvertOptions = () => {
  return (
    <div className='converter'>
      <h1>Explore conversion tools</h1>
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
      </div>
    </div>
  )
}

export default ConvertOptions