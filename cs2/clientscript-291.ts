//[proc,worldmap_showmenu]
function script291(int0: unknown_int, int1: component, int2: component, int3: component, int4: component, int5: component): void {
    IF_SETTEXT(WORLDMAP_GETMAPNAME(WORLDMAP_GETCURRENTMAP()), comp(1422, 94));
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    if ((int0 == 0)) {
        IF_SETHIDE(true, int1);
        stack(773);
        stack(93192287);
        IF_SETGRAPHIC();
        IF_SETONCLICK(callback(script290, 1, int1, int2, int3, int4, int5), 93192285);
        return;
    };
    IF_SETHIDE(false, int1);
    stack(788);
    stack(93192287);
    IF_SETGRAPHIC();
    IF_SETONCLICK(callback(script290, 0, int1, int2, int3, int4, int5), 93192285);
    var int6 = ENUM_GETOUTPUTCOUNT(708);
    define_array((int6 + 1));
    pop_array(0, 0);
    var int7 = 1;
    var int8 = 1;
    var int9 = -1;
    var int10 = MAX(20, script10082());
    while ((int7 <= int6)) {
        int9 = enum_getvalue(0, 21, 708 as cs2enum, int7);
        if ((int9 != -1 as maparea)) {
            pop_array(int8, int7);
            int8 = (int8 + 1);
        };
        int7 = (int7 + 1);
    };
    script293(0, 1, (int8 - 1));
    CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETSIZE(0, int10, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, script10495(4)));
    CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, script10495(3)));
    int9 = enum_getvalue(0, 21, 708, push_array(0));
    CC_SETTEXT(WORLDMAP_GETMAPNAME(int9));
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script294, int9, int1, int2, int3, int4, int5));
    script309(int9, int2, 0);
    var int11 = CC_GETHEIGHT();
    var int12 = 0;
    int7 = 1;
    while ((int7 < int8)) {
        CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
        CC_SETPOSITION(0, int11, 1, 0);
        CC_SETSIZE(0, int10, 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETCOLOUR(script10495(3));
        CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, script10495(4)));
        CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, script10495(3)));
        int9 = enum_getvalue(0, 21, 708, push_array(int7));
        CC_SETTEXT(WORLDMAP_GETMAPNAME(int9));
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script294, int9, int1, int2, int3, int4, int5));
        if ((int9 == WORLDMAP_GETCURRENTMAP())) {
            int12 = int11;
        };
        script309(int9, int2, int11);
        int11 = (int11 + CC_GETHEIGHT());
        int7 = (int7 + 1);
    };
    IF_SETSCROLLSIZE(0, int11, int2);
    int11 = MAX(int11, int10);
    int11 = MIN(++int11, 150);
    IF_SETSIZE(IF_GETWIDTH(int1), int11, 0, 0, int1);
    script7791(int3, int2);
    script157(int3, int2, int12, 1);
    return;
}