import React, { Component } from "react"
// class TopicBrowser extends Component {
//     render() {
//         return <section> Hello my name is Slim Shady</section>
//     }
// }
// export default TopicBrowser
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

class TopicBrowser extends Component {
    render() {
      return (
        <div>
          <EvenAndOdd />
          <FilterObject />
          <FilterString />
          <Palindrome />
          <Sum />
        </div>
      )
    }
  }
  export default TopicBrowser