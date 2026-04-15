//
function script6601(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    if ((IF_FIND(comp(1325, 12)) == 1)) {
        int2 = CC_GETWIDTH();
        int3 = CC_GETX();
    };
    int1 = (((int2 * varbitplayer_9409) / 100) + int3);
    if ((int1 <= int3)) {
        int1 = int3;
    };
    if ((IF_FIND(int0) == 1)) {
        CC_SETPOSITION(int1, CC_GETY(), 0, 0);
    };
    return;
}