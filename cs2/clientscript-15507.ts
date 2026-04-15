//
function script15507(int0: int, int1: component, int2: unknown_int, int3: unknown_int, int4: unknown_int): void {
    var int5 = script15473(int0);
    var int6 = -1 as obj;
    var int7 = 0;
    if ((int5 == 1)) {
        stack(12616);
        stack(int2);
        IF_SETGRAPHIC();
        stack(12618);
        stack(int3);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, int4);
    } else {
        stack(12615);
        stack(int2);
        IF_SETGRAPHIC();
        stack(12617);
        stack(int3);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, int4);
    };
    [int6, int7] = script15475(int0);
    IF_SETOBJECT(int6, int7, int1);
    IF_SETTEXT(`(Tier ${inttostring((varbitplayer_48869 + 1), 10)})`, comp(770, 75));
    return;
}