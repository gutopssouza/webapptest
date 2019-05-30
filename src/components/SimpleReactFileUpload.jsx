import React from 'react'
import axios from 'axios';

class SimpleReactFileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log('Funcionou!');
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'https://conductive-coil-239500.appspot.com/invoice';

    const formData = new FormData();
    formData.append('file',{
      uri: file.uri,
      type: file.type,
      name: file.name,
    });
    //formData.append('file',file)
    formData.append('id_brand','1')
    formData.append('id_store','1')
    formData.append('user_phone','5521979562322')
    return axios.post(url, formData)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
   )
  }
}



export default SimpleReactFileUpload