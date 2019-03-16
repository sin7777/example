import React, { Component } from 'react';

export default class Toggle extends Component {

  handleChange(e) {
    let { updateItems } = this.props;

    updateItems({status: e.currentTarget.checked}); //是怎获取到具体是哪一个的status的？
    console.log(updateItems);
  }

  render () {
    let { isAllCompleted } = this.props;

    return (<input id="toggle-all" onChange={this.handleChange.bind(this)} checked={isAllCompleted} type="checkbox" />)
  }
}