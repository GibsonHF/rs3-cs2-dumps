//
function script4803(int0: int): void {
    var int1 = script4819(varbitplayer_6981);
    var int2 = enum_getvalue(0, 0, int1, int0);
    switch (varbitplayer_6981) {
        case 1: {
            if ((int2 != varbitplayer_6985)) {
                varbitplayer_6985 = int2;
                varbitplayer_6986 = 1;
                varbitplayer_6990 = 0;
                varbitplayer_6991 = 0;
                varbitplayer_6992 = 0;
            };
            break;
        }
        case 2: {
            if ((int2 != varbitplayer_6994)) {
                varbitplayer_6994 = int2;
                varbitplayer_6995 = 1;
                varbitplayer_6999 = 0;
                varbitplayer_7000 = 0;
                varbitplayer_7001 = 0;
            };
            break;
        }
        case 3: {
            if ((int2 != varbitplayer_7003)) {
                varbitplayer_7003 = int2;
                varbitplayer_7004 = 1;
                varbitplayer_7008 = 0;
                varbitplayer_7009 = 0;
                varbitplayer_7010 = 0;
            };
            break;
        }
    };
    var int3 = 0;
    if ((script4828(varbitplayer_6981) == 0)) {
        int3 = (28 * (int0 - 1));
        IF_SETHIDE(false, comp(1258, 561));
        IF_SETPOSITION(0, int3, 0, 0, comp(1258, 561));
    };
    script4846(1);
    script4804();
    return;
}