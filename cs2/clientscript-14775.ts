//
function script14775(): void {
    var int0 = script12585(dbrow_getfield(varplayer_9212, 340016, 0));
    IF_SETHIDE(int0, comp(656, 12));
    if ((int0 == true)) {
        return;
    };
    var int1 = 23796 as graphic;
    var int2 = 23796;
    if ((script14512(varplayer_9212) != varplayer_9213)) {
        int1 = 23798 as graphic;
        int2 = 23797;
    };
    IF_SETGRAPHIC(int1, comp(656, 12));
    IF_SETONMOUSEOVER(callback(script44, 42991628, int2), comp(656, 12));
    IF_SETONMOUSELEAVE(callback(script44, 42991628, int1), comp(656, 12));
    return;
}