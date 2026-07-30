import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function UpdateStock() {

    const token = useSelector(state => state.auth.token);

    const [products, setProducts] = useState([]);

    const [stockList, setStockList] = useState([]);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [stock, setStock] = useState({
        manuf_date: "",
        expiry_date: "",
        price: "",
        quantity: ""
    });

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {

        const response = await fetch(
            "http://localhost:8082/Products",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        const data = await response.json();

        setProducts(data);

    };

    const viewStock = async (product) => {

        setSelectedProduct(product);

        const response = await fetch(

            `http://localhost:8082/Products/${product.pid}/stock`,

            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        const data = await response.json();

        setStockList(data);

        new window.bootstrap.Modal(
            document.getElementById("viewModal")
        ).show();

    };

    const openAddModal = (product) => {

        setSelectedProduct(product);

        setStock({
            manuf_date: "",
            expiry_date: "",
            price: "",
            quantity: ""
        });

        new window.bootstrap.Modal(
            document.getElementById("addModal")
        ).show();

    };

    const handleChange = (e) => {

        setStock({
            ...stock,
            [e.target.name]: e.target.value
        });

    };

    const addStock = async () => {

        const response = await fetch(

            `http://localhost:8082/Products/${selectedProduct.pid}/stock`,

            {
                method: "POST",

                headers: {

                    Authorization: `Bearer ${token}`,

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(stock)

            });

        if(response.ok){

            alert("Stock Added Successfully");

            loadProducts();

            window.bootstrap.Modal
                .getInstance(document.getElementById("addModal"))
                .hide();

        }

    };

    return (

<div className="container mt-4">

<h2>Warehouse Stock</h2>

<table className="table table-bordered">

<thead className="table-dark">

<tr>

<th>ID</th>

<th>Name</th>

<th>Type</th>

<th>Total Qty</th>

<th>Batches</th>

<th>Actions</th>

</tr>

</thead>

<tbody>

{

products.map(product=>

<tr key={product.pid}>

<td>{product.pid}</td>

<td>{product.pname}</td>

<td>{product.type}</td>

<td>{product.totalQuantity}</td>

<td>{product.numberOfBatches}</td>

<td>

<button
className="btn btn-primary btn-sm me-2"
onClick={()=>viewStock(product)}
>

View Stock

</button>

<button
className="btn btn-success btn-sm"
onClick={()=>openAddModal(product)}
>

Add Stock

</button>

</td>

</tr>

)

}

</tbody>

</table>

{/* VIEW STOCK MODAL */}

<div className="modal fade" id="viewModal">

<div className="modal-dialog modal-lg">

<div className="modal-content">

<div className="modal-header">

<h5>

{selectedProduct?.pname}

</h5>

<button
className="btn-close"
data-bs-dismiss="modal">
</button>

</div>

<div className="modal-body">

<table className="table">

<thead>

<tr>

<th>SID</th>

<th>Manufacture</th>

<th>Expiry</th>

<th>Price</th>

<th>Quantity</th>

</tr>

</thead>

<tbody>

{

stockList.map(stock=>

<tr key={stock.sid}>

<td>{stock.sid}</td>

<td>{stock.manuf_date}</td>

<td>{stock.expiry_date}</td>

<td>{stock.price}</td>

<td>{stock.quantity}</td>

</tr>

)

}

</tbody>

</table>

</div>

</div>

</div>

</div>

{/* ADD STOCK MODAL */}

<div className="modal fade" id="addModal">

<div className="modal-dialog">

<div className="modal-content">

<div className="modal-header">

<h5>

Add Stock

</h5>

<button
className="btn-close"
data-bs-dismiss="modal">
</button>

</div>

<div className="modal-body">

<input
type="date"
name="manuf_date"
className="form-control mb-2"
value={stock.manuf_date}
onChange={handleChange}
/>

<input
type="date"
name="expiry_date"
className="form-control mb-2"
value={stock.expiry_date}
onChange={handleChange}
/>

<input
type="number"
name="price"
placeholder="Price"
className="form-control mb-2"
value={stock.price}
onChange={handleChange}
/>

<input
type="number"
name="quantity"
placeholder="Quantity"
className="form-control mb-2"
value={stock.quantity}
onChange={handleChange}
/>

<button
className="btn btn-success w-100"
onClick={addStock}
>

Save Stock

</button>

</div>

</div>

</div>

</div>

</div>

    );

}

export default UpdateStock;