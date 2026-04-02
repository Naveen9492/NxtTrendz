import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      const onRemoveAll = () => {
        removeAllCartItems()
      }

      const renderCartSummary = () => {
        const totalAmount = cartList.reduce(
          (acc, red) => acc + red.quantity * red.price,
          0,
        )
        return (
          <div className="cart-summary-div">
            <h1 className="cart-summary-heading">
              Order Total:
              <span className="cart-summary-amount"> Rs {totalAmount}/-</span>
            </h1>
            <p className="cart-summary-items">
              {cartList.length} Items in cart
            </p>
            <button type="button" className="check-out-button">
              Checkout
            </button>
          </div>
        )
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-button"
                  onClick={onRemoveAll}
                >
                  Remove All
                </button>
                <CartListView />
                {renderCartSummary()}
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
