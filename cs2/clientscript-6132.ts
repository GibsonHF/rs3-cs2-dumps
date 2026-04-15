//
function script6132(): void {
    if ((script6431() == false)) {
        if ((varclient_1892 == 0)) {
            return;
        };
        varclient_1892 = (varclient_1892 - 1);
        if ((varclient_1892 == 0)) {
            IF_SETHIDE(true, comp(1270, 14));
            return;
        };
    };
    if ((varclient_1893 == 0)) {
        IF_SETHIDE(false, comp(1270, 14));
    };
    IF_SETPOSITION((varclient_1889 - (IF_GETWIDTH(comp(1270, 14)) / 2)), (varclient_1890 - (IF_GETHEIGHT(comp(1270, 14)) / 2)), 0, 0, comp(1270, 14));
    var int0 = 9999;
    if ((IF_GETHIDE(comp(1270, 67)) == false)) {
        int0 = MIN(script6133(varclient_1889, varclient_1890, varclient_1894, varclient_1895), int0);
    };
    if ((IF_GETHIDE(comp(1270, 68)) == false)) {
        int0 = MIN(script6133(varclient_1889, varclient_1890, varclient_1896, varclient_1897), int0);
    };
    if ((IF_GETHIDE(comp(1270, 69)) == false)) {
        int0 = MIN(script6133(varclient_1889, varclient_1890, varclient_1898, varclient_1899), int0);
    };
    var int1 = 4;
    if ((int0 < 400)) {
        int1 = 12;
    } else if ((int0 < 1600)) {
        int1 = 8;
    };
    IF_SETONTIMER(callback(script6134, int1), comp(1270, 14));
    return;
}