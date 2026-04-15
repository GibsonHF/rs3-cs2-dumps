//
function script8752(int0: int, int1: boolean): void {
    var int2 = script10405(int0);
    if ((int2 == -1 as struct)) {
        return;
    };
    var int3 = struct_getparam(int2, 3513);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    IF_SETHIDE(int1, int3);
    return;
}