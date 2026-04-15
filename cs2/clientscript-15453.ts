//
function script15453(int0: component, int1: inv, int2: int, int3: int): void {
    var int4 = 0;
    var int5 = INV_SIZE(int1);
    var int6 = 36;
    var int7 = 32;
    var int8 = 28;
    var int9 = 0;
    var int10 = 0;
    CC_DELETEALL(int0);
    if ((int2 > 1)) {
        int6 = (int6 + ((IF_GETWIDTH(int0) - (int6 * int2)) / (int2 - 1)));
    };
    if ((int3 > 1)) {
        int7 = (int7 + ((IF_GETHEIGHT(int0) - (int7 * int3)) / (int3 - 1)));
    };
    while ((int4 < int5)) {
        if ((INV_GETVAR(int1, int4, 48837) == 1)) {
            CC_CREATE(int0, 5, int10++);
            CC_SETSIZE(8, 8, 0, 0);
            CC_SETPOSITION(((int6 * MODULO(int4, int2)) + int8), ((int7 * (int4 / int2)) + int9), 0, 0);
            CC_SETGRAPHIC(15217 as graphic);
        };
        int4 = (int4 + 1);
    };
    return;
}