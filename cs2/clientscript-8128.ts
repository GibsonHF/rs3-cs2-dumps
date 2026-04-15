//
function script8128(int0: component, int1: int, int2: unknown_int): void {
    var int3 = script11695(int0);
    if ((int3 == 0)) {
        if ((int2 == 1)) {
            CC_SETPOSITION(4, ((((0 - IF_GETHEIGHT(int0)) / 2) + (int1 / 2)) + 2), 1, 1);
        };
        CC_SETSIZE(MAX(0, int1), CC_GETHEIGHT(), 0, 0);
    } else {
        CC_SETSIZE(31, MAX(0, int1), 0, 0);
    };
    return;
}