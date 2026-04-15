//
function script12158(int0: obj, int1: component, int2: component): void {
    CC_DELETEALL(int1);
    var int3 = 0;
    var int4 = 1;
    var int5 = -1;
    var int6 = -1 as cs2enum;
    if ((int0 != -1 as obj)) {
        int5 = item_getparam(int0, 7208);
        int6 = item_getparam(int0, 8345);
        if ((item_getparam(int0, 8344) == true)) {
            int3 = 1;
            int4 = 0;
        };
    };
    var int7 = -1 as dbrow;
    var int8 = 0;
    var int9 = ENUM_GETOUTPUTCOUNT(10742 as cs2enum);
    var int10 = 0;
    define_array(int9);
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 5;
    var int17 = 5;
    while ((int10 < int9)) {
        CC_CREATE(int1, 5, int10);
        CC_SETHIDE(true);
        int7 = enum_getvalue(0, 74, 10742 as cs2enum, int10);
        if ((((int3 == 1) || (script12053(int7) > 0)) && ((int6 == -1 as cs2enum) || (enum_hasoutput(74, int6, int7) == 1)))) {
            pop_array(int8, int10);
            int8 = (int8 + 1);
            CC_SETPARAM_STRING(5441, LOWERCASE(dbrow_getfield(int7, 16400, 0)));
            cc_setparam(5529, int7);
            switch (dbrow_getfield(int7, 16496, 0)) {
                case 2: {
                    cc_setparam(5535, 2);
                    int11 = (int11 + 1);
                    break;
                }
                case 6:
                case 3: {
                    cc_setparam(5535, 3);
                    int12 = (int12 + 1);
                    break;
                }
                case 4: {
                    cc_setparam(5535, 4);
                    int13 = (int13 + 1);
                    break;
                }
                case 5: {
                    cc_setparam(5535, 5);
                    int14 = (int14 + 1);
                    break;
                }
                default: {
                    cc_setparam(5535, -1);
                    int15 = (int15 + 1);
                    break;
                }
            };
        };
        int10 = (int10 + 1);
    };
    if ((int8 == 0)) {
        CC_CREATE[1](int1, 4, IF_GETNEXTSUBID(int1));
        CC_SETSIZE[1](int16, 30, 1, 0);
        CC_SETPOSITION[1](int16, 5, 0, 0);
        CC_SETTEXTALIGN[1](0, 1, 0);
        CC_SETTEXT[1]("No Materials");
        script12108(3);
        CC_SETTEXTFONT[1](57 as fontmetrics);
        CC_CREATE[1](int1, 4, IF_GETNEXTSUBID(int1));
        CC_SETSIZE[1](int16, 30, 1, 0);
        CC_SETPOSITION[1](int16, 40, 0, 0);
        CC_SETTEXTALIGN[1](0, 1, 0);
        CC_SETTEXT[1]("You do not have any materials at the moment.<br><br>Materials are gained by disassembling items.");
        script12108(3);
        CC_SETTEXTFONT[1](27 as fontmetrics);
        return;
    };
    script17567(0, int1, 0, (int8 - 1));
    IF_SETSIZE(0, 0, 1, 1, int1);
    var int18 = 0;
    var int19 = 40;
    var int20 = 60;
    if ((int4 == 0)) {
        int20 = 40;
    };
    var int21 = 0;
    var int22 = 40;
    [int21, int22, int16] = script12087(IF_GETWIDTH(int1), int19, 5, 5);
    var int23 = (((((((int11 + int21) - 1) / int21) + (((int12 + int21) - 1) / int21)) + (((int13 + int21) - 1) / int21)) + (((int14 + int21) - 1) / int21)) + (((int15 + int21) - 1) / int21));
    var int24 = 0;
    if ((int11 > 0)) {
        int24 = (int24 + 1);
    };
    if ((int12 > 0)) {
        int24 = (int24 + 1);
    };
    if ((int13 > 0)) {
        int24 = (int24 + 1);
    };
    if ((int14 > 0)) {
        int24 = (int24 + 1);
    };
    if ((int15 > 0)) {
        int24 = (int24 + 1);
    };
    int24 = (int24 * 30);
    if ((IF_GETHEIGHT(int1) < (((int23 * (int20 + int17)) + int17) + int24))) {
        IF_SETSIZE(16, 0, 1, 1, int1);
        int18 = 1;
        [int21, int22, int16] = script12087(IF_GETWIDTH(int1), int19, 5, 5);
        int23 = (((((((int11 + int21) - 1) / int21) + (((int12 + int21) - 1) / int21)) + (((int13 + int21) - 1) / int21)) + (((int14 + int21) - 1) / int21)) + (((int15 + int21) - 1) / int21));
        IF_SETSCROLLSIZE(0, (((int23 * (int20 + int17)) + int17) + int24), int1);
        script7791(int2, int1);
        IF_SETHIDE(false, int2);
    } else {
        IF_SETHIDE(true, int2);
    };
    var int25 = 0;
    var int26 = 0;
    var int27 = 0;
    var int28 = 0;
    var int29 = 0;
    var int30 = 0;
    var int31 = int17;
    if ((int11 > 0)) {
        script12159(int1, int16, int31, "Common materials");
        int25 = (int31 + 30);
        int31 = ((int31 + 30) + ((((int11 + int21) - 1) / int21) * (int20 + int17)));
    };
    if ((int12 > 0)) {
        script12159(int1, int16, int31, "Uncommon materials");
        int26 = (int31 + 30);
        int31 = ((int31 + 30) + ((((int12 + int21) - 1) / int21) * (int20 + int17)));
    };
    if ((int13 > 0)) {
        script12159(int1, int16, int31, "Rare materials");
        int27 = (int31 + 30);
        int31 = ((int31 + 30) + ((((int13 + int21) - 1) / int21) * (int20 + int17)));
    };
    if ((int14 > 0)) {
        script12159(int1, int16, int31, "Ancient materials");
        int28 = (int31 + 30);
        int31 = ((int31 + 30) + ((((int14 + int21) - 1) / int21) * (int20 + int17)));
    };
    if ((int15 > 0)) {
        script12159(int1, int16, int31, "Other materials");
        int29 = (int31 + 30);
        int31 = ((int31 + 30) + ((((int15 + int21) - 1) / int21) * (int20 + int17)));
    };
    int11 = 0;
    int12 = 0;
    int13 = 0;
    int14 = 0;
    int15 = 0;
    var int32 = 0;
    var int33 = 0;
    var string0 = "null";
    var int34 = 0;
    var int35 = 0;
    var int36 = 0;
    var int37 = 0;
    var int38 = -1;
    var string1 = "";
    var int39 = -1;
    int10 = 0;
    while ((int10 < int8)) {
        if ((CC_FIND(int1, push_array(int10)) == 1)) {
            int7 = cc_getparam(5529);
            int32 = script12054(dbrow_getfield(int7, 16384, 0));
            int34 = script12057(int7);
            int39 = cc_getparam(5535);
            switch (int39) {
                case 2: {
                    int33 = int11++;
                    int31 = int25;
                    break;
                }
                case 3: {
                    int33 = int12++;
                    int31 = int26;
                    break;
                }
                case 4: {
                    int33 = int13++;
                    int31 = int27;
                    break;
                }
                case 5: {
                    int33 = int14++;
                    int31 = int28;
                    break;
                }
                default: {
                    int33 = int15++;
                    int31 = int29;
                    break;
                }
            };
            int30 = (int16 + (MODULO(int33, int21) * int22));
            int31 = (int31 + ((int33 / int21) * (int20 + int17)));
            CC_CREATE[1](int1, 5, IF_GETNEXTSUBID(int1));
            CC_SETPOSITION[1](int30, int31, 0, 0);
            CC_SETGRAPHIC[1](26557 as graphic);
            CC_SETSIZE[1](40, 40, 0, 0);
            CC_SETSIZE(32, 32, 0, 0);
            CC_SETPOSITION((int30 + 4), (int31 + 4), 0, 0);
            CC_SETGRAPHIC(dbrow_getfield(int7, 16448, 0));
            if ((int34 == 1)) {
                CC_SETHIDE(false);
            } else {
                CC_SETHIDE(true);
            };
            CC_CREATE[1](int1, 5, IF_GETNEXTSUBID(int1));
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETGRAPHIC[1](CC_GETGRAPHIC());
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            if ((int34 == 0)) {
                CC_SETTRANS[1](178);
            };
            string1 = dbrow_getfield(int7, 16400, 0);
            string0 = `${dbrow_getfield(int7, 16400, 0)}<br><br>${dbrow_getfield(int7, 16416, 0)}`;
            if ((int4 == 1)) {
                string0 = `${TOSTRING_LOCALISED(int32, 1)} x ${string0}`;
            };
            if ((DB_GETFIELDCOUNT(int7, 16432) > 0)) {
                string0 = `${string0}<br><br>Disassembly sources: ${dbrow_getfield(int7, 16432, 0)}`;
            };
            if ((int34 == 0)) {
                string0 = `${string0}<br><br><col=FF0000>You need to research this material before you can use it in a gizmo.`;
            };
            switch (int39) {
                case 5: {
                    if ((int5 == 1)) {
                        string0 = `${string0}<br><br>This material can only be used in ancient gizmos.</col>`;
                    } else {
                        string0 = `${string0}<br><br><col=FF0000>This material can only be used in ancient gizmos.</col>`;
                    };
                    break;
                }
            };
            if ((int1 == comp(1709, 1))) {
                CC_SETONCLICK[1](callback(script6558, string1, string0));
            };
            int37 = DB_GETFIELDCOUNT(int7, 16560);
            if ((int37 > 0)) {
                string0 = `${string0}<br><br>Armour Perks :`;
            } else {
                string0 = `${string0}<br><br>Armour Perks : None`;
            };
            while ((int37 > 0)) {
                [int35, int36, int36] = dbrow_getfield(int7, 16560, (int37 - 1));
                stack(32768);
                stack(int35);
                DB_FIND(0);
                dbrow_findnext();
                int38 = stack();
                stack(string0);
                stack(" ");
                stack(int38);
                stack(32784);
                stack(0);
                dbrow_getfield();
                string0 = `${stack()}`;
                if ((int37 > 1)) {
                    string0 = `${string0},`;
                };
                int37 = (int37 - 1);
            };
            int37 = DB_GETFIELDCOUNT(int7, 16544);
            if ((int37 > 0)) {
                string0 = `${string0}<br><br>Weapon Perks :`;
            } else {
                string0 = `${string0}<br><br>Weapon Perks : None`;
            };
            while ((int37 > 0)) {
                [int35, int36, int36] = dbrow_getfield(int7, 16544, (int37 - 1));
                stack(32768);
                stack(int35);
                DB_FIND(0);
                dbrow_findnext();
                int38 = stack();
                stack(string0);
                stack(" ");
                stack(int38);
                stack(32784);
                stack(0);
                dbrow_getfield();
                string0 = `${stack()}`;
                if ((int37 > 1)) {
                    string0 = `${string0},`;
                };
                int37 = (int37 - 1);
            };
            int37 = DB_GETFIELDCOUNT(int7, 16576);
            if ((int37 > 0)) {
                string0 = `${string0}<br><br>Tool Perks :`;
            } else {
                string0 = `${string0}<br><br>Tool Perks : None`;
            };
            while ((int37 > 0)) {
                [int35, int36, int36] = dbrow_getfield(int7, 16576, (int37 - 1));
                stack(32768);
                stack(int35);
                DB_FIND(0);
                dbrow_findnext();
                int38 = stack();
                stack(string0);
                stack(" ");
                stack(int38);
                stack(32784);
                stack(0);
                dbrow_getfield();
                string0 = `${stack()}`;
                if ((int37 > 1)) {
                    string0 = `${string0},`;
                };
                int37 = (int37 - 1);
            };
            CC_SETONMOUSEREPEAT[1](callback(script3876, string0, -2147483645, CC_GETID[1]()));
            CC_SETONCLICK(callback(script6558, string1, string0));
            CC_SENDTOFRONT();
            if ((int4 == 1)) {
                if ((int32 >= 10000000)) {
                    string0 = `${inttostring((int32 / 1000000), 10)}M`;
                } else if ((int32 >= 10000)) {
                    string0 = `${inttostring((int32 / 1000), 10)}K`;
                } else {
                    string0 = inttostring(int32, 10);
                };
                CC_CREATE[1](int1, 4, IF_GETNEXTSUBID(int1));
                CC_SETSIZE[1](40, 15, 0, 0);
                CC_SETPOSITION[1](int30, ((int31 + int20) - 15), 0, 0);
                CC_SETTEXTALIGN[1](1, 1, 0);
                CC_SETTEXT[1](string0);
                CC_SETCOLOUR[1](16777215);
                CC_SETTEXTFONT[1](27 as fontmetrics);
            };
        };
        int10 = (int10 + 1);
    };
    return;
}