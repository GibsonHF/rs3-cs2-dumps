//
function script4111(int0: component): void {
    var int1 = IF_GET2DANGLE(int0);
    var int2 = enum_getreverseindex(9, 0, 11270 as cs2enum, int0, 0);
    if ((enum_getvalue(0, 0, 11271 as cs2enum, int2) != -1)) {
        SOUND_VORBIS_VOLUME(script5925(11278 as cs2enum), 1, 0, 140);
    };
    if ((--int1 < 0)) {
        int1 = 49152;
    };
    IF_SET2DANGLE(int1, int0);
    return;
}