//
function script12332(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int0);
    CC_DELETEALL(comp(1682, 3));
    CC_DELETEALL(comp(1682, 4));
    CC_DELETEALL(comp(1682, 5));
    CC_DELETEALL(comp(1682, 6));
    var int1 = IF_GETLAYER(comp(1682, 5));
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int1);
    var int2 = 0;
    var int3 = 0;
    var int4 = comp(-1, 65535);
    var int5 = 0;
    var int6 = 0;
    [int4, int5, int5, int6, int5] = script12343(33122 as struct, script12293(1682 as overlayinterface));
    CC_CREATE(int0, 4, int3++);
    CC_SETTEXTFONT(58 as fontmetrics);
    CC_SETTEXT("Settings");
    CC_SETPOSITION(0, int2, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), 1000, CC_GETFONTMETRICS(), 0), 1, 0);
    CC_SETCOLOUR(script10495(0));
    int2 = (int2 + (CC_GETHEIGHT() + 8));
    var int7 = 10871 as cs2enum;
    var int8 = ENUM_GETOUTPUTCOUNT(int7);
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int9 = 0;
    var int10 = false;
    int3 = 0;
    while ((int3 < int8)) {
        [string0, string1, int9, int10, string2] = script11839(int7, int3);
        [int2, int3] = script10419(comp(1682, 3), comp(1682, 4), 0, int2, int6, int3, string0, string1, string1, string2, int9, int10, 1, 41495 as struct);
        int2 = (int2 + 2);
    };
    CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXT("Choose data interval:");
    CC_SETSIZE(200, 20, 0, 0);
    CC_SETPOSITION(0, int2, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    int2 = (int2 + (CC_GETHEIGHT() + 0));
    var int11 = 0;
    if ((varplayer_5884 == 2 as telemetry_interval)) {
        int11 = 1;
    } else if ((varplayer_5884 == 1 as telemetry_interval)) {
        int11 = 2;
    };
    [int2, int3] = script10429(comp(1682, 5), comp(1682, 6), 0, int2, int6, IF_GETNEXTSUBID(comp(1682, 5)), 10373 as cs2enum, 10294, "Select which time interval you wish to show data for.", int11, 0);
    int2 = (int2 + 2);
    CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXT("Hide rows after period of inactivity:");
    CC_SETSIZE(200, 20, 0, 0);
    CC_SETPOSITION(0, int2, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    int2 = (int2 + (CC_GETHEIGHT() + 0));
    [int2, int3] = script10429(comp(1682, 5), comp(1682, 6), 0, int2, int6, int3, 10374 as cs2enum, -1, "Select the inactivity period for which to automatically hide rows from the tracker.", varbitplayer_29532, 0);
    int2 = (int2 + 2);
    CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXT("Maximum skill rows:");
    CC_SETSIZE(200, 20, 0, 0);
    CC_SETPOSITION(0, int2, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    int2 = (int2 + (CC_GETHEIGHT() + 0));
    [int2, int3] = script10429(comp(1682, 5), comp(1682, 6), 0, int2, int6, int3, 10874 as cs2enum, -1, "Select the number of skills rows you'd like to display at any one time. If this is lower than your current number of pinned rows you will have to remove them manually. Otherwise rows above the limit will be removed the next time a new row is added.", (varbitplayer_30616 - 1), 0);
    return;
}