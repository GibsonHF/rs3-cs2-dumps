//
function script16013(int0: int, int1: unknown_int, int2: int, int3: int, int4: unknown_int): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16013, int0, int1, int2, int3, int4), 31784973);
        return;
    };
    script16080(int1, int2, int3, int4);
    script16728(int2, int3);
    return;
}