//
function script15507(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = script15473(int0);
    var int6 = -1;
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
    IF_SETTEXT(`(Tier ${inttostring((varbitplayer_48869 + 1), 10)})`, 50462795);
    return;
}