//
function script12753(int0: number, int1: number, string0: string): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int2 = comp(1787, 0);  // cruc_dm_overlay:rank1_name
            int3 = comp(1787, 1);  // cruc_dm_overlay:rank1_kills
            break;
        }
        case 2: {
            int2 = comp(1787, 2);  // cruc_dm_overlay:rank2_name
            int3 = comp(1787, 3);  // cruc_dm_overlay:rank2_kills
            break;
        }
        case 3: {
            int2 = comp(1787, 4);  // cruc_dm_overlay:rank3_name
            int3 = comp(1787, 5);  // cruc_dm_overlay:rank3_kills
            break;
        }
        case 4: {
            int2 = comp(1787, 6);  // cruc_dm_overlay:rank4_name
            int3 = comp(1787, 7);  // cruc_dm_overlay:rank4_kills
            break;
        }
        case 5: {
            int2 = comp(1787, 8);  // cruc_dm_overlay:rank5_name
            int3 = comp(1787, 9);  // cruc_dm_overlay:rank5_kills
            break;
        }
    };
    if ((int2 != comp(-1, 65535))) {
        if ((int1 == 0)) {
            IF_SETTEXT("-", int3);
        } else {
            IF_SETTEXT(inttostring(int1, 10), int3);
        };
        IF_SETTEXT(string0, int2);
    };
    return;
}