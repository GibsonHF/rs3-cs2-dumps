//
function script9277(int0: int, int1: int, int2: int, int3: int): void {
    if (((CAM2_GETCONTROLMODE() != 1) || (int0 == 0))) {
        IF_SETONTIMER(callback(), comp(1477, 40));
        varclient_3824 = 0;
        return;
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = varclient_1971;
    var int7 = 0;
    var int8 = 0;
    if ((CAM2_GETLOOKATMODE() != 1)) {
        CAM2_SETLOOKATMODE(1);
    };
    if ((CAM2_GETPOSITIONMODE() != 1)) {
        CAM2_SETPOSITIONMODE(1);
    };
    [int4, int5] = CAM2_GETPOSITIONENTITY_ANGLEOFFSETS();
    if ((int2 > 0)) {
        int7 = (int5 + (16284 - int2));
        int8 = ((16284 - int5) + int2);
        if (((int5 < int2) && (int7 < (16284 / 2)))) {
            int5 = (int5 - (int7 / int0));
        } else if (((int5 > int2) && (int8 < (16284 / 2)))) {
            int5 = (int5 + (int8 / int0));
        } else {
            int5 = (int5 - ((int5 - int2) / int0));
        };
        int5 = script686(MODULO(int5, 16284), 16284);
    };
    if ((int1 > 0)) {
        int4 = (int4 - ((int4 - int1) / int0));
    };
    if ((int3 > 0)) {
        int6 = (int6 - ((int6 - int3) / int0));
    };
    varclient_1971 = int6;
    varclient_5114 = int4;
    varclient_5115 = int5;
    CAM2_SETPOSITIONENTITY_PLAYER(0, 0, script8769(int1), int4, int5, 0, 0, 100);
    IF_SETONTIMER(callback(script648, (int0 - 1), int1, int2, int3), 96796712);
    return;
}