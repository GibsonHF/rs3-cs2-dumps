//
function script8776(): void {
    CAM2_SETLINEARMOVEMENTMODE(2);
    var int0 = 0;
    if ((script6431() == true)) {
        int0 = (100 - SCALE((varclient_1971 - 1860), (9000 - 1860), 100));
    } else if ((varbitplayer_19949 == 2)) {
        int0 = (100 - SCALE((varclient_1971 - 1350), (12000 - 1350), 100));
    } else {
        int0 = (100 - SCALE((varclient_1971 - 1860), (7600 - 1860), 100));
    };
    var int1 = (70 + SCALE(70, 80, int0));
    var int2 = (1617 + SCALE(1617, 1000, int0));
    CAM2_SETSPRINGPROPERTIES(int1, int1, int1, int2);
    return;
}