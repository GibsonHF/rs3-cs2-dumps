//
function script16923(int0: component, int1: component): void {
    script16924(int0, int1);
    var int2 = 1;
    var int3 = 0;
    var int4 = 0;
    if ((CC_FIND(int1, 0) == 1)) {
        int3 = CC_GETWIDTH();
        int4 = CC_GETHEIGHT();
        CC_SETPOSITION(0, 0, 0, 0);
    };
    while ((int2 < 9)) {
        if ((CC_FIND(int1, int2) == 1)) {
            CC_SETPOSITION((int3 * MODULO(int2, 3)), (int4 * (int2 / 3)), 0, 0);
        };
        int2 = (int2 + 1);
    };
    return;
}