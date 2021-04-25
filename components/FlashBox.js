import Link from 'next/link';
import Head from 'next/head';
import flash from 'next-flash';
import React from 'react'
//
export default class Page extends React.Component {
  render(){
    return (
      <div>
        { this.props.messages_success ? 
        <div className="alert alert-success" role="alert">{this.props.messages_success}</div> 
        : <div /> 
        }
        { this.props.messages_error  ? 
        <div className="alert alert-danger" role="alert">{this.props.messages_error}</div> 
        : <div /> }      
      </div>
    );
  }
}
