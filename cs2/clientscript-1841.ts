//[proc,worldmap_createtitle]
function script1841(int0: component, int1: component, int2: int, int3: int, int4: int, int5: int): int {
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPARAM_INT(4032, 0);
    CC_SETPOSITION((3 / 2), ((int3 + (18 / 2)) - (14 / 2)), 0, 0);
    CC_SETSIZE(14, 14, 0, 0);
    var int6 = CC_GETID();
    var int7 = ((CC_GETX() + CC_GETWIDTH()) + 3);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETTEXT(enum_getvalue(0, 36, 1806 as cs2enum, int2));
    CC_SETPOSITION(int7, int3, 0, 0);
    CC_SETSIZE(((CC_GETX() + 16) + (3 / 2)), 18, 1, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_CREATE[1](int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION[1]((3 / 2), ((int3 + (18 / 2)) - (16 / 2)), 2, 0);
    CC_SETSIZE[1](16, 16, 0, 0);
    if ((int5 == 1)) {
        CC_SETGRAPHIC[1](20263 as graphic);
    } else {
        CC_SETGRAPHIC[1](18975 as graphic);
    };
    CC_SETOP[1](1, "Expand/Collapse");
    CC_SETONOP[1](callback(script9632, int0, int1, int6, int4));
    CC_CREATE[1](int0, 3, IF_GETNEXTSUBID(int0));
    CC_SENDTOBACK[1]();
    CC_SETPOSITION[1](0, int3, 0, 0);
    CC_SETSIZE[1](0, 18, 1, 0);
    CC_SETFILL[1](1);
    CC_SETCOLOUR[1](script10495(9));
    CC_CREATE[1](int0, 3, IF_GETNEXTSUBID(int0));
    CC_SENDTOBACK[1]();
    CC_SETPOSITION[1](0, int3, 0, 0);
    CC_SETSIZE[1](0, 18, 1, 0);
    CC_SETTRANS[1](255);
    CC_SETONMOUSELEAVE[1](callback(script9624, int0, CC_GETID(), script10495(3)));
    CC_SETOPBASE[1](`<col=ff9040>${CC_GETTEXT()}</col>`);
    CC_SETOP[1](1, "Highlight");
    CC_SETONOP[1](callback(script9630, int0, int6));
    CC_SETONMOUSEOVER[1](callback(script9623, int0, CC_GETID(), script10495(4)));
    return ((int3 + 18) + 5);
}