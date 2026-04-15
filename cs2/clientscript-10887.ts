//
function script10887(int0: component, int1: struct): void {
    var int2 = script11095(int1);
    var int3 = 0;
    if ((CC_FIND[1](int0, 2) == 1)) {
        if ((int2 == true)) {
            CC_SETCOLOUR[1](5936665);
        } else {
            CC_SETCOLOUR[1](13369344);
        };
        if (((struct_getparam(int1, 8112) == true) && (struct_getparam(int1, 7216) == true))) {
            int3 = (script11073(int1) - CLIENTCLOCK());
            if (((int3 > 0) && (int3 <= 500))) {
                CC_SETTRANS[1](script11318(int1));
            } else {
                CC_SETTRANS[1](0);
            };
        } else {
            CC_SETTRANS[1](0);
        };
    };
    return;
}