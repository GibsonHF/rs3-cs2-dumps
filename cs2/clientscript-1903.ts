//
function script1903(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    script8622(int4, (script8621(int4) - 1));
    if ((script8621(int4) > 0)) {
        return;
    };
    IF_SETONTIMER(callback(), int1);
    script1904(int0, int2, int3, int4);
    return;
}