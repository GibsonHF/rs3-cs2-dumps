//
function script10136(int0: component, int1: component): void {
    var int2 = 0;
    var int3 = 0;
    if ((int0 == comp(232, 123))) {
        if ((varbitclient_23068 == 1)) {
            IF_SETHIDE(false, int0);
            IF_SETHIDE(true, int1);
            return;
        };
        IF_SETHIDE(true, int0);
        IF_SETHIDE(false, int1);
    } else if ((int0 == comp(232, 137))) {
        if ((varbitclient_23069 == 1)) {
            IF_SETHIDE(false, int0);
            IF_SETHIDE(true, int1);
            IF_SETHIDE(false, comp(232, 129));
        } else {
            IF_SETHIDE(true, int0);
            IF_SETHIDE(false, int1);
            IF_SETHIDE(true, comp(232, 129));
            script10150(0);
        };
    } else if ((int0 == comp(232, 181))) {
        if ((varbitclient_23250 > 0)) {
            int3 = 1;
        };
        if ((varbitclient_23249 == 1)) {
            IF_SETHIDE(false, int0);
            IF_SETHIDE(true, int1);
            TTV_WEBCAM_FLIP(int3, 1);
            return;
        };
        IF_SETHIDE(true, int0);
        IF_SETHIDE(false, int1);
        TTV_WEBCAM_FLIP(int3, 0);
    } else if ((int0 == comp(232, 185))) {
        if ((varbitclient_23249 > 0)) {
            int2 = 1;
        };
        if ((varbitclient_23250 == 1)) {
            IF_SETHIDE(false, int0);
            IF_SETHIDE(true, int1);
            TTV_WEBCAM_FLIP(1, int2);
            return;
        };
        IF_SETHIDE(true, int0);
        IF_SETHIDE(false, int1);
        TTV_WEBCAM_FLIP(0, int2);
    };
    return;
}