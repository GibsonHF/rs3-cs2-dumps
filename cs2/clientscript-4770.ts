//
function script4770(int0: component, int1: int, int2: int, int3: int, int4: unknown_int, int5: int): int {
    var int6 = (int1 / 8);
    var int7 = 38;
    var int8 = 7438 as graphic;
    var int9 = 5465 as graphic;
    var int10 = -1 as graphic;
    var string0 = "";
    var int11 = 0;
    var int12 = 0;
    var int13 = (varbitclan_6507 - varbitclan_6556);
    var int14 = 0;
    var string1 = "";
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    if (((int2 < 1) || (int2 > 900))) {
        return 0;
    };
    [int10, string0, int11, int12, int14, int15, int16, int17] = script4791(int2);
    CC_CREATE(int0, 3, int1);
    CC_SETPOSITION(2, (int7 * int6), 0, 0);
    CC_SETSIZE(4, int7, 1, 0);
    if ((MODULO(int6, 2) == 0)) {
        CC_SETCOLOUR(1578773);
    } else {
        CC_SETCOLOUR(2170652);
    };
    CC_SETFILL(1);
    CC_SETOP(1, "Details for");
    CC_SETONOP(callback(script4776, int2, int6, int5));
    CC_SETONVARCTRANSMIT(callback(script4773, int2, int6, int5, 1560, 1));
    var int18 = (int1 + 1);
    CC_SETONMOUSEOVER(callback(script4779, int0, int18, 1));
    CC_SETONMOUSELEAVE(callback(script4779, int0, int18, 0));
    CC_SETDRAGGABLE(int0, -1);
    CC_SETDRAGDEADZONE(8);
    if ((script13749() == 0)) {
        CC_SETDRAGRENDERBEHAVIOUR(3);
        CC_SETDRAGDEADTIME(30);
    } else {
        CC_SETDRAGRENDERBEHAVIOUR(0);
        CC_SETDRAGDEADTIME(5);
    };
    CC_SETOPBASE(string0);
    var int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(int9);
    CC_SETSIZE(4, int7, 1, 0);
    CC_SETPOSITION(2, (int7 * int6), 0, 0);
    CC_SETHIDE(true);
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETPOSITION(8, (3 + (int7 * int6)), 0, 0);
    CC_SETSIZE(32, 32, 0, 0);
    CC_SETGRAPHIC(int8);
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETPOSITION(9, (4 + (int7 * int6)), 0, 0);
    CC_SETGRAPHIC(int10);
    if ((((int2 == 16) || (int2 == 17)) || (int2 == 18))) {
        CC_SET2DANGLE(49149);
    };
    CC_SETSIZE(30, 30, 0, 0);
    int1 = (int1 + 1);
    CC_CREATE(int0, 4, int1);
    CC_SETPOSITION(48, (int7 * int6), 0, 0);
    CC_SETSIZE(92, int7, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 16);
    CC_SETCOLOUR(13680808);
    var int19 = int11;
    if (((int2 > 300) && (int2 < 600))) {
        int19 = (int19 - int12);
    };
    var string2 = "";
    if ((int15 == 5)) {
        if ((int19 == 1)) {
            string2 = "(Basic)";
        } else if ((int19 == 2)) {
            string2 = "(Medium)";
        } else if ((int19 == 3)) {
            string2 = "(Grand)";
        };
    } else {
        string2 = `(Tier ${inttostring(int19, 10)})`;
    };
    CC_SETTEXT(`${string0}<br>${string2}`);
    int1 = (int1 + 1);
    CC_CREATE(int0, 4, int1);
    CC_SETTEXT(`${inttostring(int3, 10)}%`);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 16);
    CC_SETSIZE(34, int7, 0, 0);
    CC_SETPOSITION(21, (int7 * int6), 2, 0);
    if ((int2 < 300)) {
        CC_SETHIDE(true);
    } else {
        CC_SETHIDE(false);
    };
    if ((int3 < 100)) {
        CC_SETCOLOUR(8797740);
    } else if ((int4 == 1)) {
        CC_SETCOLOUR(4416367);
    } else if ((int4 == 2)) {
        CC_SETCOLOUR(2837036);
    } else if ((int4 == 3)) {
        CC_SETCOLOUR(9926727);
    } else if ((int4 == 0)) {
        CC_SETCOLOUR(13680808);
        CC_SETTEXT("N/A");
    };
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    if (((int2 > 300) && (int2 < 600))) {
        if ((int3 < 100)) {
            CC_SETHIDE(false);
            CC_SETPOSITION(5, (12 + (int7 * int6)), 2, 0);
            CC_SETSIZE(15, 15, 0, 0);
            CC_SETGRAPHIC(7542 as graphic);
            if ((int15 == 1)) {
                if ((int14 == 0)) {
                    string1 = "Your citadel will become dilapidated this tick!";
                } else if (((int14 == 1) && (int11 > 1))) {
                    string1 = "Your citadel will lose a tier this tick. You may lose tiers on other buildings!";
                } else if ((int14 == 1)) {
                    string1 = "Your citadel will accrue double upkeep this tick.";
                } else if ((int14 > 1)) {
                    string1 = "Your citadel owes double upkeep this tick.";
                };
            } else if ((int14 == 0)) {
                string1 = "This building will become dilapidated this tick.";
            } else if (((int14 == 1) && (int11 > 1))) {
                string1 = "This building will lose a tier this tick!";
            } else if ((int14 == 1)) {
                string1 = "This building will accrue double upkeep this tick.";
            } else if ((int14 > 1)) {
                string1 = "This building owes double upkeep this tick.";
            };
            CC_SETONMOUSEOVER(callback(script4781, int0, -2147483643, 1));
            CC_SETONMOUSEREPEAT(callback(script4783, string1, int0, -2147483643));
            CC_SETONMOUSELEAVE(callback(script4781, int0, -2147483643, 0));
        } else if ((script4787(varbitclan_6507) == 0)) {
            CC_SETHIDE(false);
            CC_SETPOSITION(5, (12 + (int7 * int6)), 2, 0);
            CC_SETSIZE(15, 15, 0, 0);
            CC_SETGRAPHIC(7542 as graphic);
            string1 = "You need more members to visit your citadel this week to avoid this building degrading.";
            CC_SETONMOUSEOVER(callback(script4781, int0, -2147483643, 1));
            CC_SETONMOUSEREPEAT(callback(script4783, string1, int0, -2147483643));
            CC_SETONMOUSELEAVE(callback(script4781, int0, -2147483643, 0));
        } else if ((int14 > 1)) {
            string1 = "This building owes double upkeep this tick.";
            CC_SETONMOUSEOVER(callback(script4781, int0, -2147483643, 1));
            CC_SETONMOUSEREPEAT(callback(script4783, string1, int0, -2147483643));
            CC_SETONMOUSELEAVE(callback(script4781, int0, -2147483643, 0));
        };
    } else if ((int2 == 601)) {
        if ((script4785() == 0)) {
            CC_SETHIDE(false);
            CC_SETPOSITION(60, (12 + (int7 * int6)), 2, 0);
            CC_SETSIZE(15, 15, 0, 0);
            CC_SETGRAPHIC(7542 as graphic);
            string1 = "You lack some skill plot prerequisites to build this upgrade.";
            CC_SETONMOUSEOVER(callback(script4781, int0, -2147483643, 1));
            CC_SETONMOUSEREPEAT(callback(script4783, string1, int0, -2147483643));
            CC_SETONMOUSELEAVE(callback(script4781, int0, -2147483643, 0));
        } else if ((script4786(varbitclan_6507) == 0)) {
            CC_SETHIDE(false);
            CC_SETPOSITION(60, (12 + (int7 * int6)), 2, 0);
            CC_SETSIZE(15, 15, 0, 0);
            CC_SETGRAPHIC(7542 as graphic);
            string1 = "You need more members to visit your citadel this week to build this upgrade.";
            CC_SETONMOUSEOVER(callback(script4781, int0, -2147483643, 1));
            CC_SETONMOUSEREPEAT(callback(script4783, string1, int0, -2147483643));
            CC_SETONMOUSELEAVE(callback(script4781, int0, -2147483643, 0));
        } else {
            CC_SETHIDE(true);
        };
    } else if ((int2 > 600)) {
        if ((script4787(varbitclan_6507) == 0)) {
            CC_SETHIDE(false);
            CC_SETPOSITION(60, (12 + (int7 * int6)), 2, 0);
            CC_SETSIZE(15, 15, 0, 0);
            CC_SETGRAPHIC(7542 as graphic);
            string1 = "Cannot upgrade: not enough clan members have visited to perform upkeep.";
            CC_SETONMOUSEOVER(callback(script4781, int0, -2147483643, 1));
            CC_SETONMOUSEREPEAT(callback(script4783, string1, int0, -2147483643));
            CC_SETONMOUSELEAVE(callback(script4781, int0, -2147483643, 0));
        } else if ((int13 < int11)) {
            CC_SETHIDE(false);
            CC_SETPOSITION(60, (12 + (int7 * int6)), 2, 0);
            CC_SETSIZE(15, 15, 0, 0);
            CC_SETGRAPHIC(7542 as graphic);
            string1 = "Cannot upgrade: citadel walls will be too low tier. You will still be charged!";
            CC_SETONMOUSEOVER(callback(script4781, int0, -2147483643, 1));
            CC_SETONMOUSEREPEAT(callback(script4783, string1, int0, -2147483643));
            CC_SETONMOUSELEAVE(callback(script4781, int0, -2147483643, 0));
        } else if (((int2 == 603) || (int2 == 602))) {
            if ((varclient_1561 == 0)) {
                varclient_1561 = 1;
            } else {
                CC_SETHIDE(false);
                CC_SETPOSITION(60, (12 + (int7 * int6)), 2, 0);
                CC_SETSIZE(15, 15, 0, 0);
                CC_SETGRAPHIC(7542 as graphic);
                string1 = "Cannot upgrade: You may upgrade only one of storehouse or battlefield per week.";
                CC_SETONMOUSEOVER(callback(script4781, int0, -2147483643, 1));
                CC_SETONMOUSEREPEAT(callback(script4783, string1, int0, -2147483643));
                CC_SETONMOUSELEAVE(callback(script4781, int0, -2147483643, 0));
            };
        } else if (((int2 >= 604) && (int2 <= 615))) {
            if ((varclient_1562 < 2)) {
                varclient_1562 = (varclient_1562 + 1);
            } else {
                CC_SETHIDE(false);
                CC_SETPOSITION(60, (12 + (int7 * int6)), 2, 0);
                CC_SETSIZE(15, 15, 0, 0);
                CC_SETGRAPHIC(7542 as graphic);
                string1 = "Cannot upgrade: You may upgrade only two skilling plots per week.";
                CC_SETONMOUSEOVER(callback(script4781, int0, -2147483643, 1));
                CC_SETONMOUSEREPEAT(callback(script4783, string1, int0, -2147483643));
                CC_SETONMOUSELEAVE(callback(script4781, int0, -2147483643, 0));
            };
        } else {
            CC_SETHIDE(true);
        };
    } else {
        CC_SETHIDE(true);
    };
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    var string3 = "Cancel this job.";
    if (((int2 > 600) || (int2 < 300))) {
        CC_SETHIDE(false);
        CC_SETPOSITION(5, (12 + (int7 * int6)), 2, 0);
        CC_SETSIZE(15, 15, 0, 0);
        CC_SETGRAPHIC(7545 as graphic);
        CC_SETONMOUSEOVER(callback(script4780, int0, -2147483643, 1));
        CC_SETONMOUSEREPEAT(callback(script4783, string3, int0, -2147483643));
        CC_SETONMOUSELEAVE(callback(script4780, int0, -2147483643, 0));
        CC_SETOP(1, "Cancel");
    } else {
        CC_SETHIDE(true);
    };
    return ++int1;
}