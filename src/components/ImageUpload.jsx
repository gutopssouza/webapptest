import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import './ImageUpload.css'


export default function Previews(props) {

  const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 300,
  height: 300,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '500px'
};


  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      let newFile = acceptedFiles;
      props.onFileChanged(newFile);
    }
  });

  
  const thumbs = files.map(file => (
    <div className='thumb' key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  const render = Object.keys(files).length !== 0 ? (
        files.map(file => <aside>{thumbs}</aside>)
      ) : (
        <div className='nfDiv'>
          <div>
          <p>Clique ou arraste uma Nota Fiscal</p>
          <i className="material-icons">receipt</i>
          </div>
          </div>
      );

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);


  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        {render}
        {/*thumbs*/}
      </div>
    </section>
  );
}