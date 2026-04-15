//
function script6739(int0: int): void {
    if ((varclient_2831 == 1)) {
        return;
    };
    var int1 = enum_getvalue(0, 26, 8031 as cs2enum, int0);
    if ((int1 == -1 as cs2enum)) {
        return;
    };
    var int2 = enum_getvalue(0, 73, int1, RANDOM(ENUM_GETOUTPUTCOUNT(int1)));
    if ((int2 == -1 as struct)) {
        return;
    };
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(struct_getparam(int2, 723), 1, 0, struct_getparam(int2, 2263), 10, 10));
    return;
}