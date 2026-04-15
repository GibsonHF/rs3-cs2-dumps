//[proc,login_resize]
function script3230(): void {
    var int0 = IF_GETWIDTH(comp(744, 0));
    var int1 = IF_GETHEIGHT(comp(744, 0));
    var int2 = SCALE(int0, 16, 9);
    var int3 = int0;
    if ((int2 < int1)) {
        int2 = int1;
        int3 = SCALE(int1, 9, 16);
    };
    IF_SETSIZE(int3, int2, 0, 0, comp(744, 3));
    IF_SETPOSITION(0, 0, 1, 1, comp(744, 3));
    IF_SETPOSITION(0, 0, 0, 0, comp(744, 5));
    IF_SETPOSITION(IF_GETWIDTH(comp(744, 5)), 0, 0, 0, comp(744, 6));
    IF_SETPOSITION((IF_GETWIDTH(comp(744, 5)) + IF_GETWIDTH(comp(744, 6))), 0, 0, 0, comp(744, 7));
    var int4 = IF_GETHEIGHT(comp(744, 5));
    IF_SETPOSITION(0, int4, 0, 0, comp(744, 8));
    IF_SETPOSITION(IF_GETWIDTH(comp(744, 8)), int4, 0, 0, comp(744, 9));
    IF_SETPOSITION((IF_GETWIDTH(comp(744, 8)) + IF_GETWIDTH(comp(744, 9))), int4, 0, 0, comp(744, 10));
    int4 = (IF_GETY(comp(744, 8)) + IF_GETHEIGHT(comp(744, 8)));
    IF_SETPOSITION(0, int4, 0, 0, comp(744, 11));
    IF_SETPOSITION(IF_GETWIDTH(comp(744, 11)), int4, 0, 0, comp(744, 12));
    IF_SETPOSITION((IF_GETWIDTH(comp(744, 11)) + IF_GETWIDTH(comp(744, 12))), int4, 0, 0, comp(744, 13));
    if ((script6431() == false)) {
        IF_SETSIZE(300, 36, 0, 0, comp(744, 180));
        IF_SETSIZE(23, 40, 1, 1, comp(744, 83));
        IF_SETPOSITION(6, 40, 2, 0, comp(744, 83));
        IF_SETPOSITION(0, 0, 0, 0, comp(744, 84));
        IF_SETPOSITION(0, 50, 0, 0, comp(744, 85));
        IF_SETPOSITION(0, 155, 1, 0, comp(744, 86));
        IF_SETSIZE(232, 36, 0, 0, comp(744, 87));
        IF_SETPOSITION(0, 296, 1, 0, comp(744, 87));
        IF_SETSIZE(23, 36, 1, 1, comp(744, 62));
        IF_SETPOSITION(6, 30, 2, 0, comp(744, 62));
        IF_SETSIZE(0, 20, 1, 1, comp(744, 142));
        IF_SETPOSITION(0, 0, 1, 1, comp(744, 142));
        IF_SETSIZE(300, 36, 0, 0, comp(744, 166));
        IF_SETPOSITION(0, 10, 1, 2, comp(744, 166));
        IF_SETSIZE(0, 20, 1, 1, comp(744, 167));
        IF_SETPOSITION(0, 0, 1, 1, comp(744, 167));
    } else {
        IF_SETSIZE(100, 36, 1, 0, comp(744, 180));
        IF_SETSIZE(23, 130, 1, 1, comp(744, 83));
        IF_SETPOSITION(6, 130, 2, 0, comp(744, 83));
        IF_SETPOSITION(0, 50, 0, 0, comp(744, 84));
        IF_SETPOSITION(0, 75, 0, 0, comp(744, 85));
        IF_SETPOSITION(0, 135, 1, 0, comp(744, 86));
        IF_SETSIZE(232, 36, 0, 0, comp(744, 87));
        IF_SETPOSITION(0, 204, 1, 0, comp(744, 87));
        IF_SETSIZE(23, 130, 1, 1, comp(744, 142));
        IF_SETPOSITION(6, 130, 1, 0, comp(744, 142));
        IF_SETSIZE(80, 36, 1, 0, comp(744, 166));
        IF_SETPOSITION(40, 10, 0, 2, comp(744, 166));
        IF_SETSIZE(23, 130, 1, 1, comp(744, 167));
        IF_SETPOSITION(6, 130, 1, 0, comp(744, 167));
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    [int5, int6, int7, int8] = script2956();
    IF_SETSIZE((int5 + 264), 0, 0, 1, comp(744, 206));
    IF_SETPOSITION((int5 + 40), 15, 0, 2, comp(744, 346));
    return;
}