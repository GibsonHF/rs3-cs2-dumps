//
function script11223(int0: number, int1: number, int2: number): number {
    CC_CREATE(74645518, 3, int1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETHIDE(0);
    CC_SETSIZE(0, 40, 1, 0);
    CC_SETCOLOUR(0);
    CC_SETTRANS(250);
    CC_SETOP(1, "Select");
    if (((int0 == -1) || (script11226(int0, int2) == 1))) {
        CC_SETHIDE(1);
    };
    return int1;
}