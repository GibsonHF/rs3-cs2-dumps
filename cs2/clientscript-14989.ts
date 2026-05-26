//
function script14989(): void {
    if ((script6431() == 0)) {
        return;
    };
    if (((varclient_6791 == false) || ((varbitplayer_1899 == 0) && (varbitplayer_27003 == 0)))) {
        varclient_6515 = 0;
        IF_SETONTIMER(callback(), 96797575);
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
            int2 = IF_GETWIDTH(96796698);
            int3 = IF_GETHEIGHT(96796698);
        };
        IF_SETSIZE(int2, int3, 0, 0, 96797575);
        IF_SETPOSITION(int0, int1, 0, 0, 96797575);
        return;
    };
    varclient_6515 = 1;
    if ((IF_FIND(96797576) == 1)) {
        CC_SETTRANS(255);
    };
    if ((IF_FIND(96797577) == 1)) {
        CC_SETTRANS(255);
    };
    if ((IF_FIND(96797578) == 1)) {
        CC_SETTRANS(255);
    };
    if ((IF_FIND(96797579) == 1)) {
        CC_SETTRANS(255);
    };
    IF_SETHIDE(0, 96797575);
    IF_SETONTIMER(callback(script5708, 96797575, 0), 96797575);
    return;
}