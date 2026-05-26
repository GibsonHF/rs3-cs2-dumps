//
function script12732(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script12742();
    IF_SETTEXT(inttostring(int1, 10), 117047313);
    IF_SETTEXT(`/ ${inttostring(int2, 10)}`, 117047314);
    IF_SETTEXT(`${inttostring((varbitplayer_33713 + 1), 10)} / 8`, 117047317);
    IF_SETTEXT(inttostring(varbitplayer_33716, 10), 117047318);
    IF_SETTEXT(`Voyages completed: ${inttostring(varbitplayer_33714, 10)}`, 117047341);
    stack(script12723());
    stack(117047297);
    IF_SETGRAPHIC();
    script12736();
    script12733();
    script12738();
    script12749();
    return;
}