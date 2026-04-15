//
function script11171(): unknown_int {
    if ((script15757() == 0)) {
        return 1;
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = MAX(0, varplayer_6153);
    var int3 = MAX(0, varplayer_6154);
    var int4 = MAX(int2, int3);
    var int5 = (DATE_MINUTES_FROMRUNEDAY(DATE_RUNEDAY()) - DATE_MINUTES_FROMRUNEDAY(0));
    int1 = (DATE_RUNEDAY() + (365 * 2));
    int0 = (DATE_MINUTES_FROMRUNEDAY(int1) - DATE_MINUTES_FROMRUNEDAY(0));
    if ((int4 > int0)) {
        return 1;
    };
    if ((((int4 == 0) && (varplayer_9879 > 0)) && ((int5 + varplayer_9879) > int0))) {
        return 1;
    };
    if ((((int4 != 0) && (varplayer_9879 > 0)) && ((int4 + varplayer_9879) > int0))) {
        return 1;
    };
    return 0;
}