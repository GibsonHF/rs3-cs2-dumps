//
function script477(int0: number): [number, number, number, string] {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var string0 = "";
    switch (varplayer_8004) {
        case 32052: {
            switch (int0) {
                case 1: {
                    [int1, int3, string0, int2] = [varbitplayer_41371, enum_getvalue(0, 1, 12137 as cs2enum, varbitplayer_41371), enum_getvalue(0, 36, 108 as cs2enum, varbitplayer_41371), varbitplayer_41379];
                    break;
                }
                case 2: {
                    [int1, int3, string0, int2] = [varbitplayer_41372, enum_getvalue(0, 1, 12137, varbitplayer_41372), enum_getvalue(0, 36, 108, varbitplayer_41372), varbitplayer_41380];
                    break;
                }
            };
            break;
        }
        case 32053: {
            switch (int0) {
                case 1: {
                    [int1, int3, string0, int2] = [varbitplayer_41373, enum_getvalue(0, 1, 12137, varbitplayer_41373), enum_getvalue(0, 36, 108, varbitplayer_41373), varbitplayer_41381];
                    break;
                }
                case 2: {
                    [int1, int3, string0, int2] = [varbitplayer_41374, enum_getvalue(0, 1, 12137, varbitplayer_41374), enum_getvalue(0, 36, 108, varbitplayer_41374), varbitplayer_41382];
                    break;
                }
            };
            break;
        }
        case 32054: {
            switch (int0) {
                case 1: {
                    [int1, int3, string0, int2] = [varbitplayer_41375, enum_getvalue(0, 1, 12137, varbitplayer_41375), enum_getvalue(0, 36, 108, varbitplayer_41375), varbitplayer_41383];
                    break;
                }
                case 2: {
                    [int1, int3, string0, int2] = [varbitplayer_41376, enum_getvalue(0, 1, 12137, varbitplayer_41376), enum_getvalue(0, 36, 108, varbitplayer_41376), varbitplayer_41384];
                    break;
                }
            };
            break;
        }
        case 32055: {
            switch (int0) {
                case 1: {
                    [int1, int3, string0, int2] = [varbitplayer_41377, enum_getvalue(0, 1, 12137, varbitplayer_41377), enum_getvalue(0, 36, 108, varbitplayer_41377), varbitplayer_41385];
                    break;
                }
                case 2: {
                    [int1, int3, string0, int2] = [varbitplayer_41378, enum_getvalue(0, 1, 12137, varbitplayer_41378), enum_getvalue(0, 36, 108, varbitplayer_41378), varbitplayer_41386];
                    break;
                }
            };
            break;
        }
        default: {
            switch (int0) {
                case 1: {
                    [int1, int3, string0, int2] = [varbitplayer_34961, enum_getvalue(0, 1, 12137, varbitplayer_34961), enum_getvalue(0, 36, 108, varbitplayer_34961), varbitplayer_41367];
                    break;
                }
                case 2: {
                    [int1, int3, string0, int2] = [varbitplayer_34962, enum_getvalue(0, 1, 12137, varbitplayer_34962), enum_getvalue(0, 36, 108, varbitplayer_34962), varbitplayer_41368];
                    break;
                }
                case 3: {
                    [int1, int3, string0, int2] = [varbitplayer_34963, enum_getvalue(0, 1, 12137, varbitplayer_34963), enum_getvalue(0, 36, 108, varbitplayer_34963), varbitplayer_41369];
                    break;
                }
            };
            if ((int1 == 31)) {
                int3 = 1;
            };
            break;
        }
    };
    return [int1, int3, string0, int2];
}