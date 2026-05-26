//
function script7821(int0: number, int1: number, int2: number): number {
    var int3 = script12007(int0);
    if ((CC_FIND(int1, int2) == 1)) {
        if ((int3 == 0)) {
            CC_SETGRAPHIC(struct_getparam(int0, 736));
        } else if ((int3 == 1)) {
            CC_SETGRAPHIC(struct_getparam(int0, 735));
        };
        return int3;
    };
    return 0;
}