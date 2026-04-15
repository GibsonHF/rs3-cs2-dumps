//
function script1903(int0: unknown_int, int1: component, int2: unknown_int, int3: unknown_int, int4: int): void {
    script8622(int4, (script8621(int4) - 1));
    if ((script8621(int4) > 0)) {
        return;
    };
    IF_SETONTIMER(callback(), int1);
    script1904(int0, int2, int3, int4);
    return;
}