//
function script8258(int0: struct, int1: int): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    var int2 = -1;
    if ((enum_getreversecount(73, 7716 as cs2enum, int0) > 0)) {
        int2 = enum_getreverseindex(73, 0, 7716 as cs2enum, int0, 0);
    };
    var int3 = -1;
    if ((struct_getparam(int0, 3539) == 1)) {
        int3 = script12590(cc_getparam(3540), script12616(int0), int1, cc_getparam(8099));
        if ((int3 != -1)) {
            CC_SETTRANS(int3);
        };
    };
    return;
}