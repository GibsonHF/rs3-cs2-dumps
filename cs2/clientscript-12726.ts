//
function script12726(): void {
    var int0 = (IF_GETWIDTH(comp(1786, 10)) - 2);
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script12742();
    if ((int1 == 0)) {
        IF_SETSIZE(1, 0, 0, 1, comp(1786, 13));
    } else {
        IF_SETSIZE(SCALE(int0, int2, int1), 0, 0, 1, comp(1786, 13));
    };
    IF_SETHIDE(true, comp(1253, 8));
    IF_SETHIDE(true, comp(1253, 171));
    IF_SETHIDE(true, comp(1253, 89));
    stack(28095);
    stack(82116613);
    IF_SETGRAPHIC();
    stack(script12723());
    stack(117047297);
    IF_SETGRAPHIC();
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int3, int4, int5] = script12705(varbitplayer_33712);
    if ((int5 == 1)) {
        int3 = MIN((int3 + 1), 8);
    };
    IF_SETTEXT(inttostring(int1, 10), comp(1786, 17));
    IF_SETTEXT(`/ ${inttostring(int2, 10)}`, comp(1786, 18));
    IF_SETTEXT(inttostring(varbitplayer_33716, 10), comp(1786, 22));
    script12736();
    script12733();
    script12738();
    script12749();
    return;
}