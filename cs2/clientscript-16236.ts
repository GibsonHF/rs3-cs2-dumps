//
function script16236(int0: int, int1: component, int2: int, int3: int, int4: unknown_int, string0: string): void {
    if ((CC_FIND(int1, int2) == 1)) {
        CC_SETONTIMER(callback());
        if ((IF_GETSCROLLX(int1) != int4)) {
            return;
        };
        if ((int3 > 0)) {
            var int3 = (int3 - 1);
            CC_SETONTIMER(callback(script16236, string0, int0, int1, int2, int3, int4));
            return;
        };
    };
    script426(string0, int1, int2, int0);
    return;
}