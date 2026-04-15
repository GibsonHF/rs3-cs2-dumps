//
function script9633(int0: component, int1: int, int2: int, int3: boolean): int {
    CC_SETHIDE(int3);
    CC_SETPOSITION(CC_GETX(), (CC_GETY() + int2), 0, 0);
    var int4 = 1;
    while (((int4 < 5) && (CC_FIND(int0, (int1 + int4)) == 1))) {
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
}