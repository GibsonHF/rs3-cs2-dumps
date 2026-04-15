//
function script17804(int0: dbrow): void {
    var int1 = 0;
    var int2 = comp(1224, 24);
    var int3 = comp(1224, 25);
    var int4 = IF_GETWIDTH(int2);
    var int5 = -1 as obj;
    var int6 = 0;
    var int7 = script17505(int0);
    var int8 = 0;
    var int9 = 2;
    var int10 = 0;
    var int11 = 0;
    var int12 = -1;
    CC_DELETEALL(int2);
    if ((int7 <= 1)) {
        IF_SETTEXT("Input", comp(1224, 22));
        [int5, int6] = script17504(int0, -1, 0);
        int10 = INV_TOTAL(942 as inv, int5);
        int11 = script2515(93 as inv, int5);
        if (((int10 < int6) && (int11 < int6))) {
            int9 = 5;
        };
        int1 = (int1 + script17812(int2, int1, 2100 as dbrow, -1 as graphic, int5, `${inttostring(int6, 10)} ${OC_NAME(int5)}`, int9, 30593 as graphic));
        script3537(`${inttostring(int10, 10)} in focus storage<br>${inttostring(int11, 10)} in backpack`);
    } else {
        IF_SETTEXT("Input (select an option)", comp(1224, 22));
        script17634(int2, 0, 0, 0, 0, 0, 18, (int7 * (18 + 4)), 0, 0, 7570 as dbrow);
        CC_SETONVARTRANSMIT(callback(script17805, int0, 11181, 1));
        while ((++int12 < int7)) {
            [int5, int6] = script17504(int0, -1, int12);
            int8 = script17503(int0, int12);
            int10 = INV_TOTAL(942 as inv, int5);
            int11 = script2515(93 as inv, int5);
            int9 = 2;
            if (((int10 < int6) && (int11 < int6))) {
                int9 = 5;
            };
            script9731(int2, IF_GETNEXTSUBID(int2), (18 + 4), int1, 0, 0, 18, 18, 0, 0, int5, -1);
            script2995(int2, IF_GETNEXTSUBID(int2), ((18 + 18) + 4), int1, 0, 0, ((int4 - 18) - 18), 18, 0, 0, 2100 as dbrow, script3930(` ${inttostring(int6, 10)} ${OC_NAME(int5)}`, (((int4 - 18) - 18) - 4), 1, 207 as fontmetrics));
            CC_SETTEXTFONT(207 as fontmetrics);
            script2731(int2, CC_GETID(), int9);
            script3537(`${inttostring(int10, 10)} in focus storage<br>${inttostring(int11, 10)} in backpack`);
            int1 = (int1 + (CC_GETHEIGHT() + 4));
            if ((CC_FIND(int2, 0) == 1)) {
                stack(int8);
                stack("");
                CC_RADIOGROUP_ADDOPTION();
                if ((int8 == varplayer_11181)) {
                    CC_RADIOGROUP_SETOPTIONSELECTED(int8, 1, 1);
                } else {
                    CC_RADIOGROUP_SETOPTIONSELECTED(int8, 0, 1);
                };
            };
        };
    };
    int12 = -1;
    if ((IF_GETHEIGHT(int2) < int1)) {
        IF_SETHIDE(false, int3);
        IF_SETSCROLLSIZE(0, int1, int2);
        script7791(int3, int2);
    } else {
        IF_SETHIDE(true, int3);
        IF_SETSCROLLSIZE(0, 0, int2);
    };
    return;
}