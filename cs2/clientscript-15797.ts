//
function script15797(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int0, int1, int2, int3] = script2956();
    var int4 = 10;
    var int5 = 10;
    if ((script6431() == 1)) {
        int4 = 80;
        int5 = 0;
    };
    IF_SETPOSITION((int4 + int0), (int5 + int1), 0, 0, 55443456);
    IF_SETSIZE(280, 85, 0, 0, 55443456);
    var int6 = 55443461;
    var int7 = (5 * 2);
    var int8 = 55443462;
    var int9 = 24;
    var int10 = 0;
    CC_CREATE(int8, 4, IF_GETNEXTSUBID(int8));
    CC_SETPOSITION(10, int7, 0, 0);
    CC_SETTEXT(script15798());
    CC_SETTEXTFONT(28);
    CC_SETTEXTALIGN(1, 1, 14);
    CC_SETSIZE((10 * 2), int9, 1, 0);
    int10 = CC_GETID();
    script11024(2);
    int7 = (int7 + int9);
    int7 = (int7 + (5 * 2));
    var int11 = 24;
    var int12 = 0;
    var int13 = 0;
    CC_CREATE(int6, 5, IF_GETNEXTSUBID(int6));
    CC_SETPOSITION(10, int7, 0, 0);
    CC_SETSIZE(22, int11, 0, 0);
    CC_SETGRAPHIC(31701);
    int12 = CC_GETID();
    CC_CREATE(int6, 5, IF_GETNEXTSUBID(int6));
    CC_SETPOSITION(0, int7, 1, 0);
    CC_SETSIZE(((22 * 2) + (10 * 2)), int11, 1, 0);
    CC_SETGRAPHIC(31702);
    CC_CREATE(int6, 5, IF_GETNEXTSUBID(int6));
    CC_SETPOSITION(10, int7, 2, 0);
    CC_SETSIZE(22, int11, 0, 0);
    CC_SETGRAPHIC(31703);
    CC_CREATE(int6, 5, IF_GETNEXTSUBID(int6));
    CC_SETPOSITION((10 + 2), (int7 + 2), 0, 0);
    CC_SETGRAPHIC(31696);
    CC_CREATE(int6, 4, IF_GETNEXTSUBID(int6));
    CC_SETPOSITION(10, int7, 0, 0);
    CC_SETSIZE((10 * 2), int9, 1, 0);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(26);
    CC_SETTEXT(script15799());
    int13 = CC_GETID();
    script3403();
    if ((script6431() == 1)) {
        IF_SETPOSITION((10 + 2), CC_GETY(), 0, 0, 55443459);
    } else {
        IF_SETPOSITION((10 + 2), (CC_GETY() + 3), 0, 0, 55443459);
    };
    IF_SETSIZE(CC_GETWIDTH(), CC_GETHEIGHT(), 1, 0, 55443459);
    IF_SETHIDE(1, 55443459);
    if ((CC_FIND(int6, int12) == 1)) {
        CC_SETONVARTRANSMIT(callback(script15800, int6, int8, int10, int13, int12, 9775, 9775, 2));
    };
    return;
}