//
function script3932(int0: component, int1: unknown_int): void {
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = AUTOSETUP_DOSETUPSTATUS();
    if ((int2 != 1)) {
        if ((int1 == 3)) {
            script15837(int3);
        };
        return;
    };
    IF_SETONTIMER(callback(), int0);
    varclient_5187 = 1;
    varclient_6503 = 1;
    script2593();
    if ((script6431() == 1)) {
        script17420();
    } else {
        CLIENTOPTION_SET(34, MAP_LANG());
    };
    if ((int1 == 3)) {
        script4142(-1);
    } else if (((((int1 == 1) || (int1 == 2)) || (int1 == 0)) || (int1 == 4))) {
        if ((script6431() == false)) {
            script2596(GETWINDOWMODE(), script2692(), int1);
        } else {
            script2710();
        };
    };
    return;
}