//
function script12597(int0: number, int1: number, int2: number, int3: number): void {
    if (((((int0 == -1) || (int1 == -1)) || (int2 == -1)) || (int3 == -1))) {
        return;
    };
    var int4 = -1;
    if ((IF_GETHIDE(int1) == 0)) {
        if ((IF_FIND(int0) == 1)) {
            CC_SETONSCROLLWHEEL(callback(script36, int1, int3, -2147483646));
        };
    } else if (((IF_GETHIDE(int2) == 0) && (IF_FIND(int0) == 1))) {
        CC_SETONSCROLLWHEEL(callback(script1701, int2, int3, -2147483646));
    };
    return;
}