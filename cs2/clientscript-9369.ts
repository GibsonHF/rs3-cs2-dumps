//
function script9369(): void {
    var int0 = -1 as cs2enum;
    var int1 = -1;
    var int2 = -1;
    switch (varplayer_2047) {
        case 1: {
            int0 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8896);
            int1 = varbitplayer_8936;
            int2 = varplayer_2039;
            break;
        }
        case 2: {
            int0 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8897);
            int1 = varbitplayer_8937;
            int2 = varplayer_2040;
            break;
        }
        case 3: {
            int0 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8898);
            int1 = varbitplayer_8938;
            int2 = varplayer_2041;
            break;
        }
        case 4: {
            int0 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8899);
            int1 = varbitplayer_8939;
            int2 = varplayer_2042;
            break;
        }
        case 5: {
            int0 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8900);
            int1 = varbitplayer_8940;
            int2 = varplayer_2043;
            break;
        }
        case 6: {
            int0 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8901);
            int1 = varbitplayer_8941;
            int2 = varplayer_2044;
            break;
        }
        case 7: {
            int0 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8902);
            int1 = varbitplayer_8942;
            int2 = varplayer_2045;
            break;
        }
        case 8: {
            int0 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8903);
            int1 = varbitplayer_8943;
            int2 = varplayer_2046;
            break;
        }
    };
    if (((varplayer_2047 > 0) && (varplayer_2047 < 9))) {
        script9368(varbitplayer_20989, 0, 45940842, 45940844, 45940843, 45940845);
        script9368(varbitplayer_20990, 0, 45940834, 45940836, 45940835, 45940837);
        script9368(varbitplayer_20991, 0, 45940826, 45940828, 45940827, 45940829);
        script9368(varbitplayer_20993, 0, 45940818, 45940820, 45940819, 45940821);
        script9368(varbitplayer_20994, 0, 45940810, 45940812, 45940811, 45940813);
        script9368(varbitplayer_20995, 0, 45940802, 45940804, 45940803, 45940805);
        if (((int0 != -1 as cs2enum) && (int1 > 0))) {
            script9368(varbitplayer_20996, 0, 45940794, 45940796, 45940795, 45940797);
        } else {
            script9368(varbitplayer_20996, 1, 45940794, 45940796, 45940795, 45940797);
        };
        script9368(varbitplayer_20997, 0, 45940786, 45940788, 45940787, 45940789);
        if (((varbitplayer_20997 == 1) && (int2 > 0))) {
            script9368(varbitplayer_20998, 0, 45940778, 45940780, 45940779, 45940781);
        } else {
            script9368(0, 1, 45940778, 45940780, 45940779, 45940781);
        };
        script9368(varbitplayer_20999, 0, 45940770, 45940772, 45940771, 45940773);
        script9368(varbitplayer_21000, 0, 45940762, 45940764, 45940763, 45940765);
        if ((varbitplayer_20998 == 1)) {
            IF_SETTEXT(`Broadcast will only be sent to ${enum_getvalue(0, 36, 3725 as cs2enum, int2)}`, 45940782);
        } else {
            IF_SETTEXT("Broadcast will be sent to whole clan.", 45940782);
        };
    };
    return;
}