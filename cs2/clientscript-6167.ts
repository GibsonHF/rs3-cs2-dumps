//
function script6167(int0: number, int1: number): void {
    var int2 = 0;
    if ((int0 < 1)) {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script6167, int0, int1), comp(1273, 14));  // rcsiphonxp_shop:items_buy_op_layer
    } else {
        IF_SETONTIMER(callback(), comp(1273, 14));  // rcsiphonxp_shop:items_buy_op_layer
        int2 = (ENUM_GETOUTPUTCOUNT(5838 as cs2enum) / 2);
        while ((int2 < ENUM_GETOUTPUTCOUNT(5838 as cs2enum))) {
            if ((CC_FIND(comp(1273, 14), int2) == 1)) {  // rcsiphonxp_shop:items_buy_op_layer
                CC_SENDTOFRONT();
                var int1 = script6172(int2, int1);
            };
            int2 = (int2 + 1);
        };
        IF_SENDTOFRONT(comp(1273, 18));  // rcsiphonxp_shop:items_tooltip_layer
    };
    return;
}