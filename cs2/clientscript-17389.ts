//
function script17389(long0: long): void {
    if ((varplayer_135 == -1 as obj)) {
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 120);
        return;
    };
    if (branch_lteq_long[16](varclient_85, SUB_LONG(2147483649147483647n, long0))) {
        varclient_85 = ADD_LONG(varclient_85, long0);
    } else {
        varclient_85 = 2147483649147483647n;
    };
    script15038(varclient_84, varclient_85, 1);
    return;
}