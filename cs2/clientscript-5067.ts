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
            script5059(72810550, int0, int2);
        };
        if ((enum_hasoutput(0, 3945 as cs2enum, int0) == 1)) {
            script5059(72810553, int0, int2);
        };
        if ((enum_hasoutput(0, 3946 as cs2enum, int0) == 1)) {
            script5059(72810556, int0, int2);
        };
        if ((enum_hasoutput(0, 3947 as cs2enum, int0) == 1)) {
            script5059(72810559, int0, int2);
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
    var int5 = -1;
    if ((int4 != -1 as struct)) {
        IF_SETTEXT(struct_getparam(int4, 1463), comp(1111, 26));
        IF_SETGRAPHIC(struct_getparam(int4, 1465), comp(1111, 24));
        string0 = struct_getparam(int4, 1464);
        if (((struct_getparam(int4, 1466) == 1) && (int4 != 1918))) {
            string0 = strconcat(string0, "<br><br>Drag your mouse over the grid to fill an area with this element.");
        };
        int3 = (int3 + script5068(string0, int3));
        int5 = struct_getparam(int4, 1470);
        if ((int5 != -1)) {
            int3 = (int3 + 5);
            int3 = (int3 + script5068(enum_getvalue(0, 36, int5, -1), int3));
            IF_SETPOSITION(0, int3, 1, 0, comp(1111, 28));
            int3 = (int3 + script5069(int5, 72810524, 1, varbitplayer_7056));
        } else {
            IF_SETSIZE(0, 0, 1, 0, comp(1111, 28));
        };
        int5 = struct_getparam(int4, 1471);
        if ((int5 != -1)) {
            int3 = (int3 + 5);
            int3 = (int3 + script5068(enum_getvalue(0, 36, int5, -1), int3));
            IF_SETPOSITION(0, int3, 1, 0, comp(1111, 29));
            int3 = (int3 + script5069(int5, 72810525, 2, varbitplayer_7057));
        } else {
            IF_SETSIZE(0, 0, 1, 0, comp(1111, 29));
        };
        int5 = struct_getparam(int4, 1472);
        if ((int5 != -1)) {
            int3 = (int3 + 5);
            int3 = (int3 + script5068(enum_getvalue(0, 36, int5, -1), int3));
            IF_SETPOSITION(0, int3, 1, 0, comp(1111, 30));
            int3 = (int3 + script5069(int5, 72810526, 3, varbitplayer_7058));
        } else {
            IF_SETSIZE(0, 0, 1, 0, comp(1111, 30));
        };
    } else {
        IF_SETTEXT("", comp(1111, 26));
        IF_SETGRAPHIC(-1 as graphic, comp(1111, 24));
    };
    if ((int3 > IF_GETHEIGHT(comp(1111, 27)))) {
        IF_SETSCROLLSIZE(0, int3, comp(1111, 27));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1111, 27));
    };
    IF_SETSCROLLPOS(0, MIN(IF_GETSCROLLY(comp(1111, 27)), int3), comp(1111, 27));
    script31(72810527, 72810523, 6507, 6504, 6505, 6506, 6499, 6498);
    return;
}