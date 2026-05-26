//
function script14413(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = -1;
    var int5 = 1;
    [int4, int5] = script14412(int0, int1, int2, int3, 0, 0);
    if ((int4 == -1)) {
        return;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETGRAPHIC(script9795(int4, int5));
        CC_SETCOLOUR(struct_getparam(int4, 7448));
    };
    return;
}