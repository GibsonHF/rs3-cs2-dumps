//
function script13962(int0: number, int1: number, int2: number): void {
    IF_SETGRAPHIC(script9795(int1, 3), int0);
    IF_SETCOLOUR(struct_getparam(int1, 7448), int0);
    if ((int2 < 0)) {
        return;
    };
    script13961(int0, int1, 0, (1 - int2));
    return;
}