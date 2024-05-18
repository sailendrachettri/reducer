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

        <Link to="/pngtojpeg">
          <div><span class="material-symbols-outlined"> swap_horiz</span>
            <p>Png to Jpeg</p>
          </div>
        </Link>

        <Link to="/jpegtopng">
          <div><span class="material-symbols-outlined"> local_convenience_store</span>
            <p>Jpeg to Png</p>
          </div>
        </Link>

        <Link to="/pngtowebp">
          <div><span class="material-symbols-outlined"> hub</span>
            <p>Png to Webp</p>
          </div>
        </Link>

        <Link to="/webptopng">
          <div><span class="material-symbols-outlined"> precision_manufacturing</span>
            <p>Webp to Png</p>
          </div>
        </Link>

        <Link to="/webptojpeg">
          <div><span class="material-symbols-outlined"> conveyor_belt</span>
            <p>Webp to Jpeg</p>
          </div>
        </Link>

        <Link to="/jpegtowebp">
          <div><span class="material-symbols-outlined"> conversion_path</span>
            <p>Jpeg to Webp</p>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default ConvertOptions