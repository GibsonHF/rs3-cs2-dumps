//
function script868(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component, int8: component, int9: component, int10: component, int11: component, int12: unknown_int, int13: unknown_int): void {
    var int14 = script718(varclient_1441);
    var int15 = script718(varclient_1442);
    var int16 = script715(int14, varclient_1443, int15, varclient_1444);
    if ((IF_FIND(int0) == 1)) {
        CC_SETPARAM_STRING(718, script4126(int16));
        CC_SETCOLOUR(int16);
    };
    if ((IF_FIND(int8) == 1)) {
        CC_SETPARAM_STRING(718, script4126(int16));
        CC_SETCOLOUR(int16);
    };
    if ((IF_FIND(int1) == 1)) {
        CC_SETPARAM_STRING(718, script4126(int14));
        CC_SETCOLOUR(int14);
    };
    if ((IF_FIND(int2) == 1)) {
        CC_SETPARAM_STRING(718, script4126(int15));
        CC_SETCOLOUR(int15);
    };
    IF_SETMODEL(enum_getvalue(0, 31, 1595 as cs2enum, (varclient_1450 / 10)), int10);
    IF_SETMODEL(enum_getvalue(0, 31, 1595 as cs2enum, MODULO(varclient_1450, 10)), int11);
    var int17 = ((varclient_1441 * varclient_1443) + (varclient_1442 * varclient_1444));
    if ((varclient_1450 < int17)) {
        stack(4567);
        stack(int13);
        IF_SETGRAPHIC();
    } else if ((varclient_1450 > int17)) {
        stack(4568);
        stack(int13);
        IF_SETGRAPHIC();
    } else {
        stack(4565);
        stack(int13);
        IF_SETGRAPHIC();
        SOUND_VORBIS_VOLUME(3559, 1, 0, 255);
    };
    if ((int16 == 16711935)) {
        stack(4565);
        stack(int12);
        IF_SETGRAPHIC();
        SOUND_VORBIS_VOLUME(3559, 1, 10, 255);
    } else {
        stack(4566);
        stack(int12);
        IF_SETGRAPHIC();
    };
    script2472(int3, int4, int5, int6, int7, int9, varplayer_2606, varplayer_2607, 1109 as cs2enum);
    return;
}