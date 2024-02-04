import { useNavigate, useParams } from 'react-router-dom';
import { useProduct } from './ProductContext';

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  purchaseDetail: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
  },
  totalAmount: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  paymentButton: {
    padding: '10px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default function PurchasePage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { selectedProduct } = useProduct();

  // Simulating the quantity state
  const quantity = 1;

  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

 

  const { name, price } = selectedProduct;

  const handlePayment = () => {
    // Simulate the payment process, you can replace this with your payment gateway integration
    const totalAmount = price * quantity;
    alert(`Processing payment for ${quantity} ${name}(s) - Total: $${totalAmount}`);
    // Redirect to a thank you page or order summary
    navigate('/thank-you');
  };

  const goBack = () => {
    navigate(`/product/${productId}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.purchaseDetail}>
        <h2>{name}</h2>
        <p>Quantity: {quantity}</p>
        <p>Price: ${price}</p>
        <h2 style={styles.totalAmount}>Total Amount: ${price * quantity}</h2>
        <button style={styles.paymentButton} onClick={handlePayment}>
          Proceed to Payment
        </button>
        <button onClick={goBack}>Back to Product</button>
      </div>
    </div>
  );
}
