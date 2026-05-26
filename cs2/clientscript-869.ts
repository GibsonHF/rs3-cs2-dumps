//
function script869(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number): void {
    var int14 = script718(varclient_1445);
    var int15 = script718(varclient_1446);
    var int16 = script715(int14, varclient_1447, int15, varclient_1448);
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
    IF_SETMODEL(enum_getvalue(0, 31, 1595 as cs2enum, (varclient_1451 / 10)), int10);
    IF_SETMODEL(enum_getvalue(0, 31, 1595 as cs2enum, MODULO(varclient_1451, 10)), int11);
    var int17 = ((varclient_1445 * varclient_1447) + (varclient_1446 * varclient_1448));
    if ((varclient_1451 < int17)) {
        IF_SETGRAPHIC(4567 as graphic, int13);
    } else if ((varclient_1451 > int17)) {
        IF_SETGRAPHIC(4568 as graphic, int13);
    } else {
        IF_SETGRAPHIC(4565 as graphic, int13);
        SOUND_VORBIS_VOLUME(3559 as vorbis, 1, 0, 255);
    };
    if ((int16 == 16776960)) {
        IF_SETGRAPHIC(4565 as graphic, int12);
        SOUND_VORBIS_VOLUME(3559 as vorbis, 1, 10, 255);
    } else {
        IF_SETGRAPHIC(4566 as graphic, int12);
    };
    script2472(int3, int4, int5, int6, int7, int9, varplayer_2608, varplayer_2609, 1110);
    return;
}