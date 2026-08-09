//[clientscript,trail_compass_timer]
function script3499(int0: number, int1: number, int2: number): void {
    if ((int0 > 20000000)) {
        var int0 = 0;
    };
    int0 = (int0 + 1);
    IF_SETONTIMER(callback(script3499, int0, int1, int2), int1);
    IF_SETHIDE(true, int2);
    if ((varclient_1323 == pos(0,0,0,0,0))) {
        IF_SETMODELANGLE(0, 0, 512, MODULO((IF_GETMODELANGLE_Y(int1) + 30), 2047), 40, 275, int1);
        return;
    };
    if ((COORDZ(COORD()) > 6400)) {
        IF_SETMODELANGLE(0, 0, 512, MODULO((IF_GETMODELANGLE_Y(int1) - 30), 2047), 40, 275, int1);
        return;
    };
    if ((((COORDY(COORD()) - COORDY(varclient_1323)) > 0) && (script133(576719424, 578800319, COORD()) == 0))) {
        IF_SETMODELANGLE(0, 0, 512, MODULO((IF_GETMODELANGLE_Y(int1) + 30), 2047), 40, 275, int1);
        return;
    };
    if ((((((script133(32508352, 869257279, COORD()) == 0) && (script133(20977024, 829412991, COORD()) == 0)) && (script133(30411840, 836750463, COORD()) == 0)) && (script133(576719424, 578800319, COORD()) == 0)) && (script133(85985280, 631228991, COORD()) == 0))) {
        if ((MODULO(int0, 68) > 34)) {
            IF_SETMODELANGLE(0, 0, 512, MODULO((IF_GETMODELANGLE_Y(int1) - 30), 2047), 40, 275, int1);
        } else {
            IF_SETMODELANGLE(0, 0, 512, MODULO((IF_GETMODELANGLE_Y(int1) + 30), 2047), 40, 275, int1);
        };
        return;
    };
    var int3 = COORDX(COORD());
    var int4 = COORDZ(COORD());
    [int3, int4] = script4005(int3, int4);
    var int5 = COORDX(varclient_1323);
    var int6 = COORDZ(varclient_1323);
    [int5, int6] = script12909(int5, int6);
    var int7 = script3500(int3, int4, int5, int6);
    if ((int7 == -1)) {
        IF_SETMODELANGLE(0, 0, 0, 0, 40, 275, int1);
        script16641(int2);
    } else {
        IF_SETMODELANGLE(0, 0, 512, ((2047 * int7) / (16384 * 4)), 40, 275, int1);
    };
    return;
}