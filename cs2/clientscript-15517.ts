//
function script15517(int0: int, int1: int, int2: int, int3: component, int4: component, int5: component, int6: component, int7: component, int8: component): [int, int] {
    var int9 = 2;
    var int10 = 4;
    var string0 = "";
    var string1 = "";
    var int11 = -1 as dbrow;
    var int12 = 12670 as graphic;
    var int13 = 12669 as graphic;
    stack(495616);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    int11 = stack();
    if ((int11 == -1)) {
        return [int1, int2];
    };
    var int14 = dbrow_getfield(int11, 495632, 0);
    if ((((script3101(int14) == 1) && (script15320(int14) == 1)) && (script3104(int14) == 1))) {
        string0 = dbrow_getfield(int11, 495648, 0);
        string1 = dbrow_getfield(int11, 495664, 0);
        if ((dbrow_getfield(int11, 495696, 0) != -1 as dbrow)) {
            string0 = script12398(int11);
        };
        if ((CC_FIND(int4, int0) == 1)) {
            CC_SETSIZE(0, 32, 1, 0);
            CC_SETPOSITION(0, (int1 + ((36 - 32) / 2)), 0, 0);
            if ((script10989(int14) == 1)) {
                CC_SETOP(1, "Remove favourite");
            } else {
                CC_SETOP(1, "Add favourite");
            };
            CC_SETOPBASE(string0);
        };
        if ((CC_FIND(int8, int0) == 1)) {
            CC_SETSIZE(0, 36, 1, 0);
            CC_SETPOSITION(0, int1, 0, 0);
            CC_SETOP(1, "Select");
            CC_SETOPBASE(string0);
        };
        if ((CC_FIND(int3, int0) == 1)) {
            CC_SETSIZE(32, 32, 0, 0);
            CC_SETPOSITION(0, (int1 + ((36 - 32) / 2)), 0, 0);
            CC_SETMOUSEOVERCURSOR(46);
            cc_setparam(885, script10990(int14));
            if ((script10989(int14) == 1)) {
                CC_SETGRAPHIC(int12);
            } else {
                CC_SETGRAPHIC(int13);
            };
        };
        if ((CC_FIND(int5, int0) == 1)) {
            CC_SETSIZE(0, 36, 1, 0);
            CC_SETPOSITION(0, int1, 0, 0);
            CC_SETFILL(1);
            CC_SETMOUSEOVERCURSOR(46);
            if ((MODULO(int2, 2) == 0)) {
                script1341(28679 as struct);
            } else {
                script1341(28680 as struct);
            };
            var int2 = (int2 + 1);
        };
        if ((CC_FIND(int6, int0) == 1)) {
            CC_SETSIZE((2 * int10), (36 - int9), 1, 0);
            CC_SETPOSITION(int10, (int1 + int9), 0, 0);
            CC_SETTEXT(string0);
            CC_SETCOLOUR(script10495(2));
            CC_SETTEXTFONT(29 as fontmetrics);
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETTEXTSHADOW(true);
        };
        if ((CC_FIND(int7, int0) == 1)) {
            CC_SETSIZE((2 * int10), (36 - (2 * int9)), 1, 0);
            CC_SETPOSITION(int10, (int1 + int9), 0, 0);
            CC_SETTEXT(string1);
            CC_SETCOLOUR(script10495(3));
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTALIGN(0, 2, 0);
            CC_SETTEXTSHADOW(true);
        };
        var int1 = (int1 + (36 + int9));
    };
    return [int1, int2];
}