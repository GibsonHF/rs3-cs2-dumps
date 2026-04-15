//
function script10926(int0: stat, int1: int, int2: unknown_int): int {
    if (((int1 == 0) && (int2 == 1))) {
        printmessage(`You cannot use this to increase your ${enum_getvalue(17, 36, 680 as cs2enum, int0)} skill.`);
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
    };
    return int1;
}