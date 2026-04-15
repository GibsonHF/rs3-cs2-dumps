//
function script14(int0: int): int {
    var int1 = struct_getparam(varplayer_5148, 4842);
    if ((int1 == -1 as cs2enum)) {
        return 0;
    };
    var int2 = 1;
    var int3 = 0;
    while ((int2 < int0)) {
        if ((enum_getvalue(0, 73, int1, int3) == -1 as struct)) {
            int2 = (int2 + 1);
        };
        int3 = (int3 + 1);
    };
    var int4 = 1;
    while ((enum_getvalue(0, 73, int1, (int3 + int4)) != -1 as struct)) {
        int4 = (int4 + 1);
    };
    return int4;
}