//
function script6168(): void {
    var int0 = 0;
    var int1 = 10;
    IF_SETHIDE(false, comp(1273, 15));  // rcsiphonxp_shop:esteem_buy_op_layer
    script6177(83427343);
    int1 = script6178(int1, 83427343);
    while ((int0 < 10)) {
        if ((CC_FIND(comp(1273, 15), int0) == 1)) {  // rcsiphonxp_shop:esteem_buy_op_layer
            CC_SENDTOFRONT();
        };
        int0 = (int0 + 1);
    };
    return;
}