//
function script12596(int0: number, int1: number, int2: number, int3: number): void {
    if (((((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535))) || (int2 == comp(-1, 65535))) || (int3 == -1))) {
        return;
    };
    var int4 = -1;
    if ((IF_GETHIDE(int1) == false)) {
        stack(int0);
        int4 = (int4 + 1);
        while ((CC_FIND(int4) == 1)) {
            CC_SETONSCROLLWHEEL(callback(script36, int1, int3, -2147483646));
        };
    } else if ((IF_GETHIDE(int2) == false)) {
        stack(int0);
        int4 = (int4 + 1);
        while ((CC_FIND(int4) == 1)) {
            CC_SETONSCROLLWHEEL(callback(script1701, int2, int3, -2147483646));
        };
    };
    return;
}