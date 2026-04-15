//
function script4481(int0: component): void {
    var int1 = script9926(31767 as struct, 6);
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as struct))) {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script4480, int0, 3814, 1), int0);
    var int2 = struct_getparam(int1, 3797);
    var int3 = struct_getparam(int1, 4405);
    if ((int3 != -1)) {
        int1 = int3;
    };
    int1 = script9984(int1, int2);
    var int4 = struct_getparam(int1, 3811);
    if ((int1 != -1 as struct)) {
        if (((IF_FIND(int0) == 1) && (cc_getparam(4523) == 1))) {
            int4 = struct_getparam(int1, 4523);
        };
        IF_SETTEXTFONT(struct_getparam(int1, 3810), int0);
        IF_SETCOLOUR(int4, int0);
    };
    return;
}