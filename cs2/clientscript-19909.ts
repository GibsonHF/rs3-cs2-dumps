//
function script19909(): void {
    var int0 = -1 as graphic;
    var int1 = -1 as graphic;
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    [int0, int1, int2, int3, int4, int5] = script10582();
    [int6, int7, int8, int9] = script10583();
    stack(int0);
    stack(70910004);
    IF_SETGRAPHIC();
    stack(int1);
    stack(70910039);
    IF_SETGRAPHIC();
    stack(int2);
    stack(70910002);
    IF_SETGRAPHIC();
    stack(int3);
    stack(70910044);
    IF_SETGRAPHIC();
    IF_SETSIZE(int4, int5, 0, 0, 70910004);
    IF_SETSIZE(int4, int5, 0, 0, 70910002);
    IF_SETPOSITION(int6, int7, 0, 0, 70910037);
    IF_SETSIZE(int8, int9, 0, 0, 70910037);
    IF_SETPOSITION(int6, int7, 2, 0, 70910042);
    IF_SETSIZE(int8, int9, 0, 0, 70910042);
    return;
}