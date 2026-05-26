//
function script15507(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = script15473(int0);
    var int6 = -1 as obj;
    var int7 = 0;
    if ((int5 == 1)) {
        IF_SETGRAPHIC(12616 as graphic, int2);
        IF_SETGRAPHIC(12618 as graphic, int3);
        IF_SETHIDE(true, int4);
    } else {
        IF_SETGRAPHIC(12615 as graphic, int2);
        IF_SETGRAPHIC(12617 as graphic, int3);
        IF_SETHIDE(false, int4);
    };
    [int6, int7] = script15475(int0);
    IF_SETOBJECT(int6, int7, int1);
    IF_SETTEXT(`(Tier ${inttostring((varbitplayer_48869 + 1), 10)})`, comp(770, 75));
    return;
}