//
function script14989(): void {
    if ((script6431() == false)) {
        return;
    };
    if (((varclient_6791 == false) || ((varbitplayer_1899 == 0) && (varbitplayer_27003 == 0)))) {
        varclient_6515 = 0;
        IF_SETONTIMER(callback(), comp(1477, 903));
        IF_SETHIDE(1, 96797575);
        return;
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    if ((varclient_6515 == 1)) {
        [int0, int1, int2, int3] = UNKNOWN_COMMAND_126();
        if ((varclient_6403 == 0)) {
            int2 = IF_GETWIDTH(comp(1477, 26));
            int3 = IF_GETHEIGHT(comp(1477, 26));
        };
        IF_SETSIZE(int2, int3, 0, 0, comp(1477, 903));
        IF_SETPOSITION(int0, int1, 0, 0, comp(1477, 903));
        return;
    };
    varclient_6515 = 1;
    if ((IF_FIND(comp(1477, 904)) == 1)) {
        CC_SETTRANS(255);
    };
    if ((IF_FIND(comp(1477, 905)) == 1)) {
        CC_SETTRANS(255);
    };
    if ((IF_FIND(comp(1477, 906)) == 1)) {
        CC_SETTRANS(255);
    };
    if ((IF_FIND(comp(1477, 907)) == 1)) {
        CC_SETTRANS(255);
    };
    IF_SETHIDE(false, comp(1477, 903));
    IF_SETONTIMER(callback(script5708, 96797575, 0), comp(1477, 903));
    return;
}