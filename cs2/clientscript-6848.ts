//
function script6848(int0: unknown_int): void {
    var int1 = script6849(IF_GET2DANGLE(comp(1354, 35)));
    var int2 = script6850(int0);
    var int3 = -1;
    if ((int1 == -1)) {
        return;
    };
    if ((int2 == -1)) {
        return;
    };
    if ((int2 == int1)) {
        return;
    };
    if ((((varbitplayer_9429 == 35) && (int1 == 4)) || (((varbitplayer_9429 == 57) && (int1 == 7)) || (((varbitplayer_9429 == 67) && (int1 == 10)) || ((varbitplayer_9429 == 92) && (int1 == 13)))))) {
        printmessage("The sundial's gnomon feels like it's locked in place.");
        return;
    };
    script6843();
    if ((int1 == 0)) {
        if (((int2 >= 1) && (int2 <= 8))) {
            IF_SET2DANGLE(30583, comp(1354, 35));
            int1 = 8;
        } else {
            IF_SET2DANGLE(34588, comp(1354, 35));
            int1 = 9;
        };
    };
    if ((int2 > int1)) {
        if (((int2 - int1) <= 7)) {
            int3 = 0;
        } else {
            int3 = 1;
        };
    } else if ((int2 < int1)) {
        if (((int1 - int2) <= 7)) {
            int3 = 1;
        } else {
            int3 = 0;
        };
    } else if ((int2 == int1)) {
        script6853(int2);
        return;
    };
    IF_SETONTIMER(callback(script6851, CLIENTCLOCK(), int1, int2, int3), 88735779);
    return;
}