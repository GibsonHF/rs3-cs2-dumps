//
function script97(int0: number, int1: number, int2: number, string0: string): void {
    if ((int0 < 330)) {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script97, int0, int1, int2, string0), comp(16, 8));
        return;
    };
    IF_SETTEXT(`${TOSTRING_LOCALISED(int2, 1)}x ${OC_NAME(varplayer_7995)}`, comp(16, 19));
    IF_SETTEXT(string0, comp(16, 22));
    IF_SETGRAPHIC(678 as graphic, comp(16, 20));
    IF_SETOBJECT(int1, int2, comp(16, 21));
    IF_SETHIDE(false, comp(16, 15));
    IF_SETHIDE(true, comp(16, 14));
    IF_SETMODELANIM(32036 as seq, comp(16, 10));
    IF_SETONTIMER(callback(), comp(16, 8));
    IF_SETONMOUSEOVER(callback(script98), comp(16, 10));
    IF_SETONMOUSELEAVE(callback(script100), comp(16, 10));
    return;
}