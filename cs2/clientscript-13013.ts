//
function script13013(int0: int): [int, int, int] {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    switch (int0) {
        case 1: {
            if ((varbitplayer_8920 == 0)) {
                return [0, 0, 0];
            };
            [int1, int2, int3] = DATE_RUNEDAY_TODATE(varbitplayer_8920);
            break;
        }
        case 2: {
            if ((varbitplayer_8921 == 0)) {
                return [0, 0, 0];
            };
            [int1, int2, int3] = DATE_RUNEDAY_TODATE(varbitplayer_8921);
            break;
        }
        case 3: {
            if ((varbitplayer_8922 == 0)) {
                return [0, 0, 0];
            };
            [int1, int2, int3] = DATE_RUNEDAY_TODATE(varbitplayer_8922);
            break;
        }
        case 4: {
            if ((varbitplayer_8923 == 0)) {
                return [0, 0, 0];
            };
            [int1, int2, int3] = DATE_RUNEDAY_TODATE(varbitplayer_8923);
            break;
        }
        case 5: {
            if ((varbitplayer_8924 == 0)) {
                return [0, 0, 0];
            };
            [int1, int2, int3] = DATE_RUNEDAY_TODATE(varbitplayer_8924);
            break;
        }
        case 6: {
            if ((varbitplayer_8925 == 0)) {
                return [0, 0, 0];
            };
            [int1, int2, int3] = DATE_RUNEDAY_TODATE(varbitplayer_8925);
            break;
        }
        case 7: {
            if ((varbitplayer_8926 == 0)) {
                return [0, 0, 0];
            };
            [int1, int2, int3] = DATE_RUNEDAY_TODATE(varbitplayer_8926);
            break;
        }
        case 8: {
            if ((varbitplayer_8927 == 0)) {
                return [0, 0, 0];
            };
            [int1, int2, int3] = DATE_RUNEDAY_TODATE(varbitplayer_8927);
            break;
        }
    };
    return [int1, (int2 + 1), int3];
}