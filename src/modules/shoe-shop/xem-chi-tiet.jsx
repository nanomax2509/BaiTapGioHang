import React, { Component } from "react";

export default class XemChiTiet extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-4">
            <h2>{products.name}</h2>
            <img
              style={{
                width: "100%",
              }}
              src={products.image}
              alt=".."
            />
          </div>
          <div className="col-8">
            <h2>Thông tin chi tiết</h2>
            <table className="table">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{products.name}</td>
                </tr>
                <tr>
                  <td>Giá:</td>
                  <td>${products.price}</td>
                </tr>
                <tr>
                  <td>Mô tả:</td>
                  <td>{products.description}</td>
                </tr>
                <tr>
                  <td>Kho còn lại:</td>
                  <td>{products.quantity}</td>
                </tr>
                <tr>
                  <td>Hình ảnh:</td>
                  <td><img
              style={{
                width: "40%",
              }}
              src={products.image}
              alt=".."
            /></td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
