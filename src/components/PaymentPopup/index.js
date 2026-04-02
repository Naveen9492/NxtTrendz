import {Component} from 'react'
import './index.css'

class PaymentPopup extends Component {
  state = {paymetSelection: '', confirmOrder: false}

  onSelectCOD = () => {
    this.setState({paymetSelection: 'COD'})
  }

  onConfirmOrder = () => {
    this.setState({confirmOrder: true})
  }

  render() {
    const {cartList} = this.props
    const {paymetSelection, confirmOrder} = this.state

    const totalAmount = cartList.reduce(
      (acc, red) => acc + red.quantity * red.price,
      0,
    )

    return (
      <div className="payment-popup-container">
        {confirmOrder ? (
          <p className="success-message">
            Your order has been placed successfully
          </p>
        ) : (
          <div className="popup-menu">
            <div className="payment-buttons-container">
              <div className="payment-types-container">
                <div className="payment-type-div">
                  <input
                    type="radio"
                    id="card"
                    className="radio-input"
                    disabled
                  />
                  <label htmlFor="card" className="payment-label">
                    Card
                  </label>
                </div>

                <div className="payment-type-div">
                  <input
                    type="radio"
                    id="netBanking"
                    className="radio-input"
                    disabled
                  />
                  <label htmlFor="netBanking" className="payment-label">
                    Net Banking
                  </label>
                </div>

                <div className="payment-type-div">
                  <input
                    type="radio"
                    id="upi"
                    className="radio-input"
                    disabled
                  />
                  <label htmlFor="upi" className="payment-label">
                    UPI
                  </label>
                </div>

                <div className="payment-type-div">
                  <input
                    type="radio"
                    id="wallet"
                    className="radio-input"
                    disabled
                  />
                  <label htmlFor="wallet" className="payment-label">
                    Wallet
                  </label>
                </div>

                <div className="payment-type-div">
                  <input
                    type="radio"
                    id="cod"
                    name="payment"
                    className="radio-input"
                    onChange={this.onSelectCOD}
                    checked={paymetSelection === 'COD'}
                  />
                  <label htmlFor="cod" className="payment-label">
                    Cash on Delivery
                  </label>
                </div>
              </div>
            </div>
            <div className="payment-cart-summary-container">
              <h1 className="payment-cart-summary-heading">
                Order Total:
                <span className="payment-cart-summary-amount">
                  {' '}
                  Rs {totalAmount}/-
                </span>
              </h1>
              <p className="payment-cart-summary-items">
                {cartList.length} Items in cart
              </p>
              <button
                type="button"
                disabled={paymetSelection !== 'COD'}
                className="confirm-order-button"
                onClick={this.onConfirmOrder}
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default PaymentPopup
