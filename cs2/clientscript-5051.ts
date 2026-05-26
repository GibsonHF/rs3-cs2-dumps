//
function script5051(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = IF_GETWIDTH(72810508);
    if ((CC_FIND(int0, 3) == 1)) {
        if ((int3 == 1)) {
            if ((CC_FIND[1](int0, 4) == 1)) {
                CC_SETPOSITION[1](0, (int1 + 16), 1, 0);
            };
            if ((CC_FIND[1](int0, 5) == 1)) {
                CC_SETPOSITION[1](0, (((int1 + 16) + CC_GETHEIGHT()) - CC_GETHEIGHT[1]()), 1, 0);
            };
            IF_SETSCROLLPOS(IF_GETSCROLLX(72810508), SCALE(int1, MAX(((int4 - 32) - CC_GETHEIGHT()), 1), (IF_GETSCROLLHEIGHT(72810508) - int4)), 72810508);
        } else {
            if ((CC_FIND[1](int0, 4) == 1)) {
                CC_SETPOSITION[1]((int1 + 16), 0, 0, 1);
            };
            if ((CC_FIND[1](int0, 5) == 1)) {
                CC_SETPOSITION[1]((((int1 + 16) + CC_GETWIDTH()) - CC_GETWIDTH[1]()), 0, 0, 1);
            };
            IF_SETSCROLLPOS(SCALE(int1, MAX(((int4 - 32) - CC_GETWIDTH()), 1), (IF_GETSCROLLWIDTH(72810508) - int4)), IF_GETSCROLLY(72810508), 72810508);
        };
    };
    if ((int2 == 1)) {
        script5053(0, 0);
    };
    return;
}