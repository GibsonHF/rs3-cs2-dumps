//
function script6598(int0: component, int1: int, int2: int): void {
    var int3 = 0;
    int3 = SCALE(int1, int2, 100);
    if ((IF_FIND(int0) == 1)) {
        int3 = ((96 * int3) / 100);
        CC_SETSIZE(int3, CC_GETHEIGHT(), 0, 0);
    };
    return;
}