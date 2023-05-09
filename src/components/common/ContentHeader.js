import { Divider, Menu } from "antd";
import React, { Component } from "react";

export class ContentHeader extends Component {
  render() {
    const { navigate, title, className } = this.props;
    return (
      <div>
        <Menu
          className={className}
          style={{ marginLeft: 0 }}
          title={title}
          onBack={() => navigate(-1)}
        >
          {/* <h1>List Categories</h1> */}
        </Menu>
        <Divider></Divider>
      </div>
    );
  }
}

export default ContentHeader;
