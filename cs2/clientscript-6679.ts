//
function script6679(int0: stat, int1: unknown_int): unknown_int {
    var int2 = enum_getvalue(17, 0, 12164 as cs2enum, int0);
    if ((int2 == -1)) {
        return 0;
    };
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script10489(int2);
    if ((((int3 >= 1) && (int4 == 0)) && (STAT_BASE(int0) >= 40))) {
        return 1;
    };
    if ((int1 == 1)) {
        if ((int3 == 0)) {
            printmessage("You cannot select this as your citadel has not built the relevant skill plot.");
        } else {
            printmessage("You cannot select this as the skill plot must not be dilapidated and you must be at least level 40 in this skill.");
        };
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
    };
    return 0;
}