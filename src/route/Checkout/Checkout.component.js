import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

export default class Checkout extends SourceCheckout {
    

  render() {
      const { checkoutStep } = this.props;
      console.log(checkoutStep)
      return(
          <>

          {super.render()}
          </>
      )
  }

}
