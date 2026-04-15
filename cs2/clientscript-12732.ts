//
function script12732(int0: unknown_int): void {
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script12742();
    IF_SETTEXT(inttostring(int1, 10), comp(1786, 17));
    IF_SETTEXT(`/ ${inttostring(int2, 10)}`, comp(1786, 18));
    IF_SETTEXT(`${inttostring((varbitplayer_33713 + 1), 10)} / 8`, comp(1786, 21));
    IF_SETTEXT(inttostring(varbitplayer_33716, 10), comp(1786, 22));
    IF_SETTEXT(`Voyages completed: ${inttostring(varbitplayer_33714, 10)}`, comp(1786, 45));
    stack(script12723());
    stack(117047297);
    IF_SETGRAPHIC();
    script12736();
    script12733();
    script12738();
    script12749();
    return;
}