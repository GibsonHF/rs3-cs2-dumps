//
function script13193(int0: int): void {
    if ((int0 == 1)) {
        return;
    };
    var int1 = enum_getvalue(0, 73, 8602 as cs2enum, int0);
    if ((int1 == -1 as struct)) {
        return;
    };
    var int2 = struct_getparam(int1, 6397);
    if (((int2 != comp(-1, 65535)) && (IF_FIND(int2) == 1))) {
        cc_setparam(5945, CLIENTCLOCK());
    };
    return;
}