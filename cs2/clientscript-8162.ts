//
function script8162(int0: int): void {
    var int1 = script10405(int0);
    if ((int1 == -1 as struct)) {
        return;
    };
    var int2 = struct_getparam(int1, 3503);
    if ((int2 == comp(-1, 65535))) {
        return;
    };
    IF_SETHIDE(true, int2);
    script8311(int0);
    script8157(int0);
    script8368(int0, struct_getparam(int1, 3506), 0, 1);
    script13842(int0);
    return;
}