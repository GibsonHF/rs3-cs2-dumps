//
function script8075(int0: number, int1: number): number {
    var int2 = script8875(int0);
    if ((int2 == comp(-1, 65535))) {
        return 0;
    };
    if ((IF_HASSUBOVERLAY(int2, int1) == 1)) {
        return 1;
    };
    return 0;
}