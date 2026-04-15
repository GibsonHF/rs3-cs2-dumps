//
function script12610(): void {
    if ((IF_FIND(comp(1477, 27)) == 1)) {
        if ((cc_getparam(5769) != -1 as struct)) {
            return;
        };
        cc_setparam(5769, 33700);
    };
    var int0 = -1;
    var int1 = -1 as struct;
    var int2 = comp(-1, 65535);
    var int3 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
    var int4 = -1;
    while ((++int4 < int3)) {
        int0 = enum_getvalue(0, 0, 7717 as cs2enum, int4);
        int1 = script10405(int0);
        if ((int1 != -1 as struct)) {
            int2 = struct_getparam(int1, 3505);
            if (((int2 != comp(-1, 65535)) && (IF_FIND(int2) == 1))) {
                cc_setparam(5769, int1);
            };
        };
    };
    return;
}