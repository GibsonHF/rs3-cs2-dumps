//[clientscript,gravestone_shop_select]
function script687(int0: int, int1: component, int2: int, int3: component, int4: component, int5: component, int6: component, int7: component, int8: component): void {
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    var int9 = 0;
    while ((int9 <= 27)) {
        if ((CC_FIND(int1, (int9 * 2)) == 1)) {
            CC_SETTRANS(200);
        };
        int9 = (int9 + 1);
    };
    if ((CC_FIND(int1, int2) == 1)) {
        CC_SETTRANS(150);
    };
    IF_SETTEXT(enum_getvalue(0, 36, 1099 as cs2enum, int0), int7);
    var int10 = enum_getvalue(0, 32, 1098 as cs2enum, int0);
    var int11 = 0;
    var int12 = 0;
    var string0 = enum_getvalue(0, 36, 1100 as cs2enum, int0);
    var string1 = "";
    if ((int10 != -1 as npc)) {
        int9 = npc_getparam(int10, 356);
        int11 = (int9 / 100);
        int12 = SCALE(MODULO(int9, 100), 100, 60);
        if ((int12 < 10)) {
            string0 = `${string0}<br><br>Initial duration: ${inttostring(int11, 10)}:0${inttostring(int12, 10)}`;
        } else {
            string0 = `${string0}<br><br>Initial duration: ${inttostring(int11, 10)}:${inttostring(int12, 10)}`;
        };
        switch (int0) {
            case 0: {
                break;
            }
            case 1:
            case 2: {
                string0 = `${string0}<br>Reduces reclaim costs by 1%`;
                break;
            }
            case 3: {
                string0 = `${string0}<br>Reduces reclaim costs by 2%`;
                break;
            }
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11: {
                string0 = `${string0}<br>Reduces reclaim costs by 3%`;
                break;
            }
            case 12: {
                string0 = `${string0}<br>Reduces reclaim costs by 4%`;
                break;
            }
            case 13: {
                string0 = `${string0}<br>Reduces reclaim costs by 5%`;
                break;
            }
        };
    };
    IF_SETTEXT(string0, int8);
    var int13 = script17401();
    int9 = enum_getvalue(0, 0, 1101 as cs2enum, int0);
    if ((int9 < 0)) {
        IF_SETTEXT("<col=ff0000>Unavailable</col>", int5);
        return;
    };
    if ((int9 == 0)) {
        string0 = "(No charge)";
        string1 = string0;
    } else if ((int9 == 1)) {
        if ((int13 > 0)) {
            string0 = "1 coin";
            string1 = string0;
        } else {
            string0 = "<col=ff0000>1 coin</col>";
            string1 = string0;
        };
    } else {
        string0 = TOSTRING_LOCALISED(int9, 1);
        string1 = string0;
        if ((int13 < int9)) {
            string0 = `<col=ff0000>${string0}`;
        };
        if ((int13 < (int9 / 2))) {
            string1 = `<col=ff0000>${string1}`;
        };
    };
    IF_SETTEXT(string0, int5);
    IF_SETTEXT(string1, int6);
    int9 = 0;
    var int14 = -1;
    if ((int0 >= 0)) {
        IF_CLEAROPS(int3);
        IF_CLEAROPS(int4);
    };
    while ((int9 <= 27)) {
        CC_CREATE(int3, 5, int9);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(IF_GETWIDTH(int3), IF_GETHEIGHT(int3), 0, 0);
        if ((int9 == int0)) {
            CC_SETOP(1, "Confirm:");
            CC_SETOPBASE(`<col=ff9040>${enum_getvalue(0, 36, 1099 as cs2enum, int0)}</col>`);
        } else {
            CC_SETHIDE(true);
        };
        CC_CREATE(int4, 5, int9);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(IF_GETWIDTH(int3), IF_GETHEIGHT(int3), 0, 0);
        if ((int9 == int0)) {
            CC_SETOP(1, "Confirm:");
            CC_SETOPBASE(`<col=ff9040>${enum_getvalue(0, 36, 1099 as cs2enum, int0)}</col>`);
        } else {
            CC_SETHIDE(true);
        };
        int9 = (int9 + 1);
    };
    return;
}