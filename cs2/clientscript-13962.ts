//
function script13962(int0: component, int1: struct, int2: int): void {
    stack(script9795(int1, 3));
    stack(int0);
    IF_SETGRAPHIC();
    stack(int1);
    stack(7448);
    struct_getparam();
    IF_SETCOLOUR(stack(), int0);
    if ((int2 < 0)) {
        return;
    };
    script13961(int0, int1, false, (1 - int2));
    return;
}