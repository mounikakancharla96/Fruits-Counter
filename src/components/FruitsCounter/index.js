import {Component} from 'react'
import './index.css'

class FruitCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  mango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  banana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">
            Bob ate
            <span className="fruit-counter"> {mangoes}</span>mangoes
            <span className="fruit-counter"> {bananas}</span>bananas
          </h1>
          <div className="fruits">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button type="button" className="button" onClick={this.mango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button type="button" className="button" onClick={this.banana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
