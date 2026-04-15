//
function script20492(int0: component, int1: unknown_int, int2: boolean, int3: unknown_int, int4: int): void {
    if ((int4 <= 0)) {
        script2995(int0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2100 as dbrow, `No results found for:<br>${script15969(int1)}`);
        return;
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = 4;
    var int8 = 0;
    var int9 = -1;
    var int10 = varbitplayer_22875;
    [int5, int7] = script20493(int0, int5, int7, int1);
    while ((int6 < int4)) {
        dbrow_findnext();
        int9 = stack();
        varbitplayer_22875 = 0;
        [int5, int8] = script15966(int0, int5, int7, int9, 0, int1, int2);
        varbitplayer_22875 = int3;
        [int5, int8] = script15966(int0, int5, int7, int9, 2, int1, int2);
        int7 = (int7 + (int8 + 10));
        int6 = (int6 + 1);
    };
    varbitplayer_22875 = int10;
    IF_SETSCROLLSIZE(0, int7, int0);
    script7791(comp(862, 9), int0);
    return;
}