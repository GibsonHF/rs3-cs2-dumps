//
function script11365(): void {
    var int0 = 0;
    if ((item_getparam(varplayer_1831, 5048) == 1)) {
        varbitplayer_675 = 1;
        int0 = 1;
    } else if ((item_getparam(varplayer_1831, 5049) == 1)) {
        varbitplayer_675 = 2;
        int0 = 1;
    } else if ((OC_CATEGORY(varplayer_1831) == 2840 as category)) {
        if ((item_getparam(varplayer_1831, 5898) == 1)) {
            varbitplayer_675 = 4;
        } else if ((item_getparam(varplayer_1831, 5897) == 1)) {
            varbitplayer_675 = 5;
        } else {
            varbitplayer_675 = 3;
        };
        int0 = 1;
    } else {
        varbitplayer_675 = 1;
    };
    script6465(5, varbitplayer_675, 1);
    script10993(varbitplayer_675);
    if (((varplayer_1831 != -1 as obj) && (int0 == 1))) {
        IF_SETONDRAG(callback(script9319, -2147483645, 85918039, 0, 1), 85918058);
        IF_SETMOUSEOVERCURSOR(188, 85918058);
    };
    return;
}