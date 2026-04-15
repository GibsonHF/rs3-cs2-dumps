//
function script14775(): void {
    var int0 = script12585(dbrow_getfield(varplayer_9212, 340016, 0));
    IF_SETHIDE(int0, comp(656, 12));
    if ((int0 == true)) {
        return;
    };
    var int1 = 23796;
    var int2 = 23796;
    if ((script14512(varplayer_9212) != varplayer_9213)) {
        int1 = 23798;
        int2 = 23797;
    };
    stack(int1);
    stack(42991628);
    IF_SETGRAPHIC();
    IF_SETONMOUSEOVER(callback(script44, 42991628, int2), 42991628);
    IF_SETONMOUSELEAVE(callback(script44, 42991628, int1), 42991628);
    return;
}