//
function script13410(int0: number): void {
    IF_SETGRAPHIC(18717 as graphic, comp(1419, 29));
    SOUND_VORBIS_VOLUME(36972 as vorbis, 1, 0, 100);
    switch (int0) {
        case 0: {
            IF_SETONMOUSEREPEAT(callback(), comp(1419, 28));
            IF_SETONMOUSELEAVE(callback(), comp(1419, 28));
            IF_SETGRAPHIC(18102 as graphic, comp(1419, 28));
            IF_SETGRAPHIC(18100 as graphic, comp(1419, 59));
            IF_SETONMOUSEREPEAT(callback(script44, 92995643, 18101), comp(1419, 59));
            IF_SETONMOUSELEAVE(callback(script44, 92995643, 18100), comp(1419, 59));
            IF_SETGRAPHIC(18100 as graphic, comp(1419, 62));
            IF_SETONMOUSEREPEAT(callback(script44, 92995646, 18101), comp(1419, 62));
            IF_SETONMOUSELEAVE(callback(script44, 92995646, 18100), comp(1419, 62));
            break;
        }
        case 1: {
            IF_SETONMOUSEREPEAT(callback(), comp(1419, 59));
            IF_SETONMOUSELEAVE(callback(), comp(1419, 59));
            IF_SETGRAPHIC(18102 as graphic, comp(1419, 59));
            IF_SETGRAPHIC(18100 as graphic, comp(1419, 28));
            IF_SETONMOUSEREPEAT(callback(script44, 92995612, 18101), comp(1419, 28));
            IF_SETONMOUSELEAVE(callback(script44, 92995612, 18100), comp(1419, 28));
            IF_SETGRAPHIC(18100 as graphic, comp(1419, 62));
            IF_SETONMOUSEREPEAT(callback(script44, 92995646, 18101), comp(1419, 62));
            IF_SETONMOUSELEAVE(callback(script44, 92995646, 18100), comp(1419, 62));
            break;
        }
        case 2: {
            IF_SETONMOUSEREPEAT(callback(), comp(1419, 62));
            IF_SETONMOUSELEAVE(callback(), comp(1419, 62));
            IF_SETGRAPHIC(18102 as graphic, comp(1419, 62));
            IF_SETGRAPHIC(18100 as graphic, comp(1419, 28));
            IF_SETONMOUSEREPEAT(callback(script44, 92995612, 18101), comp(1419, 28));
            IF_SETONMOUSELEAVE(callback(script44, 92995612, 18100), comp(1419, 28));
            IF_SETGRAPHIC(18100 as graphic, comp(1419, 59));
            IF_SETONMOUSEREPEAT(callback(script44, 92995643, 18101), comp(1419, 59));
            IF_SETONMOUSELEAVE(callback(script44, 92995643, 18100), comp(1419, 59));
            break;
        }
    };
    return;
}