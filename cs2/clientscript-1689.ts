//
function script1689(): void {
    varclient_1047 = (varclient_1047 + 1);
    if ((varclient_1047 >= (2 - 1))) {
        varclient_1047 = 0;
        if ((varclient_1045 == 0)) {
            varclient_1046 = MIN((varclient_1046 + 2), 255);
        } else if ((varclient_1045 == 1)) {
            varclient_1046 = MAX((varclient_1046 - 2), 0);
        };
        IF_SETTRANS(varclient_1046, comp(85, 2));
    };
    varclient_1050 = (varclient_1050 + 1);
    if ((varclient_1050 >= (6 - 1))) {
        varclient_1050 = 0;
        if ((varclient_1048 == 0)) {
            varclient_1049 = MIN((varclient_1049 + 1), 255);
            if ((varclient_1049 >= 255)) {
                varclient_1048 = 1;
            };
        } else if (((varclient_1048 == 1) && (varclient_1051 == 1))) {
            varclient_1049 = MAX((varclient_1049 - 3), 192);
            if ((varclient_1049 <= 192)) {
                varclient_1048 = 0;
            };
        } else {
            varclient_1049 = 255;
        };
        IF_SETTRANS(varclient_1049, comp(85, 1));
    };
    return;
}