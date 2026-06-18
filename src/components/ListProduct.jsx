import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getCategories, getProducts, removeProduct } from '../config/api';


function ListProduct() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    // Hàm load dữ liệu từ API
    const loadData = async () => {
        
            const res1 = await getProducts();
            setProducts(res1.data);
            const res2 = await getCategories();
            setCategories(res2.data);
        
    }; 

   
   
    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm có id " + id + "?")) {      
                await removeProduct(id);
                loadData(); }
            
    };

    const getCategoryName = (categoryId) => {
        const category = categories.find((c) => c.id === categoryId);
        return category ? category.name : "NoName";
    };
    
 useEffect(() => {
    loadData(); 
}, []);
console.log(products);
    return (
        <div>
            <h2 className='mt-4'>List of Products</h2>
            <Link to='/add'>
                <Button variant='primary' className='mt-3'>Add Product</Button>
            </Link>
            <Table bordered striped className="mt-3">
                <thead>
                    <tr> 
                        <th>ID</th>
                        <th>Images</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((p) => (
                        <tr >
                            <td>{p.id}</td>
                            <td><img src={p.Images} style={{ width: '100px' }} /></td>
                            <td>{p.Name}</td>
                            <td>${p.Price}</td> 
                            <td>{getCategoryName(p.Category_ID)}</td>
                            <td>
                                <Link to={`/update/${p.id}`}>
                                    <Button variant="warning" className="me-2">Edit</Button>
                                </Link>
                               
                                <Button variant="danger" onClick={() => handleDelete(p.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ListProduct;