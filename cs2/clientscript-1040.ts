//
function script1040(int0: unknown_int, int1: component, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: int): void {
    script8622(int5, (script8621(int5) - 1));
    if ((script8621(int5) > 0)) {
        return;
    };
    IF_SETONTIMER(callback(), int1);
    script1041(int0, int2, int3, int4, int5);
    return;
}