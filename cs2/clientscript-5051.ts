//
function script5051(int0: component, int1: int, int2: unknown_int, int3: unknown_int): void {
    var int4 = IF_GETWIDTH(comp(1111, 12));
    if ((CC_FIND(int0, 3) == 1)) {
        if ((int3 == 1)) {
            if ((CC_FIND[1](int0, 4) == 1)) {
                CC_SETPOSITION[1](0, (int1 + 16), 1, 0);
            };
            if ((CC_FIND[1](int0, 5) == 1)) {
                CC_SETPOSITION[1](0, (((int1 + 16) + CC_GETHEIGHT()) - CC_GETHEIGHT[1]()), 1, 0);
            };
            IF_SETSCROLLPOS(IF_GETSCROLLX(comp(1111, 12)), SCALE(int1, MAX(((int4 - 32) - CC_GETHEIGHT()), 1), (IF_GETSCROLLHEIGHT(comp(1111, 12)) - int4)), comp(1111, 12));
        } else {
            if ((CC_FIND[1](int0, 4) == 1)) {
                CC_SETPOSITION[1]((int1 + 16), 0, 0, 1);
            };
            if ((CC_FIND[1](int0, 5) == 1)) {
                CC_SETPOSITION[1]((((int1 + 16) + CC_GETWIDTH()) - CC_GETWIDTH[1]()), 0, 0, 1);
            };
            IF_SETSCROLLPOS(SCALE(int1, MAX(((int4 - 32) - CC_GETWIDTH()), 1), (IF_GETSCROLLWIDTH(comp(1111, 12)) - int4)), IF_GETSCROLLY(comp(1111, 12)), comp(1111, 12));
        };
    };
    if ((int2 == 1)) {
        script5053(0, 0);
    };
    return;
}