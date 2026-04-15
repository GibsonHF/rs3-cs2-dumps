//
function script20519(): void {
    var int0 = script20518();
    var int1 = 0;
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
    var int4 = -1 as struct;
    while ((int1 < int3)) {
        int2 = enum_getvalue(0, 0, 7717 as cs2enum, int1);
        int4 = script10405(int2);
        if ((int4 != -1 as struct)) {
            if ((struct_getparam(int4, 3533) == true)) {
                if ((CC_FIND(comp(1475, 3), int2) == 1)) {
                    if (((cc_getparam(7194) == 1) && (int0 == 1))) {
                        script8393(int2, 1);
                    } else {
                        script8393(int2, 0);
                    };
                };
            } else if (((int2 == 1004) && (varbitplayer_60446 == 1))) {
                script8393(int2, int0);
            };
        };
        int1 = (int1 + 1);
    };
    return;
}