//
function script893(): void {
    if ((varclient_112 < 10)) {
        varclient_112 = (varclient_112 + 1);
        return;
    };
    varclient_112 = 0;
    var int0 = (20 - 0);
    var int1 = (80 - 0);
    var int2 = (int1 / int0);
    var int3 = (varbitplayer_14325 * int2);
    if ((varclient_111 < int3)) {
        varclient_111 = (varclient_111 + 1);
    } else if ((varclient_111 > int3)) {
        varclient_111 = (varclient_111 - 1);
    };
    if ((varclient_114 == 0)) {
        if ((varclient_113 > 0)) {
            varclient_113 = (varclient_113 - 1);
        } else {
            varclient_114 = 1;
        };
    } else if ((varclient_113 < 4)) {
        varclient_113 = (varclient_113 + 1);
    } else {
        varclient_114 = 0;
    };
    var int4 = (varclient_111 + (varclient_113 + 2));
    var int5 = (1024 / int1);
    int4 = (int4 * int5);
    int4 = (int4 + 512);
    int4 = (2048 - int4);
    IF_SETMODELANGLE(0, 0, 0, 0, int4, 388, comp(717, 4));
    var int6 = (enum_getvalue(0, 0, 1422 as cs2enum, varbitplayer_14321) * (1024 / int0));
    int6 = (int6 + 512);
    int6 = (2048 - int6);
    IF_SETMODELANGLE(0, 0, 0, 0, int6, 365, comp(717, 3));
    return;
}