//
function script8187(int0: component, int1: int): void {
    var int1 = MAX(1, int1);
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    [int2, int3, int4, int5, int6, int7] = script8189(int1);
    if ((CC_FIND(int0, 24) == 1)) {
        if ((CC_FIND[1](int0, int2) == 1)) {
            CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
            CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
        } else {
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETSIZE(0, 0, 0, 0);
        };
    };
    if ((CC_FIND(int0, 25) == 1)) {
        if ((CC_FIND[1](int0, int3) == 1)) {
            CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
            CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
        } else {
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETSIZE(0, 0, 0, 0);
        };
    };
    if ((CC_FIND(int0, 26) == 1)) {
        if ((CC_FIND[1](int0, int4) == 1)) {
            CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
            CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
        } else {
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETSIZE(0, 0, 0, 0);
        };
    };
    if ((CC_FIND(int0, 27) == 1)) {
        if ((CC_FIND[1](int0, int5) == 1)) {
            CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
            CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
            CC_SETTEXT(CC_GETTEXT[1]());
            CC_SETCOLOUR(CC_GETCOLOUR[1]());
            CC_SETTEXTALIGN(1, 0, 0);
            CC_SETTEXTALIGN(1, 0, 0);
            CC_CLEAROPS[1]();
            CC_SETONOP[1](callback());
        } else {
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETSIZE(0, 0, 0, 0);
            CC_SETTEXT("");
        };
    };
    return;
}