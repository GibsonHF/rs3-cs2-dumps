//
function script6165(int0: number): void {
    IF_SETTEXT("0", comp(1273, 67));  // rcsiphonxp_shop:cost_number
    CC_DELETEALL(comp(1273, 13));  // rcsiphonxp_shop:buy_op_layer
    CC_DELETEALL(comp(1273, 14));  // rcsiphonxp_shop:items_buy_op_layer
    CC_DELETEALL(comp(1273, 15));  // rcsiphonxp_shop:esteem_buy_op_layer
    CC_DELETEALL(comp(1273, 16));  // rcsiphonxp_shop:recolour_buy_op_layer
    varclient_1911 = -1;
    IF_SETHIDE(true, comp(1273, 14));  // rcsiphonxp_shop:items_buy_op_layer
    IF_SETHIDE(true, comp(1273, 15));  // rcsiphonxp_shop:esteem_buy_op_layer
    IF_SETHIDE(true, comp(1273, 16));  // rcsiphonxp_shop:recolour_buy_op_layer
    switch (int0) {
        case 0: {
            script6166();
            break;
        }
        case 1: {
            script6168();
            break;
        }
        case 2: {
            script6169();
            break;
        }
    };
    return;
}