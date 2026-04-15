//
function script12199(int0: inv, int1: int, int2: int, int3: unknown_int): void {
    var string0 = "";
    var int4 = INV_GETOBJ(int0, int1);
    if (((int4 == -1 as obj) || (OC_HASVAROBJ(int4) == 0))) {
        return;
    };
    var int5 = 0;
    if ((item_getparam(int4, 5524) == 3)) {
        int5 = 1;
    };
    if ((int3 == -1)) {
        if ((int5 == 1)) {
            var int3 = 0;
        } else {
            int3 = 1;
        };
    };
    var int6 = item_getparam(int4, 5527);
    if ((int6 == -1 as obj)) {
        int6 = int4;
    };
    var int7 = enum_getvalue(25, 0, 8584 as cs2enum, IF_GETFONTMETRICS(comp(1711, 7)));
    IF_SETTEXTALIGN(0, 3, int7, comp(1711, 7));
    IF_SETTEXT(OC_NAME(int6), comp(1711, 7));
    IF_SETOBJECT(int6, 1, comp(1711, 6));
    var int8 = INV_GETVAR(int0, int1, 30212);
    var int9 = script12071(int8);
    var int10 = 0;
    var int11 = 0;
    IF_SETTEXT(inttostring(int9, 10), comp(1711, 45));
    IF_SETTEXT(TOSTRING_LOCALISED(int8, 1), comp(1711, 46));
    string0 = `Current XP: ${TOSTRING_LOCALISED(int8, 1)}`;
    if ((int9 < script12072())) {
        int10 = script12074((int9 + 1));
        int11 = script12074(int9);
        string0 = `${string0}<br>Next level: ${TOSTRING_LOCALISED(int10, 1)}<br>Remainder: ${TOSTRING_LOCALISED((int10 - int8), 1)}`;
        IF_SETONMOUSEREPEAT(callback(), comp(1711, 33));
        IF_SETHIDE(0, 112132143);
        IF_SETHIDE(1, 112132149);
        IF_SETSIZE(SCALE((IF_GETWIDTH(112132143) - 2), (int10 - int11), (int8 - int11)), 0, 0, 1, 112132147);
    } else {
        IF_SETTEXT("-", comp(1711, 53));
        IF_SETHIDE(true, comp(1711, 47));
        IF_SETHIDE(false, comp(1711, 53));
        if ((int9 < 20)) {
            string0 = `${string0}<br>You do not know how to level a weapon above level ${inttostring(script12072(), 10)}.`;
        } else {
            string0 = `${string0}<br>This item has reached the maximum level.`;
        };
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 112132129);
    var int12 = varplayer_5991;
    if ((int3 == 0)) {
        int12 = int2;
        IF_SETTEXT("Drain rate:<br>This item", comp(1711, 19));
        if ((int5 == 1)) {
            string0 = "This section refers to drain rates when using this item for skilling.";
        } else {
            string0 = "This section refers to drain rates when using this item alone.";
        };
    } else {
        IF_SETTEXT("Drain rate:<br>Equipped items", comp(1711, 19));
        string0 = "This section refers to all currently equipped augmented equipment.";
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 112132115);
    if ((item_getparam(int4, 5772) == 1)) {
        IF_SETTEXT("Charges used:", comp(1711, 36));
        IF_SETTEXT(TOSTRING_LOCALISED(script670(int0, int1, int4), 1), comp(1711, 37));
        IF_SETTEXT(TOSTRING_LOCALISED(item_getparam(int4, 3385), 1), comp(1711, 41));
        IF_SETTEXT("n/a", comp(1711, 28));
        IF_SETHIDE(false, comp(1711, 38));
        string0 = `Once this item runs out of charge it will become broken. It is not possible to repair, only disassemble to gain item experience and materials.<br><br>Once all charges are used up, the item will be able to level up to ${TOSTRING_LOCALISED(MIN(10, script12072()), 1)}.`;
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 112132130);
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 112132134);
    } else {
        IF_SETTEXT("Charge drain:", comp(1711, 36));
        IF_SETTEXT(`${script12069(SCALE(int2, 6, 10), 2)}/s`, comp(1711, 37));
        IF_SETTEXT(`${script12069(SCALE(int12, 6, 10), 2)}/s`, comp(1711, 28));
        IF_SETHIDE(true, comp(1711, 38));
    };
    IF_SETTEXT(script12069(varplayer_5984, 0), comp(1711, 29));
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    if ((int12 > 0)) {
        IF_SETTEXT(script17049(int12, 7), comp(1711, 30));
        string0 = `Approximate time remaining: ${script17049(int12, 1)}`;
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 112132119);
    } else {
        IF_SETTEXT("n/a", comp(1711, 30));
        IF_SETONMOUSEREPEAT(callback(), comp(1711, 23));
    };
    string0 = `Maximum charge stored: ${script12069(script12067(), 0)}.`;
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 112132118);
    var int16 = 1;
    if ((int3 == 1)) {
        int16 = 0;
    };
    IF_SETONOP(callback(script12199, int0, int1, int2, int16), 112132155);
    var int17 = INV_GETVAR(int0, int1, 30215);
    var int18 = INV_GETVAR(int0, int1, 30216);
    var int19 = INV_GETVAR(int0, int1, 30217);
    var int20 = INV_GETVAR(int0, int1, 30218);
    var int21 = INV_GETVAR(int0, int1, 30219);
    var int22 = INV_GETVAR(int0, int1, 30220);
    var int23 = INV_GETVAR(int0, int1, 30221);
    var int24 = INV_GETVAR(int0, int1, 30222);
    IF_SETTEXT(script14926(INV_GETVAR(int0, int1, 47354)), 112132175);
    IF_SETTEXT(script14926(INV_GETVAR(int0, int1, 47355)), 112132192);
    stack(32768);
    stack(int17);
    DB_FIND(0);
    dbrow_findnext();
    var int25 = stack();
    stack(int25);
    stack(32864);
    stack(0);
    dbrow_getfield();
    var int26 = stack();
    script12201(int17, int18, 112132178, 112132179, 112132181, 0);
    if ((int26 > 1)) {
        script12201(int17, int18, 112132184, 112132185, comp(1711, 91), 1);
    } else {
        script12201(int19, int20, 112132184, 112132185, comp(1711, 91), 0);
    };
    stack(32768);
    stack(int21);
    DB_FIND(0);
    dbrow_findnext();
    int25 = stack();
    stack(int25);
    stack(32864);
    stack(0);
    dbrow_getfield();
    int26 = stack();
    script12201(int21, int22, 112132195, 112132196, 112132198, 0);
    if ((int26 > 1)) {
        script12201(int21, int22, 112132201, 112132202, comp(1711, 108), 1);
    } else {
        script12201(int23, int24, 112132201, 112132202, comp(1711, 108), 0);
    };
    var string1 = "<col=ffffff>";
    var string2 = "<col=aaaaaa>";
    string0 = `${string0}<br>Disassembling this item gives extra Invention XP at level 2 and above, increasing with item level.<br><br>It also gains the following:<br>`;
    if ((int9 >= 2)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 2: Disassembling this item has a 50% chance to return installed gizmos.</col><br>`;
    if ((int9 >= 3)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 3: Disassembling this item gives double materials.</col><br>`;
    if ((int9 >= 4)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 4: Disassembling this item never gives junk.</col><br>`;
    if ((int9 >= 5)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 5: This item drains 10% less charge when used.</col><br>`;
    if ((int9 >= 6)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 6: Disassembling this item gives triple materials</col><br>`;
    if ((int9 >= 7)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 7: Disassembling this item gives an extra random uncommon material.</col><br>`;
    if ((int9 >= 8)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 8: Disassembling this item returns all installed gizmos.</col><br>`;
    if ((int9 >= 9)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 9: Disassembling this item gives quadruple materials.</col><br>`;
    if ((int9 >= 10)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 10: Disassembling this item gives the maximum extra Invention XP.</col><br>`;
    if ((int9 >= 12)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 12: Siphoning this item gives the maximum extra Invention XP.</col><br>`;
    if ((int9 >= 13)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 13: Siphoning this item has a 50% chance to not consume the siphon.</col><br>`;
    if ((int9 >= 14)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 14: This item drains 12.5% less charge when used.</col><br>`;
    if ((int9 >= 15)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 15: This item can now be used with an Equipment separator.</col><br>`;
    if ((int9 >= 16)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 16: Siphoning this item will no longer consume the siphon.</col><br>`;
    if ((int9 >= 17)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 17: Using the Equipment separator on this item has a 25% chance to not consume the separator.</col><br>`;
    if ((int9 >= 18)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 18: This item drains 15% less charge when used.</col><br>`;
    if ((int9 >= 19)) {
        string0 = `${string0}${string1}`;
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 19: Using the Equipment separator on this item has a 50% chance to not consume the separator.</col><br>`;
    var string3 = "";
    if ((int9 >= 20)) {
        string0 = `${string0}${string1}`;
        if ((script20178(script12076(int17)) == true)) {
            IF_SETHIDE(false, comp(1711, 84));
            IF_SETPOSITION(55, 0, 0, 0, comp(1711, 85));
            string3 = `${script12078(script12076(int17), int18)} has a 10% increased chance to activate!`;
            IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -1), 112132180);
        };
        if ((script20178(script12076(int19)) == true)) {
            IF_SETHIDE(false, comp(1711, 90));
            IF_SETPOSITION(55, 0, 0, 0, comp(1711, 91));
            string3 = `${script12078(script12076(int19), int20)} has a 10% increased chance to activate!`;
            IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -1), 112132186);
        };
        if ((script20178(script12076(int21)) == true)) {
            IF_SETHIDE(false, comp(1711, 101));
            IF_SETPOSITION(55, 0, 0, 0, comp(1711, 102));
            string3 = `${script12078(script12076(int21), int22)} has a 10% increased chance to activate!`;
            IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -1), 112132197);
        };
        if ((script20178(script12076(int23)) == true)) {
            IF_SETHIDE(false, comp(1711, 107));
            IF_SETPOSITION(55, 0, 0, 0, comp(1711, 108));
            string3 = `${script12078(script12076(int23), int24)} has a 10% increased chance to activate!`;
            IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -1), 112132203);
        };
    } else {
        string0 = `${string0}${string2}`;
    };
    string0 = `${string0}Level 20: Helpful perks will activate 10% more frequently.</col><br>`;
    IF_SETONOP(callback(script1259), comp(1711, 13));
    IF_SETTEXT(string0, 112132167);
    var int27 = 26;
    if ((script6431() == 1)) {
        int27 = 28 as fontmetrics;
    };
    IF_SETTEXTFONT(int27, comp(1711, 71));
    IF_SETSCROLLSIZE(IF_GETWIDTH(comp(1711, 70)), (10 + script7593(string0, IF_GETWIDTH(comp(1711, 70)), int27, 0)), comp(1711, 70));
    script7791(comp(1711, 72), comp(1711, 70));
    if ((script12066(int6) == 1)) {
        IF_SETPOSITION(83, 0, 0, 0, comp(1711, 64));
        IF_SETHIDE(true, comp(1711, 93));
    } else {
        IF_SETPOSITION(0, 0, 0, 0, comp(1711, 64));
        IF_SETHIDE(false, comp(1711, 93));
    };
    return;
}