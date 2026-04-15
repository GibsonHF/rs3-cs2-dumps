//
function script6593(int0: unknown_int): void {
    var int1 = script20518();
    var int2 = 0;
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
    var int5 = -1 as struct;
    while ((int2 < int4)) {
        int3 = enum_getvalue(0, 0, 7717 as cs2enum, int2);
        int5 = script10405(int3);
        if ((int5 != -1 as struct)) {
            if ((struct_getparam(int5, 3533) == true)) {
                if (((int0 == 1) && (int1 == 1))) {
                    script8393(int3, 1);
                } else {
                    script8393(int3, 0);
                };
            } else if (((int3 == 1004) && (varbitplayer_60446 == 1))) {
                script8393(int3, int1);
            };
        };
        int2 = (int2 + 1);
    };
    return;
}