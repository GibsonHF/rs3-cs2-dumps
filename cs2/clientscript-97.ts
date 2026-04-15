//
function script97(int0: int, int1: unknown_int, int2: int, string0: string): void {
    if ((int0 < 330)) {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script97, int0, int1, int2, string0), 1048584);
        return;
    };
    IF_SETTEXT(`${TOSTRING_LOCALISED(int2, 1)}x ${OC_NAME(varplayer_7995)}`, comp(16, 19));
    IF_SETTEXT(string0, comp(16, 22));
    stack(678);
    stack(1048596);
    IF_SETGRAPHIC();
    IF_SETOBJECT(int1, int2, 1048597);
    IF_SETHIDE(0, 1048591);
    IF_SETHIDE(1, 1048590);
    IF_SETMODELANIM(32036, 1048586);
    IF_SETONTIMER(callback(), 1048584);
    IF_SETONMOUSEOVER(callback(script98), 1048586);
    IF_SETONMOUSELEAVE(callback(script100), 1048586);
    return;
}