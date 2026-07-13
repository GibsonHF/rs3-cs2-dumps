//
function script20751(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    IF_SETHIDE(false, comp(1512, 13));
    IF_SETSIZE(0, 30, 1, 0, comp(1512, 13));
    IF_SETSIZE(16, 36, 1, 1, int0);
    IF_SETSIZE(16, 36, 0, 1, int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    DB_LISTALL(369);
    dbrow_findnext();
    var int8 = stack();
    var int9 = 0;
    var int10 = 0;
    var int11 = IF_GETWIDTH(int0);
    var int12 = -1;
    var int13 = -1;
    var string0 = "";
    var int14 = 0;
    var int15 = 0;
    var int16 = -1;
    var string1 = "";
    var string2 = "";
    var int17 = 0;
    var string3 = "";
    var int18 = 0;
    var int19 = 0;
    var int20 = ((72 - 8) + 2);
    var int21 = (72 + 15);
    var int22 = script16260();
    while ((int8 != -1 as dbrow)) {
        int13 = dbrow_getfield(int8, 1511424, 0);
        string0 = dbrow_getfield(int8, 1511440, 0);
        int14 = dbrow_getfield(int8, 1511472, 0);
        int15 = dbrow_getfield(int8, 1511456, 0);
        int12 = dbrow_getfield(int8, 1511488, 0);
        if ((int22 == 0)) {
            if ((int8 == 19127 as dbrow)) {
                int16 = 18459;
                int14 = 0;
                string1 = `<col=777777><sprite=14154>${script12971(INT_TO_LONG(int14))}`;
                string2 = `<sprite=23771,16>${inttostring(int15, 10)}`;
                int17 = 0;
                string3 = `Cost: ${string1}<br>Level: ${string2}`;
            } else {
                int16 = 18460;
                string1 = `<col=777777><sprite=14154>${script12971(INT_TO_LONG(int14))}`;
                string2 = `<col=777777><sprite=23771,16>${inttostring(int15, 10)}`;
                int17 = 175;
                string3 = `Cost: <sprite=14154>${script17371(INT_TO_LONG(int14))}<br>Level: ${string2}<br>Not yet unlocked.`;
            };
        } else if ((STAT_BASE(22 as stat) >= int15)) {
            int16 = 18459;
            string1 = `<sprite=14154>${script17371(INT_TO_LONG(int14))}`;
            string2 = `<sprite=23771,16>${inttostring(int15, 10)}`;
            int17 = 0;
            string3 = `Cost: ${string1}<br>Level: ${string2}`;
        } else {
            int16 = 18460;
            string1 = `<col=777777><sprite=14154>${script12971(INT_TO_LONG(int14))}`;
            string2 = `<col=777777><sprite=23771,16>${inttostring(int15, 10)}`;
            int17 = 175;
            string3 = `Cost: <sprite=14154>${script17371(INT_TO_LONG(int14))}<br>Level: ${string2}<br>Not yet unlocked.`;
        };
        int18 = STRINGWIDTH(string1, 26 as fontmetrics);
        int19 = ((80 - int18) / 2);
        script7853(int2, int13, int9, int10, 0, 0, 80, int21, 0, 0, int16, "", 1, 1, 1, script6428(varbitclient_61230, int13));
        CC_SETOP(1, "Select");
        CC_SETONMOUSEREPEAT(callback(script14732, string0, string3, -2147483645, -2147483643));
        CC_SETONOP(callback(script20752, int0, int1, int2, int3, int4, int13, int6, int16));
        script2994(int3, int13, (int9 + 8), (int10 + 8), 0, 0, 63, 56, 0, 0, int12);
        CC_SETTRANS(int17);
        script2995(int4, int13, (int9 + int19), (int10 + int20), 0, 0, 63, 13, 0, 0, 2100, string1);
        int9 = ((int9 + 80) + 4);
        if (((int9 + 80) > int11)) {
            int9 = 0;
            int10 = ((int10 + int21) + 4);
        };
        dbrow_findnext();
        int8 = stack();
    };
    if ((int9 != 0)) {
        int10 = ((int10 + int21) + 4);
    };
    script19620(int1, int0, int10, int2, int5, int7, -1, -1);
    return;
}