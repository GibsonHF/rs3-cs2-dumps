//
function script14415(int0: component, int1: int, int2: struct, int3: int): void {
    var int4 = -1 as struct;
    var int5 = 1;
    [int4, int5] = script14412(int0, int1, int2, int3, 0, 1);
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETGRAPHIC(script9795(int4, int5));
        CC_SETCOLOUR(struct_getparam(int4, 7448));
    };
    return;
}