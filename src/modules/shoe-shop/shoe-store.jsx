import React, { Component } from 'react'
import GioHang from './gio-hang';
import XemChiTiet from './xem-chi-tiet';
const ListShoe = [
    {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    },
    {
      "id": 2,
      "name": "Adidas Prophere Black White",
      "alias": "adidas-prophere-black-white",
      "price": 450,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 990,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
    },
    {
      "id": 3,
      "name": "Adidas Prophere Customize",
      "alias": "adidas-prophere-customize",
      "price": 375,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 415,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
    },
    {
      "id": 4,
      "name": "Adidas Super Star Red",
      "alias": "adidas-super-star-red",
      "price": 465,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 542,
      "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
    },
    {
      "id": 5,
      "name": "Adidas Swift Run",
      "alias": "adidas-swift-run",
      "price": 550,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 674,
      "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
    },
    {
      "id": 6,
      "name": "Adidas Tenisky Super Star",
      "alias": "adidas-tenisky-super-star",
      "price": 250,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 456,
      "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
    },
    {
      "id": 7,
      "name": "Adidas Ultraboost 4",
      "alias": "adidas-ultraboost-4",
      "price": 450,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 854,
      "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
    },
    {
      "id": 8,
      "name": "Adidas Yeezy 350",
      "alias": "adidas-yeezy-350",
      "price": 750,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 524,
      "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
    },
    {
      "id": 9,
      "name": "Nike Adapt BB",
      "alias": "nike-adapt-bb",
      "price": 630,
      "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      "shortDescription": "Paul George is the rare high-percentage shooter",
      "quantity": 599,
      "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
    },
    {
      "id": 10,
      "name": "Nike Air Max 97",
      "alias": "nike-air-max-97",
      "price": 650,
      "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      "shortDescription": "Paul George is the rare high-percentage shooter",
      "quantity": 984,
      "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
    },
    {
      "id": 11,
      "name": "Nike Air Max 97 Blue",
      "alias": "nike-air-max-97-blue",
      "price": 450,
      "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      "shortDescription": "Paul George is the rare high-percentage shooter",
      "quantity": 875,
      "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
    },
    {
      "id": 12,
      "name": "Nike Air Max 270 React",
      "alias": "nike-air-max-270-react",
      "price": 750,
      "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      "shortDescription": "Paul George is the rare high-percentage shooter",
      "quantity": 445,
      "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
    } 
  ]


export default class ShoesStore extends Component {
    state = {
        shoeChiTiet: {
          id: 1,
          name: "Adidas Prophere",
          alias: "adidas-prophere",
          price: 350,
          description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          quantity: 995,
          image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        gioHang: [

        ],
    };
   
    handleAddSanPham = (sp) =>{
        const indexSp = this.state.gioHang.findIndex((item) => sp.id === item.id);
        let newGioHang = [];
        if(indexSp === -1){
            sp.soLuong = 1;
            newGioHang = [...this.state.gioHang, sp];
          } else {
            sp.soLuong += 1;
            this.state.gioHang.splice(indexSp, 1, sp); 
            newGioHang = this.state.gioHang;
          }
          this.setState({
            gioHang: newGioHang,
          });
        };

        handleDeleteSp = (id) => {
          // lọc lấy ra những phần tử mà chúng không muốn xóa
          // xóa đi phần tử có id === id
      
          // window.confirm() => return về true | false
          if (window.confirm("Bạn có chắc chắn muốn xóa hay không")) {
            const newGioHang = this.state.gioHang.filter(
              (item) => item.id !== id
            );
      
            this.setState({
              gioHang: newGioHang,
            });
          }
        };
      
        handleChangeQuantity = (params) => {
          const { quantity, id } = params;
      
          console.log({ quantity, id });
      
          const sanPham = this.state.gioHang.find((item) => item.id === id);
      
          if (!sanPham) return;
      
          if (sanPham.soLuong === 1 && quantity === -1) {
            this.handleDeleteSp(id);
          } else {
            sanPham.soLuong += quantity;
      
            console.log("Gio Hang Sau Khi Thay Doi", this.state.gioHang);
      
            this.setState({
              gioHang: this.state.gioHang,
            });
          }
        };
        handleChangeSanPhamChiTiet = (products) => {
          this.setState({
            shoeChiTiet: products,
          }); 
        };
    render() {
        return (
            <div>
                <h1 className='text-center text-danger'>SHOE SHOP</h1>
                
                    <div className="row">
                   <div className="col-7 border-right border-warning">
                   <div className="row">
                   {ListShoe.map((products) => {
                    
            return (
             
                <ProductList
                onAddSanPham={this.handleAddSanPham}
                onChangeItem = {this.handleChangeSanPhamChiTiet}
                productsData={products}
                key={products.id}
              />
              
            );
          })}
          </div>
                   </div>
                   <div className="col-5">
                   <div className="mt-2 border border-danger">
                    <h3 className='text-center'>Thông tin sản phẩm</h3>
          <XemChiTiet products={this.state.shoeChiTiet} />
        </div>
                   <GioHang gioHang={this.state.gioHang}
                  onChangeQuantity={this.handleChangeQuantity}
                  onDeleteproducts={this.handleDeleteSp}
                  />
                  
                   </div>
                    </div>
                </div>
           
        )
    }
}
class ProductList extends Component {
    render() {  
                const products = this.props.productsData;

                const {onAddSanPham, onChangeItem} = this.props;
        return (
            <div className="col-4">
              <div className="card" style={{ margin: "5px" }}>
                <img src={products.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 style={{ height: "40px" }} className="card-title mb-3 text-center">{products.name}</h5>
                    <p className="card-text font-weight-bold text-center text-danger">$ {products.price}</p>
                    <div className='d-flex justify-content-between'> 
                    <a href="#" onClick={()=>{
                      onAddSanPham(products)
                    }} className="btn btn-primary ">Buy Now</a>
                    <a href="#"
                    onClick={()=>{
                      onChangeItem(products)
                    }} className="btn btn-primary bg-dark ">More Info</a>

                    </div>
                </div>
            </div>
            </div>

        )
    }
}
