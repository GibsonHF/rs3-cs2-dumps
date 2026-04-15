//
function script10542(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = -1 as struct;
    while (((int0 < ENUM_GETOUTPUTCOUNT(13466 as cs2enum)) && (int1 < 3))) {
        int2 = enum_getvalue(0, 73, 13466 as cs2enum, int0);
        if (((varplayer_3079 <= struct_getparam(int2, 6890)) && (varplayer_3079 >= struct_getparam(int2, 6889)))) {
            script10543(int1, int2);
            int1 = (int1 + 1);
        };
        int0 = (int0 + 1);
    };
    return;
}