import Product from '../models/product.model.js';
import mongoose from 'mongoose';
export const getproducts = async (req , res) =>{
    try {
        const products = await Product.find(); // Fetch all products from the database
        res.status(200).json({success: "true", data: products}); // Send the products as a JSON response
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({success: "false", message: 'Internal server error' });
    }}
    export const createproduct =  async (req,res)=>{
    const product = req.body; // user will send product data in the request body
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success : "false",  message: 'Name ,price and images are required' });
    }
  const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({success: "true", message: 'Product created successfully', data: newProduct});
    } catch (error) {
        console.error('Error creating product:', error.mesaage);
        res.status(500).json({success: "false", message: 'Internal server error' });
        }
}
export const deleteProduct =  async (req, res) => {
  const  id  = req.params.id; // Get the product ID from the request parameters
  try {
    await Product.findByIdAndDelete(id)
    res.status(200).json({ success: "true", message: 'Product deleted successfully' });  
  } 
  catch (error) {
    console.error('Error deleting product:', error.mesaage);
    res.status(500).json({ success: "false", message: 'Server Error' });
  }
}
export const updateProduct = async (req, res) => {
  const id = req.params.id; // Get the product ID from the request parameters   
  const updatedproduct = req.body; // Get the updated product data from the request body
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: "false", message: 'Invalid product ID' });
  }
  try {
    await Product.findByIdAndUpdate(id, updatedproduct, { new: true }); // Update the product in the database
    res.status(200).json({ success: "true", message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error.message);
    res.status(500).json({ success: "false", message: 'Product not found' });
  }
}