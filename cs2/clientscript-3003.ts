//
function script3003(int0: unknown_int): void {
    var int1 = comp(1552, 8);
    var int2 = comp(1552, 17);
    var int3 = comp(1552, 35);
    var int4 = comp(1552, 26);
    var int5 = script10405(17);
    var int6 = comp(-1, 65535);
    if ((int5 != -1 as struct)) {
        int6 = struct_getparam(int5, 3505);
    };
    if (((int6 != comp(-1, 65535)) && (IF_HASSUBOVERLAY(int6, 1669 as overlayinterface) == 1))) {
        int1 = comp(1669, 10);
        int2 = comp(1669, 19);
        int3 = comp(1669, 28);
        int4 = comp(1669, 37);
    };
    if ((int0 == 1)) {
        script8844(1, 16, 8, int1, -1);
        script8844(1, 17, 8, int2, -1);
        script8844(1, 18, 8, int3, -1);
        script8844(1, 19, 8, int4, -1);
    } else {
        IF_SETOPKEY(1, 0, 0, int1);
        IF_SETOPKEY(1, 0, 0, int2);
        IF_SETOPKEY(1, 0, 0, int3);
        IF_SETOPKEY(1, 0, 0, int4);
    };
    return;
}