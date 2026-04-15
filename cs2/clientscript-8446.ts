//
function script8446(int0: component, int1: int): void {
    if ((script6431() == false)) {
        return;
    };
    var int2 = MIN(script13431(int1), script13434(int1));
    var int3 = script13432(int1);
    var int4 = -1;
    var int5 = script13433(int1);
    var int6 = ENUM_GETOUTPUTCOUNT(struct_getparam(int5, 6583));
    if ((int3 == (int6 - 1))) {
        int4 = enum_getvalue(0, 0, struct_getparam(int5, 6583), int3);
    } else {
        int4 = enum_getvalue(0, 0, struct_getparam(int5, 6583), (int3 + 1));
    };
    script426(`${struct_getparam(int5, 6565)}<br>${inttostring((int2 / 10), 10)}/${inttostring((int4 / 10), 10)}`, int0, -1, 0);
    return;
}