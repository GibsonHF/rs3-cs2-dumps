//
function script12732(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script12742();
    IF_SETTEXT(inttostring(int1, 10), comp(1786, 17));  // trh104_overlay:num
    IF_SETTEXT(`/ ${inttostring(int2, 10)}`, comp(1786, 18));  // trh104_overlay:total
    IF_SETTEXT(`${inttostring((varbitplayer_33713 + 1), 10)} / 8`, comp(1786, 21));  // trh104_overlay:level
    IF_SETTEXT(inttostring(varbitplayer_33716, 10), comp(1786, 22));  // trh104_overlay:tokens
    IF_SETTEXT(`Voyages completed: ${inttostring(varbitplayer_33714, 10)}`, comp(1786, 45));  // trh104_overlay:nextprize
    IF_SETGRAPHIC(script12723(), comp(1786, 1));  // trh104_overlay:background_map
    script12736();
    script12733();
    script12738();
    script12749();
    return;
}