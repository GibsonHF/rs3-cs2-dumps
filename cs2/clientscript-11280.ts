//
function script11280(int0: mapelement): void {
    var int1 = mec_getparam(int0, 4147);
    var int2 = enum_getvalue(0, 22, 9962 as cs2enum, int1);
    var int3 = mec_getparam(int0, 4150);
    if ((((int1 < 1) || (int1 > 33)) || (int3 != 1))) {
        return;
    };
    script11281(int1, int2);
    return;
}