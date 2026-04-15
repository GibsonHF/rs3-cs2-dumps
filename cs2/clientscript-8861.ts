//
function script8861(int0: int, int1: int): void {
    var int2 = script10405(int0);
    var int3 = script10405(int1);
    if (((int2 == -1 as struct) || (int3 == -1 as struct))) {
        return;
    };
    var string0 = struct_getparam(int3, 3493);
    switch (int1) {
        case 5: {
            string0 = "Ability Book";
            break;
        }
        case 32: {
            if ((varplayer_12314 > 0)) {
                string0 = "Leagues: CATALYST";
            };
            break;
        }
    };
    script7040(int0, string0, struct_getparam(int3, 3495));
    script8863(int0, string0, 0);
    return;
}