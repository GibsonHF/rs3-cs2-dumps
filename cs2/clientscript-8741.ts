//
function script8741(int0: int): void {
    if ((varbitplayer_27169 == 1)) {
        return;
    };
    if ((varbitplayer_38842 == 1)) {
        return;
    };
    varclient_6300 = 0;
    var int1 = varclient_4108;
    var int2 = script2257(int0);
    var int3 = script2257(int1);
    varclient_4167 = 1;
    if ((int2 != int3)) {
        IF_SETONRESIZE(callback(script8883, int0), comp(1477, 26));
        script8885(int0);
        varclient_3474 = 1;
    } else {
        script8884(int0);
    };
    if ((varclient_3477 == true)) {
        varclient_3478 = int0;
        varclient_8266 = int0;
        if ((enum_hasoutput(0, 10781 as cs2enum, int0) == 1)) {
            varclient_8373 = int0;
            script19712();
        };
    } else {
        switch (int0) {
            case 8:
            case 9:
            case 10:
            case 18:
            case 19: {
                break;
            }
            default: {
                varclient_8372 = int0;
                break;
            }
        };
    };
    return;
}