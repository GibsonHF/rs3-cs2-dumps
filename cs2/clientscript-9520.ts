//
function script9520(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 0;
    var int5 = 21589 as graphic;
    var int6 = 21595 as graphic;
    var string0 = "This location is fogged in battle and cannot be identified.";
    switch (int2) {
        case 1: {
            int4 = varbitplayer_21174;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 6);
            break;
        }
        case 2: {
            int4 = varbitplayer_21175;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 0);
            break;
        }
        case 3: {
            int4 = varbitplayer_21176;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 1);
            break;
        }
        case 4: {
            int4 = varbitplayer_21177;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 5);
            break;
        }
        case 5: {
            int4 = varbitplayer_21178;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 11);
            break;
        }
        case 6: {
            int4 = varbitplayer_21179;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 15);
            break;
        }
        case 7: {
            int4 = varbitplayer_21180;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 10);
            break;
        }
        case 8: {
            int4 = varbitplayer_21181;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 14);
            break;
        }
        case 9: {
            int4 = varbitplayer_21182;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 2);
            break;
        }
        case 10: {
            int4 = varbitplayer_21183;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 7);
            break;
        }
        case 11: {
            int4 = varbitplayer_21184;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 12);
            break;
        }
        case 12: {
            int4 = varbitplayer_21185;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 17);
            break;
        }
        case 13: {
            int4 = varbitplayer_21186;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 4);
            break;
        }
        case 14: {
            int4 = varbitplayer_21187;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 9);
            break;
        }
        case 15: {
            int4 = varbitplayer_21188;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 16);
            break;
        }
        case 16: {
            int4 = varbitplayer_21189;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 3);
            break;
        }
        case 17: {
            int4 = varbitplayer_21190;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 8);
            break;
        }
        case 18: {
            int4 = varbitplayer_21191;
            string0 = enum_getvalue(0, 36, 8112 as cs2enum, 13);
            break;
        }
    };
    switch (int4) {
        case 0: {
            int5 = 21589 as graphic;
            int6 = 21595 as graphic;
            string0 = strconcat(string0, ":  This site belongs to neither side.");
            break;
        }
        case 1: {
            int5 = 21588 as graphic;
            int6 = 21594 as graphic;
            string0 = strconcat(string0, ":  This site has a structure held by the forces of Armadyl built on it.");
            break;
        }
        case 2: {
            int5 = 21587 as graphic;
            int6 = 21593 as graphic;
            string0 = strconcat(string0, ":  This site has a structure held by the forces of Bandos built on it.");
            break;
        }
        case 3: {
            int5 = 21592 as graphic;
            int6 = 21598 as graphic;
            string0 = strconcat(string0, ":  This site cannot be captured.");
            break;
        }
        case 4: {
            int5 = 21591 as graphic;
            int6 = 21597 as graphic;
            string0 = strconcat(string0, ":  This site has a teleporter held by the forces of Armadyl built on it.");
            break;
        }
        case 5: {
            int5 = 21590 as graphic;
            int6 = 21596 as graphic;
            string0 = strconcat(string0, ":  This site has a teleporter held by the forces of Bandos built on it.");
            break;
        }
        case 6: {
            int5 = 21607 as graphic;
            int6 = 21607 as graphic;
            string0 = strconcat(string0, ":  This site belongs to neither side. A Bandos convoy is currently at this location.");
            break;
        }
        case 7: {
            int5 = 21606 as graphic;
            int6 = 21606 as graphic;
            string0 = strconcat(string0, ":  This site has a structure held by the forces of Armadyl built on it. A Bandos convoy is currently at this location.");
            break;
        }
        case 8: {
            int5 = 21605 as graphic;
            int6 = 21605 as graphic;
            string0 = strconcat(string0, ":  This site has a structure held by the forces of Bandos built on it. A Bandos convoy is currently at this location.");
            break;
        }
        case 9: {
            int5 = 21610 as graphic;
            int6 = 21610 as graphic;
            string0 = strconcat(string0, ":  This site cannot be captured. A Bandos convoy is currently at this location.");
            break;
        }
        case 10: {
            int5 = 21609 as graphic;
            int6 = 21609 as graphic;
            string0 = strconcat(string0, ":  This site has a teleporter held by the forces of Armadyl built on it. A Bandos convoy is currently at this location.");
            break;
        }
        case 11: {
            int5 = 21608 as graphic;
            int6 = 21608 as graphic;
            string0 = strconcat(string0, ":  This site has a teleporter held by the forces of Bandos built on it. A Bandos convoy is currently at this location.");
            break;
        }
        case 12: {
            int5 = 21607 as graphic;
            int6 = 21607 as graphic;
            string0 = strconcat(string0, ":  This site belongs to neither side. An Armadyl convoy is currently at this location.");
            break;
        }
        case 13: {
            int5 = 21606 as graphic;
            int6 = 21606 as graphic;
            string0 = strconcat(string0, ":  This site has a structure held by the forces of Armadyl built on it. An Armadyl convoy is currently at this location.");
            break;
        }
        case 14: {
            int5 = 21605 as graphic;
            int6 = 21605 as graphic;
            string0 = strconcat(string0, ":  This site has a structure held by the forces of Bandos built on it. An Armadyl convoy is currently at this location.");
            break;
        }
        case 15: {
            int5 = 21610 as graphic;
            int6 = 21610 as graphic;
            string0 = strconcat(string0, ":  This site cannot be captured. An Armadyl convoy is currently at this location.");
            break;
        }
        case 16: {
            int5 = 21609 as graphic;
            int6 = 21609 as graphic;
            string0 = strconcat(string0, ":  This site has a teleporter held by the forces of Armadyl built on it. An Armadyl convoy is currently at this location.");
            break;
        }
        case 17: {
            int5 = 21608 as graphic;
            int6 = 21608 as graphic;
            string0 = strconcat(string0, ":  This site has a teleporter held by the forces of Bandos built on it. An Armadyl convoy is currently at this location.");
            break;
        }
    };
    IF_SETGRAPHIC(int5, int0);
    IF_SETGRAPHIC(int6, int1);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int3);
    IF_SETOP(1, "Teleport", int3);
    IF_SETONOP(callback(script9521), int3);
    return;
}