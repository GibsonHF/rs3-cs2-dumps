//
function script13179(int0: component, int1: dbrow): void {
    var int2 = -1 as struct;
    var int3 = -1 as struct;
    var int4 = -1;
    [int2, int3, int4] = script13178(int1);
    if (((int0 == comp(-1, 65535)) || (int2 == -1 as struct))) {
        return;
    };
    var int5 = script9984(int2, 6);
    if ((int5 == -1 as struct)) {
        return;
    };
    var int6 = struct_getparam(int5, 3810);
    var int7 = struct_getparam(int5, 3811);
    var int8 = (2 + 1);
    var int9 = (IF_GETWIDTH(int0) - (int8 * 2));
    var int10 = (IF_GETHEIGHT(int0) - (int8 * 2));
    var int11 = INV_SIZE(675 as inv);
    var int12 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 4, int12++);
    CC_SETTEXTFONT(int6);
    CC_SETTEXTSHADOW(true);
    CC_SETPOSITION(int8, int8, 0, 0);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETSIZE(int9, int10, 0, 0);
    CC_SETCOLOUR(int7);
    var string0 = "";
    if ((varclient_5939 == 0)) {
        string0 = "The Keepsake Box can store wearable items as cosmetic overrides.";
    } else {
        string0 = `Keepsake slots available:<br>${inttostring((int11 - varclient_5939), 10)} / ${inttostring(int11, 10)}`;
    };
    var int13 = 34;
    var int14 = 35;
    var int15 = 0;
    CC_CREATE[1](int0, 5, int12++);
    if ((varplayer_6808 == 0)) {
        string0 = `${string0}<br><br>To add an item you'll need a Keepsake Key.`;
        CC_SETGRAPHIC[1](29331 as graphic);
    } else {
        if ((script6431() == true)) {
            string0 = `${string0}<br><br>Tap here to select an item to keepsake.`;
        } else {
            string0 = `${string0}<br><br>Drag your item into this box.`;
        };
        CC_SETGRAPHIC[1](29325 as graphic);
    };
    CC_SETTEXT(string0);
    CC_SETSIZE[1](int13, int14, 0, 0);
    int15 = script7593(string0, int9, int6, 0);
    int10 = ((int10 - int14) - 4);
    if ((int15 > int10)) {
        CC_SETTEXT(script3930(string0, int9, (int10 / enum_getvalue(25, 0, 8549 as cs2enum, int6)), int6));
        int15 = MIN(int10, script7593(CC_GETTEXT(), int9, int6, 0));
    };
    CC_SETSIZE(int9, int15, 0, 0);
    CC_SETPOSITION(CC_GETX(), (int8 + ((int10 - int15) / 2)), 0, 0);
    CC_SETPOSITION[1](0, CC_GETY(), 1, 2);
    if ((varplayer_6808 == 0)) {
        CC_CREATE(int0, 5, int12++);
        CC_SETGRAPHIC(29655 as graphic);
        CC_SETSIZE(11, 11, 0, 0);
        CC_SETPOSITION(((CC_GETX[1]() + CC_GETWIDTH[1]()) - CC_GETWIDTH()), ((CC_GETY[1]() + CC_GETHEIGHT[1]()) - CC_GETHEIGHT()), 0, 0);
    };
    return;
}