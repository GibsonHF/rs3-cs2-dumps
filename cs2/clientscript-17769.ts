//
function script17769(int0: number): void {
    var int1 = (18 * 2);
    var int2 = 80150530;
    var int3 = 80150537;
    var int4 = 80150550;
    var int5 = 80150542;
    var int6 = 80150554;
    IF_SETTEXT("No ritual selected", 80150528);
    IF_SETSIZE((IF_GETWIDTH(int2) - IF_GETWIDTH(int3)), int1, 1, 0, int3);
    IF_SETSIZE((IF_GETWIDTH(int3) - IF_GETWIDTH(int4)), int1, 1, 0, int4);
    IF_SETSIZE((IF_GETWIDTH(int2) - IF_GETWIDTH(int5)), int1, 1, 0, int5);
    IF_SETSIZE((IF_GETWIDTH(int5) - IF_GETWIDTH(int6)), int1, 1, 0, int6);
    var int0 = (int0 + ((int1 * 3) + (8 * 2)));
    IF_SETPOSITION(0, int0, 1, 0, int5);
    int0 = (int0 + (int1 + 8));
    IF_SETPOSITION(0, int0, 1, 0, 80150543);
    IF_SETHIDE(1, 80150555);
    IF_SETSCROLLSIZE(0, 0, int4);
    IF_SETSCROLLSIZE(0, 0, int6);
    return;
}