//
function script8769(int0: int): int {
    var int1 = varclient_1971;
    var int2 = 0;
    if (((varbitplayer_19949 != 1) && (varbitplayer_19949 != 3))) {
        return int1;
    };
    if ((varbitplayer_19949 == 1)) {
        int2 = SCALE((int0 - 500), (3000 - 500), 1000000);
        int1 = (varclient_1971 + SCALE(varclient_1971, 1870000, int2));
        varclient_1971 = MAX(MIN(varclient_1971, 5725), 1860);
    } else {
        int2 = SCALE((int0 - 10), (4090 - 10), 1000000);
        int1 = (varclient_1971 + SCALE(varclient_1971, 1870000, int2));
        if ((script6431() == true)) {
            varclient_1971 = MAX(MIN(varclient_1971, 9000), 1350);
        } else {
            varclient_1971 = MAX(MIN(varclient_1971, 12000), 1350);
        };
    };
    return int1;
}