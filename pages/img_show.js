import React from 'react'
import Image from 'next/image'

import LibCommon from '../libs/LibCommon'
import LibPagenate from '../libs/LibPagenate'
import LibTest from '../libs/LibTest'
import Layout from '../components/layout'
import LibConst from '../libs/LibConst'
import LibImage from '../libs/LibImage'
//
export default class extends React.Component {
  static async getInitialProps(ctx) {
    return {
      data: "",
      BASE_URL: "",
      img_name: "/img/a3.JPG",
    }
  }
  constructor(props){
    super(props)
    this.state = {img_width: 0, img_height: ''}
//console.log(props )
  }
  componentDidMount(){
    var self = this
    var image = LibImage.get_image_size(this.props.img_name)
    image.onload = function(){
console.log("w=" ,image.width)
      self.setState({
        img_width: image.width , img_height: image.height
      });
    };    
  }
  render(){
    return (
    <Layout>
      <div className="body_main_wrap">
        <div className="container">test:
        <hr />
        <Image src={this.props.img_name} width={this.state.img_width} 
        height={this.state.img_height}></Image>
        </div>
      </div>
    </Layout>
    )
  }
}

