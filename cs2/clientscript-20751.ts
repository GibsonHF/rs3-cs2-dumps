//
function script20751(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    IF_SETHIDE(false, comp(1512, 14));  // house_furniture_catalogue:items_scrolling
    IF_SETSIZE(0, 30, 1, 0, comp(1512, 14));  // house_furniture_catalogue:items_scrolling
    IF_SETSIZE(16, 36, 1, 1, int0);
    IF_SETSIZE(16, 36, 0, 1, int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int5);
    DB_LISTALL(369);
    var int9 = dbrow_findnext();
    var int10 = 0;
    var int11 = 0;
    var int12 = IF_GETWIDTH(int0);
    var int13 = -1;
    var int14 = -1;
    var string0 = "";
    var int15 = 0;
    var int16 = 0;
    var int17 = -1;
    var string1 = "";
    var string2 = "";
    var int18 = 0;
    var string3 = "";
    var int19 = 0;
    var int20 = 0;
    var int21 = ((72 - 8) + 2);
    var int22 = (72 + 15);
    var int23 = script16260();
    while ((int9 != -1)) {
        int14 = dbrow_getfield(int9, 1511424, 0);
        string0 = dbrow_getfield(int9, 1511440, 0);
        int15 = dbrow_getfield(int9, 1511472, 0);
        int16 = dbrow_getfield(int9, 1511456, 0);
        int13 = dbrow_getfield(int9, 1511488, 0);
        if ((int23 == 0)) {
            if ((int9 == 19127)) {
                int17 = 18459;
                int15 = 0;
                string1 = `<col=777777><sprite=14154>${script12971(INT_TO_LONG(int15))}`;
                string2 = `<sprite=23771,16>${inttostring(int16, 10)}`;
                int18 = 0;
                string3 = `Cost: ${string1}<br>Level: ${string2}`;
            } else {
                int17 = 18460;
                string1 = `<col=777777><sprite=14154>${script12971(INT_TO_LONG(int15))}`;
                string2 = `<col=777777><sprite=23771,16>${inttostring(int16, 10)}`;
                int18 = 175;
                string3 = `Cost: <sprite=14154>${script17371(INT_TO_LONG(int15))}<br>Level: ${string2}<br>Not yet unlocked.`;
            };
        } else if ((STAT_BASE(22 as stat) >= int16)) {
            int17 = 18459;
            string1 = `<sprite=14154>${script17371(INT_TO_LONG(int15))}`;
            string2 = `<sprite=23771,16>${inttostring(int16, 10)}`;
            int18 = 0;
            string3 = `Cost: ${string1}<br>Level: ${string2}`;
        } else {
            int17 = 18460;
            string1 = `<col=777777><sprite=14154>${script12971(INT_TO_LONG(int15))}`;
            string2 = `<col=777777><sprite=23771,16>${inttostring(int16, 10)}`;
            int18 = 175;
            string3 = `Cost: <sprite=14154>${script17371(INT_TO_LONG(int15))}<br>Level: ${string2}<br>Not yet unlocked.`;
        };
        int19 = STRINGWIDTH(string1, 26 as fontmetrics);
        int20 = ((80 - int19) / 2);
        script7853(int2, int14, int10, int11, 0, 0, 80, int22, 0, 0, int17, "", 1, 1, 1, script6428(varbitclient_61230, int14));
        CC_SETOP(1, "Select");
        CC_SETONMOUSEREPEAT(callback(script14732, string0, string3, -2147483645, -2147483643));
        CC_SETONOP(callback(script20752, int0, int1, int2, int3, int4, int5, int14, int7, int17));
        script2994(int3, int14, (int10 + 8), (int11 + 8), 0, 0, 63, 56, 0, 0, int13);
        CC_SETTRANS(int18);
        script2995(int4, int14, (int10 + int20), (int11 + int21), 0, 0, 63, 13, 0, 0, 2100, string1);
        int10 = ((int10 + 80) + 4);
        if (((int10 + 80) > int12)) {
            int10 = 0;
            int11 = ((int11 + int22) + 4);
        };
        int9 = dbrow_findnext();
    };
    if ((int10 != 0)) {
        int11 = ((int11 + int22) + 4);
    };
    script19620(int1, int0, int11, int2, int6, int8, -1, -1);
    return;
}