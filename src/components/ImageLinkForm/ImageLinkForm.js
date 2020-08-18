import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = () => {
  return (
    <div >
      <p className='f3'>
        {'This magic Brain will detect faces in your picture. give it a try.'}
      </p>
      <div className='center'>
      <div className=' center form pa4 br3 shadow-5'>
        <input className='f4 pa2 w-70 center' type='text' />
        <button className='w-30 grow f4 link ph3 pv2 dib black bg-light-green'>Detect</button>
      </div>
        
      </div>
    </div>
  );
}
export default ImageLinkForm;
