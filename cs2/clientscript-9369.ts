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
        script9368(varbitplayer_20989, 0, comp(701, 106), comp(701, 108), comp(701, 107), comp(701, 109));
        script9368(varbitplayer_20990, 0, comp(701, 98), comp(701, 100), comp(701, 99), comp(701, 101));
        script9368(varbitplayer_20991, 0, comp(701, 90), comp(701, 92), comp(701, 91), comp(701, 93));
        script9368(varbitplayer_20993, 0, comp(701, 82), comp(701, 84), comp(701, 83), comp(701, 85));
        script9368(varbitplayer_20994, 0, comp(701, 74), comp(701, 76), comp(701, 75), comp(701, 77));
        script9368(varbitplayer_20995, 0, comp(701, 66), comp(701, 68), comp(701, 67), comp(701, 69));
        if (((int0 != -1 as cs2enum) && (int1 > 0))) {
            script9368(varbitplayer_20996, 0, comp(701, 58), comp(701, 60), comp(701, 59), comp(701, 61));
        } else {
            script9368(varbitplayer_20996, 1, comp(701, 58), comp(701, 60), comp(701, 59), comp(701, 61));
        };
        script9368(varbitplayer_20997, 0, comp(701, 50), comp(701, 52), comp(701, 51), comp(701, 53));
        if (((varbitplayer_20997 == 1) && (int2 > 0))) {
            script9368(varbitplayer_20998, 0, comp(701, 42), comp(701, 44), comp(701, 43), comp(701, 45));
        } else {
            script9368(0, 1, comp(701, 42), comp(701, 44), comp(701, 43), comp(701, 45));
        };
        script9368(varbitplayer_20999, 0, comp(701, 34), comp(701, 36), comp(701, 35), comp(701, 37));
        script9368(varbitplayer_21000, 0, comp(701, 26), comp(701, 28), comp(701, 27), comp(701, 29));
        if ((varbitplayer_20998 == 1)) {
            IF_SETTEXT(`Broadcast will only be sent to ${enum_getvalue(0, 36, 3725 as cs2enum, int2)}`, comp(701, 46));
        } else {
            IF_SETTEXT("Broadcast will be sent to whole clan.", comp(701, 46));
        };
    };
    return;
}