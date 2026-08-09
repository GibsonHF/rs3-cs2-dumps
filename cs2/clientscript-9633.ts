//
function script9633(int0: number, int1: number, int2: number, int3: number): number {
    CC_SETHIDE(int3);
    CC_SETPOSITION(CC_GETX(), (CC_GETY() + int2), 0, 0);
    var int4 = 1;
    while ((int4 < 5)) {
        if ((CC_FIND(int0, (int1 + int4)) == 1)) {
            CC_SETHIDE(int3);
            CC_SETPOSITION(CC_GETX(), (CC_GETY() + int2), 0, 0);
            int4 = (int4 + 1);
        };
        if ((int3 == true)) {
            var int2 = ((int2 - 18) - 5);
        } else {
            int2 = ((int2 + 18) + 5);
        };
        return int2;
    };
    if ((int3 == true)) {
        int2 = ((int2 - 18) - 5);
    } else {
        int2 = ((int2 + 18) + 5);
    };
    return int2;
}