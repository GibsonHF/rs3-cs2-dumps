//
function script1492(): void {
    var int0 = -1 as obj;
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(15290 as cs2enum);
    var int3 = 0;
    while ((int3 < int2)) {
        int0 = enum_getvalue(0, 33, 15290 as cs2enum, int3);
        int1 = MIN(INV_GETNUM(866 as inv, int3), 255);
        switch (int0) {
            case 48243: {
                varbitplayer_44386 = int1;
                break;
            }
            case 211: {
                varbitplayer_44377 = int1;
                break;
            }
            case 37975: {
                varbitplayer_44379 = int1;
                break;
            }
            case 215: {
                varbitplayer_44381 = int1;
                break;
            }
            case 217: {
                varbitplayer_44383 = int1;
                break;
            }
            case 21626: {
                varbitplayer_44385 = int1;
                break;
            }
            case 199: {
                varbitplayer_44368 = int1;
                break;
            }
            case 205: {
                varbitplayer_44371 = int1;
                break;
            }
            case 209: {
                varbitplayer_44375 = int1;
                break;
            }
            case 213: {
                varbitplayer_44378 = int1;
                break;
            }
            case 2485: {
                varbitplayer_44382 = int1;
                break;
            }
            case 201: {
                varbitplayer_44370 = int1;
                break;
            }
            case 207: {
                varbitplayer_44372 = int1;
                break;
            }
            case 3051: {
                varbitplayer_44380 = int1;
                break;
            }
            case 203: {
                varbitplayer_44369 = int1;
                break;
            }
            case 3049: {
                varbitplayer_44373 = int1;
                break;
            }
            case 219: {
                varbitplayer_44384 = int1;
                break;
            }
            case 14836: {
                varbitplayer_44376 = int1;
                break;
            }
            case 12174: {
                varbitplayer_44374 = int1;
                break;
            }
            default: {
                script12478(`Invalid herb oc_debugname`);
                break;
            }
        };
        int3 = (int3 + 1);
    };
    return;
}