//
function script12615(int0: int, int1: unknown_int): void {
    if (((int0 < 0) || (int0 > 46))) {
        return;
    };
    var int2 = script10405(int0);
    if ((int2 == -1 as struct)) {
        return;
    };
    if ((struct_getparam(int2, 5770) == false)) {
        return;
    };
    var int3 = struct_getparam(int2, 3503);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    if ((int1 == 1)) {
        IF_SETTRANS(1, int3);
    } else {
        IF_SETTRANS(0, int3);
    };
    script8411(int0, 0);
    return;
}