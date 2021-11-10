import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import ProgressBar from 'Component/ProgressBar';
export default class Checkout extends SourceCheckout {
    
    renderBar() {
        return <ProgressBar />
    }

    render() {
        const { checkoutStep } = this.props;
        return(
            <>
            {this.renderBar()}
            {super.render()}
            </>
        )
    }

}
