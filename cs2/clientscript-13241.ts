//
function script13241(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = 0;
    var int5 = (4 * 2);
    var int6 = (IF_GETWIDTH(comp(1846, 16)) / 2);
    var int7 = (20 * 2);
    CC_DELETEALL(comp(1846, 16));
    CC_DELETEALL(comp(1846, 6));
    var int8 = 0;
    var int9 = comp(1843, 216);
    var int10 = comp(1843, 209);
    var int11 = IF_GETX(int9);
    int5 = (((20 * 2) + (4 * 3)) + 10);
    while ((int8 < 5)) {
        CC_CREATE(comp(1846, 16), 4, IF_GETNEXTSUBID(comp(1846, 16)));
        CC_SETTEXT(enum_getvalue(0, 36, 12240 as cs2enum, int8));
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETCOLOUR(script10495(3));
        CC_SETPOSITION(int11, (4 + int5), 0, 0);
        CC_SETSIZE((int6 - CC_GETX()), script7593(CC_GETTEXT(), (int6 - CC_GETX()), CC_GETFONTMETRICS(), 0), 0, 0);
        int5 = ((CC_GETY() + CC_GETHEIGHT()) + 10);
        int11 = (IF_GETX(int10) - (int8 * (24 + 4)));
        CC_CREATE[1](comp(1846, 6), 3, IF_GETNEXTSUBID(comp(1846, 6)));
        CC_SETPOSITION[1]((CC_GETX() + 10), (20 + 4), 0, 0);
        CC_SETSIZE[1](4, ((CC_GETY() - 20) - 4), 0, 0);
        CC_SETCOLOUR[1](script10495(3));
        CC_SETTRANS[1](80);
        CC_SETFILL[1](1);
        int8 = (int8 + 1);
    };
    var int12 = 0;
    int5 = 100;
    while ((int12 < 5)) {
        CC_CREATE[1](comp(1846, 6), 5, IF_GETNEXTSUBID(comp(1846, 6)));
        CC_SETSIZE[1](36, 36, 0, 0);
        CC_SETPOSITION[1](4, (int5 + 4), 2, 0);
        CC_SETGRAPHIC[1](enum_getvalue(0, 23, 12243 as cs2enum, int12));
        if ((CC_GETGRAPHIC[1]() == 18269 as graphic)) {
            CC_SETTRANS[1](80);
        };
        CC_CREATE(comp(1846, 6), 5, IF_GETNEXTSUBID(comp(1846, 6)));
        CC_SETSIZE(32, 32, 0, 0);
        CC_SETPOSITION((CC_GETX[1]() + 2), (CC_GETY[1]() + 2), 0, 0);
        CC_SETGRAPHIC(script8478(818 as inv, 0, enum_getvalue(0, 0, 12242 as cs2enum, int12)));
        if ((int12 == 0)) {
            CC_SETTRANS(127);
        } else {
            CC_SETTRANS(0);
        };
        if ((int12 == 3)) {
            script10017(comp(1846, 6), CC_GETID[1](), -1, 5, "null", comp(1846, 6));
        };
        int6 = 220;
        if ((script6431() == true)) {
            CC_SETTEXT(enum_getvalue(0, 36, 15261 as cs2enum, int12));
        } else {
            CC_CREATE(comp(1846, 16), 4, IF_GETNEXTSUBID(comp(1846, 16)));
        };
        CC_SETTEXT(enum_getvalue(0, 36, 12241 as cs2enum, int12));
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETCOLOUR(script10495(3));
        CC_SETSIZE(int6, script7593(CC_GETTEXT(), int6, CC_GETFONTMETRICS(), 0), 0, 0);
        CC_SETPOSITION(((IF_GETWIDTH(comp(1846, 6)) - CC_GETX[1]()) + 4), ((CC_GETY[1]() + (CC_GETHEIGHT[1]() / 2)) - (CC_GETHEIGHT() / 2)), 2, 0);
        CC_SETTEXTALIGN(2, 0, 0);
        int5 = ((int5 + 32) + 10);
        int12 = (int12 + 1);
    };
    CC_CREATE(comp(1846, 16), 4, IF_GETNEXTSUBID(comp(1846, 16)));
    CC_SETTEXT("Switch between the list and grid view");
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETCOLOUR(script10495(3));
    CC_SETSIZE(int6, script7593(CC_GETTEXT(), int6, CC_GETFONTMETRICS(), 0), 0, 0);
    CC_SETPOSITION((220 + (4 * 4)), (24 / 4), 0, 0);
    CC_CREATE[1](comp(1846, 6), 3, IF_GETNEXTSUBID(comp(1846, 6)));
    CC_SETPOSITION[1](220, ((24 / 2) - (4 / 2)), 0, 0);
    CC_SETSIZE[1]((4 * 3), 4, 0, 0);
    CC_SETCOLOUR[1](script10495(3));
    CC_SETTRANS[1](80);
    CC_SETFILL[1](1);
    CC_CREATE(comp(1846, 16), 4, IF_GETNEXTSUBID(comp(1846, 16)));
    CC_SETTEXT("Interact here to search for a specific item");
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETCOLOUR(script10495(3));
    CC_SETSIZE(int6, script7593(CC_GETTEXT(), int6, CC_GETFONTMETRICS(), 0), 0, 0);
    CC_SETPOSITION((220 + (4 * 4)), ((24 + 4) + (24 / 4)), 0, 0);
    CC_CREATE[1](comp(1846, 6), 3, IF_GETNEXTSUBID(comp(1846, 6)));
    CC_SETPOSITION[1](220, (((3 * 24) / 2) + (4 / 2)), 0, 0);
    CC_SETSIZE[1]((4 * 3), 4, 0, 0);
    CC_SETCOLOUR[1](script10495(3));
    CC_SETTRANS[1](80);
    CC_SETFILL[1](1);
    CC_CREATE(comp(1846, 6), 5, IF_GETNEXTSUBID(comp(1846, 6)));
    CC_SETSIZE(struct_getparam(35560, 3915), struct_getparam(35560, 3916), 0, 0);
    CC_SETPOSITION(4, 3, 2, 0);
    CC_SETGRAPHIC(struct_getparam(35560, 3910));
    CC_CREATE[1](comp(1846, 16), 4, IF_GETNEXTSUBID(comp(1846, 16)));
    if ((script6431() == true)) {
        CC_SETTEXT[1]("Undo all slots.");
    } else {
        CC_SETTEXT[1]("Undo all slots. You can also CTRL+Click individual slots to undo them.");
    };
    CC_SETTEXTFONT[1](26 as fontmetrics);
    CC_SETTEXTSHADOW[1](true);
    CC_SETCOLOUR[1](script10495(3));
    CC_SETSIZE[1](int6, script7593(CC_GETTEXT[1](), int6, CC_GETFONTMETRICS[1](), 0), 0, 0);
    CC_SETPOSITION[1](((IF_GETWIDTH(comp(1846, 6)) - CC_GETX()) + 4), CC_GETY(), 2, 0);
    CC_SETTEXTALIGN[1](2, 0, 0);
    CC_CREATE(comp(1846, 6), 5, IF_GETNEXTSUBID(comp(1846, 6)));
    CC_SETSIZE(struct_getparam(35561, 3915), struct_getparam(35561, 3916), 0, 0);
    CC_SETPOSITION(4, ((3 + (20 * 2)) + 4), 2, 0);
    CC_SETGRAPHIC(struct_getparam(35561, 3910));
    CC_CREATE[1](comp(1846, 16), 4, IF_GETNEXTSUBID(comp(1846, 16)));
    if ((script6431() == true)) {
        CC_SETTEXT[1]("Clear all slots. You can also press and hold on the individual slots to clear them.");
    } else {
        CC_SETTEXT[1]("Clear all slots. You can also right click individual slots to clear them.");
    };
    CC_SETTEXTFONT[1](26 as fontmetrics);
    CC_SETTEXTSHADOW[1](true);
    CC_SETCOLOUR[1](script10495(3));
    CC_SETSIZE[1](int6, script7593(CC_GETTEXT[1](), int6, CC_GETFONTMETRICS[1](), 0), 0, 0);
    CC_SETPOSITION[1](((IF_GETWIDTH(comp(1846, 6)) - CC_GETX()) + 4), CC_GETY(), 2, 0);
    CC_SETTEXTALIGN[1](2, 0, 0);
    return;
}