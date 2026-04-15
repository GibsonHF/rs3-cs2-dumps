//
function script11437(int0: int, int1: component, int2: component): void {
    var int3 = 0;
    if ((int0 > 20000000)) {
        var int0 = 0;
    };
    if ((script133(pos(0,25,172,2,0), pos(3,42,189,62,63), COORD()) == 0)) {
        IF_SETMODELANGLE(0, 0, 512, MODULO((IF_GETMODELANGLE_Y(int1) - 30), 2047), 40, 275, int1);
        IF_SETHIDE(true, int2);
    } else if (((COORDY(COORD()) - COORDY(varclient_1323)) > 0)) {
        IF_SETMODELANGLE(0, 0, 512, MODULO((IF_GETMODELANGLE_Y(int1) + 30), 2047), 40, 275, int1);
        IF_SETHIDE(true, int2);
    } else {
        int3 = script3500(COORDX(COORD()), COORDZ(COORD()), COORDX(varclient_1323), COORDZ(varclient_1323));
        if ((int3 == -1)) {
            IF_SETMODELANGLE(0, 0, 0, 0, 40, 275, int1);
            IF_SETHIDE(false, int2);
        } else {
            IF_SETMODELANGLE(0, 0, 512, ((2047 * int3) / 65535), 40, 275, int1);
            IF_SETHIDE(true, int2);
        };
    };
    IF_SETONTIMER(callback(script11437, (int0 + 1), int1, int2), int1);
    return;
}