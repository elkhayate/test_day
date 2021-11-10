import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import ProgressBar from 'Component/ProgressBar';
export default class Checkout extends SourceCheckout {


    renderBar(val) {
        return <ProgressBar steps = {this.stepMap} check = {val}/>
    }

    render() {
        const { checkoutStep } = this.props;
        return(
            <>
            {this.renderBar(checkoutStep)}
            {super.render()}
            </>
        )
    }

}
