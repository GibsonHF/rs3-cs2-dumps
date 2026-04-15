//[proc,worldmap_createline]
function script1840(int0: component, int1: int, int2: int, int3: int, int4: unknown_int, int5: int): [int, int] {
    var int6 = true;
    if ((int5 == 1)) {
        int6 = false;
    };
    var int7 = enum_getvalue(0, 73, 1805 as cs2enum, int1);
    if ((int7 == -1 as struct)) {
        return [int2, -1];
    };
    var string0 = struct_getparam(int7, 596);
    var int8 = -1;
    if ((enum_getreversecount(73, 8586 as cs2enum, int7) == 1)) {
        int8 = enum_getreverseindex(73, 41, 8586 as cs2enum, int7, 0);
    };
    var int9 = script9635(int1);
    if ((int9 == -1)) {
        return [int2, -1];
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETHIDE(int6);
    CC_SETPARAM_INT(3430, int1);
    var int10 = CC_GETID();
    CC_SETPOSITION(((int3 * 7) + (3 / 2)), ((int2 + (18 / 2)) - (14 / 2)), 0, 0);
    CC_SETSIZE(14, 14, 0, 0);
    var int11 = ((CC_GETX() + CC_GETWIDTH()) + 3);
    if ((int9 == 1)) {
        CC_SETGRAPHIC(20326 as graphic);
    } else {
        CC_SETGRAPHIC(20268 as graphic);
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETHIDE(int6);
    CC_CREATE[1](int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETHIDE[1](int6);
    CC_SETPOSITION(int11, ((int2 + (18 / 2)) - (23 / 2)), 0, 0);
    CC_SETSIZE(23, 23, 0, 0);
    CC_SETPOSITION[1](((CC_GETX() + CC_GETWIDTH()) + 3), int2, 0, 0);
    CC_SETSIZE[1]((CC_GETX[1]() + (3 / 2)), 18, 1, 0);
    var int12 = -1 as graphic;
    var int13 = struct_getparam(int7, 4393);
    if ((int13 != -1 as cs2enum)) {
        int12 = enum_getvalue(0, 23, int13, varbitplayer_22874);
    };
    CC_SETGRAPHIC(int12);
    CC_SETCOLOUR[1](script10495(4));
    CC_SETTEXTFONT[1](26 as fontmetrics);
    CC_SETTEXTSHADOW[1](true);
    CC_SETTEXTALIGN[1](0, 1, 0);
    CC_SETTEXT[1](string0);
    CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
    CC_SETHIDE(int6);
    CC_SENDTOBACK();
    CC_SETPOSITION(0, int2, 0, 0);
    CC_SETSIZE(0, 18, 1, 0);
    CC_SETTRANS(255);
    if ((int8 != -1)) {
        if ((int9 == 1)) {
            WORLDMAP_DISABLEELEMENTCATEGORY(int8, 0);
            CC_SETCOLOUR[1](script10495(4));
            CC_SETONMOUSELEAVE(callback(script9624, int0, CC_GETID[1](), script10495(4)));
        } else {
            WORLDMAP_DISABLEELEMENTCATEGORY(int8, 1);
            CC_SETCOLOUR[1](script10495(5));
            CC_SETONMOUSELEAVE(callback(script9624, int0, CC_GETID[1](), script10495(5)));
        };
        CC_SETOPBASE(`<col=ff9040>${string0}</col>`);
        CC_SETOP(1, "Highlight");
        CC_SETONOP(callback(script288, int8, int0, int10, int4));
        CC_SETONMOUSEOVER(callback(script9623, int0, CC_GETID[1](), script10495(4)));
    };
    CC_CREATE[1](int0, 3, IF_GETNEXTSUBID(int0));
    if ((int6 == true)) {
        return [int2, int9];
    };
    return [((int2 + 18) + 5), int9];
}