//
function script3032(int0: number, int1: number, int2: number): void {
    var int3 = -1;
    if ((int2 == 1)) {
        int3 = 59572237;
    } else if ((int2 == 0)) {
        int3 = 59572256;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        IF_SETHIDE(0, int3);
        IF_SETPOSITION(IF_GETX(int3), CC_GETY(), 0, 0, int3);
    };
    return;
}