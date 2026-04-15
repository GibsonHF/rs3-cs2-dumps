//
function script13916(int0: component, int1: struct, int2: unknown_int): void {
    var int3 = 1;
    var int4 = -1 as struct;
    if ((IF_FIND(int0) == 1)) {
        if ((int2 == 1)) {
            int3 = 4;
        } else if ((script13913() == 1)) {
            int3 = 2;
        };
        int4 = script9984(int1, int3);
        CC_SETGRAPHIC(script9795(int4, int3));
        CC_SETCOLOUR(struct_getparam(int4, 7448));
    };
    return;
}