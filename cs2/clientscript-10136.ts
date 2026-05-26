//
function script10136(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    if ((int0 == 15204475)) {
        if ((varbitclient_23068 == 1)) {
            IF_SETHIDE(0, int0);
            IF_SETHIDE(1, int1);
            return;
        };
        IF_SETHIDE(1, int0);
        IF_SETHIDE(0, int1);
    } else if ((int0 == 15204489)) {
        if ((varbitclient_23069 == 1)) {
            IF_SETHIDE(0, int0);
            IF_SETHIDE(1, int1);
            IF_SETHIDE(0, 15204481);
        } else {
            IF_SETHIDE(1, int0);
            IF_SETHIDE(0, int1);
            IF_SETHIDE(1, 15204481);
            script10150(0);
        };
    } else if ((int0 == 15204533)) {
        if ((varbitclient_23250 > 0)) {
            int3 = 1;
        };
        if ((varbitclient_23249 == 1)) {
            IF_SETHIDE(0, int0);
            IF_SETHIDE(1, int1);
            TTV_WEBCAM_FLIP(int3, 1);
            return;
        };
        IF_SETHIDE(1, int0);
        IF_SETHIDE(0, int1);
        TTV_WEBCAM_FLIP(int3, 0);
    } else if ((int0 == 15204537)) {
        if ((varbitclient_23249 > 0)) {
            int2 = 1;
        };
        if ((varbitclient_23250 == 1)) {
            IF_SETHIDE(0, int0);
            IF_SETHIDE(1, int1);
            TTV_WEBCAM_FLIP(1, int2);
            return;
        };
        IF_SETHIDE(1, int0);
        IF_SETHIDE(0, int1);
        TTV_WEBCAM_FLIP(0, int2);
    };
    return;
}