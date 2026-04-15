//
function script9370(int0: unknown_int): void {
    var int1 = -1 as cs2enum;
    var int2 = -1;
    var int3 = -1;
    if (((unk10986(0) == 1) && (script9371(varplayer_2047) == 1))) {
        switch (varplayer_2047) {
            case 1: {
                int1 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8896);
                int2 = varbitplayer_8936;
                int3 = varplayer_2039;
                break;
            }
            case 2: {
                int1 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8897);
                int2 = varbitplayer_8937;
                int3 = varplayer_2040;
                break;
            }
            case 3: {
                int1 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8898);
                int2 = varbitplayer_8938;
                int3 = varplayer_2041;
                break;
            }
            case 4: {
                int1 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8899);
                int2 = varbitplayer_8939;
                int3 = varplayer_2042;
                break;
            }
            case 5: {
                int1 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8900);
                int2 = varbitplayer_8940;
                int3 = varplayer_2043;
                break;
            }
            case 6: {
                int1 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8901);
                int2 = varbitplayer_8941;
                int3 = varplayer_2044;
                break;
            }
            case 7: {
                int1 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8902);
                int2 = varbitplayer_8942;
                int3 = varplayer_2045;
                break;
            }
            case 8: {
                int1 = enum_getvalue(0, 26, 3689 as cs2enum, varbitplayer_8903);
                int2 = varbitplayer_8943;
                int3 = varplayer_2046;
                break;
            }
        };
        switch (int0) {
            case 45940841: {
                varbitplayer_20989 = MODULO((varbitplayer_20989 + 1), 2);
                break;
            }
            case 45940833: {
                varbitplayer_20990 = MODULO((varbitplayer_20990 + 1), 2);
                break;
            }
            case 45940825: {
                varbitplayer_20991 = MODULO((varbitplayer_20991 + 1), 2);
                break;
            }
            case 45940817: {
                varbitplayer_20993 = MODULO((varbitplayer_20993 + 1), 2);
                break;
            }
            case 45940809: {
                varbitplayer_20994 = MODULO((varbitplayer_20994 + 1), 2);
                break;
            }
            case 45940801: {
                varbitplayer_20995 = MODULO((varbitplayer_20995 + 1), 2);
                break;
            }
            case 45940793: {
                if (((int1 != -1 as cs2enum) && (int2 > -1))) {
                    varbitplayer_20996 = MODULO((varbitplayer_20996 + 1), 2);
                } else {
                    varbitplayer_20996 = 0;
                };
                break;
            }
            case 45940785: {
                varbitplayer_20997 = MODULO((varbitplayer_20997 + 1), 2);
                if ((varbitplayer_20997 == 0)) {
                    varbitplayer_20998 = 0;
                };
                break;
            }
            case 45940777: {
                if (((varbitplayer_20997 == 1) && (int3 > 0))) {
                    varbitplayer_20998 = MODULO((varbitplayer_20998 + 1), 2);
                } else {
                    varbitplayer_20998 = 0;
                };
                break;
            }
            case 45940769: {
                varbitplayer_20999 = MODULO((varbitplayer_20999 + 1), 2);
                break;
            }
            case 45940761: {
                varbitplayer_21000 = MODULO((varbitplayer_21000 + 1), 2);
                break;
            }
        };
        script9369();
        script9374();
    };
    return;
}