//
function script3032(int0: component, int1: int, int2: unknown_int): void {
    var int3 = comp(-1, 65535);
    if ((int2 == 1)) {
        int3 = comp(909, 13);
    } else if ((int2 == 0)) {
        int3 = comp(909, 32);
    };
    if ((CC_FIND(int0, int1) == 1)) {
        IF_SETHIDE(false, int3);
        IF_SETPOSITION(IF_GETX(int3), CC_GETY(), 0, 0, int3);
    };
    return;
}