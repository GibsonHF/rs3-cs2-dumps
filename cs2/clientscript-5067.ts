//
function script5067(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(3943 as cs2enum);
    var int2 = 0;
    while ((int0 < int1)) {
        if ((varbitplayer_7055 == int0)) {
            int2 = 1;
        } else {
            int2 = 0;
        };
        if ((enum_hasoutput(0, 3944 as cs2enum, int0) == 1)) {
            script5059(comp(1111, 54), int0, int2);
        };
        if ((enum_hasoutput(0, 3945 as cs2enum, int0) == 1)) {
            script5059(comp(1111, 57), int0, int2);
        };
        if ((enum_hasoutput(0, 3946 as cs2enum, int0) == 1)) {
            script5059(comp(1111, 60), int0, int2);
        };
        if ((enum_hasoutput(0, 3947 as cs2enum, int0) == 1)) {
            script5059(comp(1111, 63), int0, int2);
        };
        int0 = (int0 + 1);
    };
    CC_DELETEALL(comp(1111, 27));
    CC_DELETEALL(comp(1111, 28));
    CC_DELETEALL(comp(1111, 29));
    CC_DELETEALL(comp(1111, 30));
    var int3 = 0;
    var int4 = enum_getvalue(0, 73, 3943 as cs2enum, varbitplayer_7055);
    var string0 = "";
    var int5 = -1 as cs2enum;
    if ((int4 != -1 as struct)) {
        IF_SETTEXT(struct_getparam(int4, 1463), comp(1111, 26));
        stack(struct_getparam(int4, 1465));
        stack(72810520);
        IF_SETGRAPHIC();
        stack(int4);
        stack(1464);
        struct_getparam();
        string0 = stack();
        stack(int4);
        stack(1466);
        struct_getparam();
        if (((stack() == 1) && (int4 != 1918 as struct))) {
            string0 = strconcat(string0, "<br><br>Drag your mouse over the grid to fill an area with this element.");
        };
        int3 = (int3 + script5068(string0, int3));
        int5 = struct_getparam(int4, 1470);
        if ((int5 != -1 as cs2enum)) {
            int3 = (++int3 + script5068(enum_getvalue(0, 36, int5, -1), int3));
            IF_SETPOSITION(0, int3, 1, 0, comp(1111, 28));
            int3 = (int3 + script5069(int5, comp(1111, 28), 1, varbitplayer_7056));
        } else {
            IF_SETSIZE(0, 0, 1, 0, comp(1111, 28));
        };
        int5 = struct_getparam(int4, 1471);
        if ((int5 != -1 as cs2enum)) {
            int3 = (++int3 + script5068(enum_getvalue(0, 36, int5, -1), int3));
            IF_SETPOSITION(0, int3, 1, 0, comp(1111, 29));
            int3 = (int3 + script5069(int5, comp(1111, 29), 2, varbitplayer_7057));
        } else {
            IF_SETSIZE(0, 0, 1, 0, comp(1111, 29));
        };
        int5 = struct_getparam(int4, 1472);
        if ((int5 != -1 as cs2enum)) {
            int3 = (++int3 + script5068(enum_getvalue(0, 36, int5, -1), int3));
            IF_SETPOSITION(0, int3, 1, 0, comp(1111, 30));
            int3 = (int3 + script5069(int5, comp(1111, 30), 3, varbitplayer_7058));
        } else {
            IF_SETSIZE(0, 0, 1, 0, comp(1111, 30));
        };
    } else {
        IF_SETTEXT("", comp(1111, 26));
        stack(-1);
        stack(72810520);
        IF_SETGRAPHIC();
    };
    if ((int3 > IF_GETHEIGHT(comp(1111, 27)))) {
        IF_SETSCROLLSIZE(0, int3, comp(1111, 27));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1111, 27));
    };
    IF_SETSCROLLPOS(0, MIN(IF_GETSCROLLY(comp(1111, 27)), int3), comp(1111, 27));
    script31(comp(1111, 31), comp(1111, 27), 6507 as graphic, 6504 as graphic, 6505 as graphic, 6506 as graphic, 6499 as graphic, 6498 as graphic);
    return;
}