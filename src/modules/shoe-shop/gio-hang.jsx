import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    const { gioHang, onDeleteproducts, onChangeQuantity } = this.props;

    return (
      <div>
        <h1>Giỏ hàng</h1>
        <table className="table" style={{ padding: ".5rem" }}>
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Giá</th>
              <th>Hình Ảnh</th>
              <th>Số lượng</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {gioHang.map((products) => {
              return (
                <tr key={products.id}>
                  <td>{products.id}</td>
                  <td>${products.price}</td>
                  <td>
                    <img
                      style={{
                        width: 100,
                      }}
                      src={products.image}
                      alt=".."
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        onChangeQuantity({
                          quantity: 1,
                          id: products.id,
                        });
                      }}
                      className="btn btn-success">+</button>
                    <productsan
                      style={{
                        fontSize: 30,
                      }}
                    >
                      {products.soLuong}
                    </productsan>
                    <button onClick={() => {
                      onChangeQuantity({
                        quantity: -1,
                        id: products.id,
                      });
                    }} className="btn btn-success">-</button>
                  </td>
                  <td>${products.soLuong * products.price}</td>
                  <td>
                    <button onClick={() => {
                      onDeleteproducts(products.id);
                    }} className="btn btn-danger"
                    >Xóa</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
