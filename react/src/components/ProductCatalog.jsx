import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ProductCatalog() {

    const [products, setProducts] = useState([]);

    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {

        try {

            const response = await fetch(
                "http://localhost:8082/Products",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            if (response.ok) {

                const data = await response.json();

                setProducts(data);

            } else {

                console.log("Failed to fetch products");

            }

        } catch (error) {

            console.error(error);

        }
    };

    return (

        <div className="container mt-4">

            <h2>Product Catalog</h2>

            <table className="table table-bordered table-striped">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>

                        <th>Name</th>

                        <th>Type</th>

                        <th>Description</th>

                        <th>Packaging</th>

                        <th>Total Qty</th>

                        <th>Batches</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        products.map(product => (

                            <tr key={product.pid}>

                                <td>{product.pid}</td>

                                <td>{product.pname}</td>

                                <td>{product.type}</td>

                                <td>{product.description}</td>

                                <td>{product.packaging_unit}</td>

                                <td>{product.totalQuantity}</td>

                                <td>{product.numberOfBatches}</td>

                                <td>

                                    <button className="btn btn-warning btn-sm me-2">
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm">
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );
}

export default ProductCatalog;