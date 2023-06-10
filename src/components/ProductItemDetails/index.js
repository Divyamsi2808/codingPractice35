import {Component} from 'react'
import './index.css'

class ProductItemDetails extends Component {
  state = {
    productDetails: {},
  }

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `http://localhost:3000/products/${id}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response)
  }

  render() {
    return <h1>hi,Divyamsi</h1>
  }
}

export default ProductItemDetails
