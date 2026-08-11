//
function script12083(int0: number): void {
    var int1 = script12040(int0);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    var int10 = comp(-1, 65535);
    var int11 = comp(-1, 65535);
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = -1 as stat;
    switch (int0) {
        case 1: {
            int6 = comp(1213, 37);  // xp_popup:attack_button
            break;
        }
        case 2: {
            int6 = comp(1213, 38);  // xp_popup:strength_button
            break;
        }
        case 5: {
            int6 = comp(1213, 39);  // xp_popup:defence_button
            break;
        }
        case 3: {
            int6 = comp(1213, 40);  // xp_popup:ranged_button
            break;
        }
        case 7: {
            int6 = comp(1213, 41);  // xp_popup:prayer_button
            break;
        }
        case 4: {
            int6 = comp(1213, 42);  // xp_popup:magic_button
            break;
        }
        case 6: {
            int6 = comp(1213, 43);  // xp_popup:constitution_button
            break;
        }
        case 8: {
            int6 = comp(1213, 44);  // xp_popup:agility_button
            break;
        }
        case 9: {
            int6 = comp(1213, 45);  // xp_popup:herblore_button
            break;
        }
        case 10: {
            int6 = comp(1213, 46);  // xp_popup:thieving_button
            break;
        }
        case 11: {
            int6 = comp(1213, 47);  // xp_popup:crafting_button
            break;
        }
        case 19: {
            int6 = comp(1213, 48);  // xp_popup:fletching_button
            break;
        }
        case 13: {
            int6 = comp(1213, 49);  // xp_popup:mining_button
            break;
        }
        case 14: {
            int6 = comp(1213, 50);  // xp_popup:smithing_button
            break;
        }
        case 15: {
            int6 = comp(1213, 51);  // xp_popup:fishing_button
            break;
        }
        case 16: {
            int6 = comp(1213, 52);  // xp_popup:cooking_button
            break;
        }
        case 17: {
            int6 = comp(1213, 53);  // xp_popup:firemaking_button
            break;
        }
        case 18: {
            int6 = comp(1213, 54);  // xp_popup:woodcutting_button
            break;
        }
        case 12: {
            int6 = comp(1213, 55);  // xp_popup:runecrafting_button
            break;
        }
        case 20: {
            int6 = comp(1213, 56);  // xp_popup:slayer_button
            break;
        }
        case 21: {
            int6 = comp(1213, 57);  // xp_popup:farming_button
            break;
        }
        case 23: {
            int6 = comp(1213, 58);  // xp_popup:hunter_button
            break;
        }
        case 22: {
            int6 = comp(1213, 59);  // xp_popup:construction_button
            break;
        }
        case 24: {
            int6 = comp(1213, 60);  // xp_popup:summoning_button
            break;
        }
        case 25: {
            int6 = comp(1213, 61);  // xp_popup:dungeoneering_button
            break;
        }
        case 26: {
            int6 = comp(1213, 62);  // xp_popup:divination_button
            break;
        }
        case 27: {
            int6 = comp(1213, 63);  // xp_popup:invention_button
            break;
        }
        case 28: {
            int6 = comp(1213, 64);  // xp_popup:archaeology_button
            break;
        }
        case 29: {
            int6 = comp(1213, 65);  // xp_popup:necromancy_button
            break;
        }
        case 100: {
            int6 = comp(1213, 66);  // xp_popup:pets_button
            break;
        }
    };
    if ((IF_GETHIDE(int6) == false)) {
        if ((IF_GETX(int6) == (IF_GETX(comp(1213, 7)) + 18))) {  // xp_popup:ring_2
            int7 = comp(1213, 7);  // xp_popup:ring_2
        } else if ((IF_GETX(int6) == (IF_GETX(comp(1213, 6)) + 18))) {  // xp_popup:ring_3
            int7 = comp(1213, 6);  // xp_popup:ring_3
        } else if ((IF_GETX(int6) == (IF_GETX(comp(1213, 5)) + 18))) {  // xp_popup:ring_4
            int7 = comp(1213, 5);  // xp_popup:ring_4
        } else if ((IF_GETX(int6) == (IF_GETX(comp(1213, 4)) + 18))) {  // xp_popup:ring_5
            int7 = comp(1213, 4);  // xp_popup:ring_5
        } else if ((IF_GETX(int6) == (IF_GETX(comp(1213, 3)) + 18))) {  // xp_popup:ring_6
            int7 = comp(1213, 3);  // xp_popup:ring_6
        } else if ((IF_GETX(int6) == (IF_GETX(comp(1213, 2)) + 18))) {  // xp_popup:ring_7
            int7 = comp(1213, 2);  // xp_popup:ring_7
        } else {
            int7 = comp(1213, 8);  // xp_popup:ring_1
        };
    } else if ((IF_GETHIDE(comp(1213, 8)) == true)) {  // xp_popup:ring_1
        int7 = comp(1213, 8);  // xp_popup:ring_1
    } else if ((IF_GETHIDE(comp(1213, 7)) == true)) {  // xp_popup:ring_2
        int7 = comp(1213, 7);  // xp_popup:ring_2
    } else if ((IF_GETHIDE(comp(1213, 6)) == true)) {  // xp_popup:ring_3
        int7 = comp(1213, 6);  // xp_popup:ring_3
    } else if ((IF_GETHIDE(comp(1213, 5)) == true)) {  // xp_popup:ring_4
        int7 = comp(1213, 5);  // xp_popup:ring_4
    } else if ((IF_GETHIDE(comp(1213, 4)) == true)) {  // xp_popup:ring_5
        int7 = comp(1213, 4);  // xp_popup:ring_5
    } else if ((IF_GETHIDE(comp(1213, 3)) == true)) {  // xp_popup:ring_6
        int7 = comp(1213, 3);  // xp_popup:ring_6
    } else if ((IF_GETHIDE(comp(1213, 2)) == true)) {  // xp_popup:ring_7
        int7 = comp(1213, 2);  // xp_popup:ring_7
    } else {
        switch (varclient_1763) {
            case 2: {
                int7 = comp(1213, 7);  // xp_popup:ring_2
                break;
            }
            case 3: {
                int7 = comp(1213, 6);  // xp_popup:ring_3
                break;
            }
            case 4: {
                int7 = comp(1213, 5);  // xp_popup:ring_4
                break;
            }
            case 5: {
                int7 = comp(1213, 4);  // xp_popup:ring_5
                break;
            }
            case 6: {
                int7 = comp(1213, 3);  // xp_popup:ring_6
                break;
            }
            case 7: {
                int7 = comp(1213, 2);  // xp_popup:ring_7
                break;
            }
            default: {
                int7 = comp(1213, 8);  // xp_popup:ring_1
                break;
            }
        };
        IF_SETHIDE(true, varclient_1770);
    };
    varclient_1763 = varclient_1762;
    varclient_1762 = varclient_1761;
    varclient_1761 = varclient_1760;
    varclient_1760 = varclient_1759;
    varclient_1759 = varclient_1758;
    varclient_1758 = varclient_1757;
    varclient_1770 = varclient_1769;
    varclient_1769 = varclient_1768;
    varclient_1768 = varclient_1767;
    varclient_1767 = varclient_1766;
    varclient_1766 = varclient_1765;
    varclient_1765 = varclient_1764;
    varclient_1764 = int6;
    switch (int7) {
        case 79495175: {
            varclient_1757 = 2;
            int8 = comp(1213, 13);  // xp_popup:ring_2a
            int9 = comp(1213, 15);  // xp_popup:ring_2b
            int10 = comp(1213, 14);  // xp_popup:ring_2a_graphic
            int11 = comp(1213, 16);  // xp_popup:ring_2b_graphic
            int16 = varclient_1775;
            break;
        }
        case 79495174: {
            varclient_1757 = 3;
            int8 = comp(1213, 17);  // xp_popup:ring_3a
            int9 = comp(1213, 19);  // xp_popup:ring_3b
            int10 = comp(1213, 18);  // xp_popup:ring_3a_graphic
            int11 = comp(1213, 20);  // xp_popup:ring_3b_graphic
            int16 = varclient_1776;
            break;
        }
        case 79495173: {
            varclient_1757 = 4;
            int8 = comp(1213, 21);  // xp_popup:ring_4a
            int9 = comp(1213, 23);  // xp_popup:ring_4b
            int10 = comp(1213, 22);  // xp_popup:ring_4a_graphic
            int11 = comp(1213, 24);  // xp_popup:ring_4b_graphic
            int16 = varclient_1777;
            break;
        }
        case 79495172: {
            varclient_1757 = 5;
            int8 = comp(1213, 25);  // xp_popup:ring_5a
            int9 = comp(1213, 27);  // xp_popup:ring_5b
            int10 = comp(1213, 26);  // xp_popup:ring_5a_graphic
            int11 = comp(1213, 28);  // xp_popup:ring_5b_graphic
            int16 = varclient_1778;
            break;
        }
        case 79495171: {
            varclient_1757 = 6;
            int8 = comp(1213, 29);  // xp_popup:ring_6a
            int9 = comp(1213, 31);  // xp_popup:ring_6b
            int10 = comp(1213, 30);  // xp_popup:ring_6a_graphic
            int11 = comp(1213, 32);  // xp_popup:ring_6b_graphic
            int16 = varclient_1779;
            break;
        }
        case 79495170: {
            varclient_1757 = 7;
            int8 = comp(1213, 33);  // xp_popup:ring_7a
            int9 = comp(1213, 35);  // xp_popup:ring_7b
            int10 = comp(1213, 34);  // xp_popup:ring_7a_graphic
            int11 = comp(1213, 36);  // xp_popup:ring_7b_graphic
            int16 = varclient_1780;
            break;
        }
        default: {
            varclient_1757 = 1;
            int8 = comp(1213, 9);  // xp_popup:ring_1a
            int9 = comp(1213, 11);  // xp_popup:ring_1b
            int10 = comp(1213, 10);  // xp_popup:ring_1a_graphic
            int11 = comp(1213, 12);  // xp_popup:ring_1b_graphic
            int16 = varclient_1774;
            break;
        }
    };
    int17 = enum_getvalue(0, 17, 681 as cs2enum, int0);
    if ((int17 != -1 as stat)) {
        if ((TESTBIT(varplayer_1115, int0) != 0)) {
            int15 = 1;
        } else if ((script11891(int17, enum_getvalue(17, 0, 10865 as cs2enum, int17)) == 0)) {
            int15 = 1;
        };
    } else if ((int0 == 100)) {
        int15 = 1;
    } else {
        int15 = 0;
    };
    if ((int15 == 1)) {
        if ((int17 != -1 as stat)) {
            if ((script10888(int0) == 0)) {
                [int14, int12, int13] = script4037(int0);
                if ((int14 == 1)) {
                    int13 = enum_getvalue(0, 0, int1, int13);
                    int12 = enum_getvalue(0, 0, int1, int12);
                };
            } else {
                int13 = enum_getvalue(0, 0, int1, script11889(int17));
                int12 = enum_getvalue(0, 0, int1, (script11889(int17) + 1));
            };
            int3 = (int12 - int13);
            int2 = (STAT_VISIBLE_XP(int17) - int13);
            int5 = (script5664(int0) - int13);
        } else if ((int0 == 100)) {
            int3 = 24000;
            int2 = varclient_2695;
            int5 = varclient_2694;
            varclient_2694 = varclient_2695;
        };
        int4 = SCALE(int2, int3, 100);
        int5 = SCALE(int5, int3, 100);
        if ((((int4 < int5) || (int5 < 1)) || (int16 != int0))) {
            IF_SETSIZE(IF_GETWIDTH(int8), MAX(1, SCALE(45, 50, MIN(int4, 50))), 0, 0, int8);
            if ((int4 < 51)) {
                IF_SETSIZE(IF_GETWIDTH(int9), 0, 0, 0, int9);
            } else {
                IF_SETSIZE(IF_GETWIDTH(int9), MAX(1, SCALE(45, 50, MAX((int4 - 50), 0))), 0, 0, int9);
            };
        } else {
            IF_SETSIZE(IF_GETWIDTH(int8), MAX(IF_GETHEIGHT(int8), 1), 0, 0, int8);
            IF_SETSIZE(IF_GETWIDTH(int9), MAX(IF_GETHEIGHT(int9), 0), 0, 0, int9);
        };
        switch (int7) {
            case 79495175: {
                varclient_1775 = int0;
                break;
            }
            case 79495174: {
                varclient_1776 = int0;
                break;
            }
            case 79495173: {
                varclient_1777 = int0;
                break;
            }
            case 79495172: {
                varclient_1778 = int0;
                break;
            }
            case 79495171: {
                varclient_1779 = int0;
                break;
            }
            case 79495170: {
                varclient_1780 = int0;
                break;
            }
            default: {
                varclient_1774 = int0;
                break;
            }
        };
        IF_SETONTIMER(callback(script5655, int8, int9, int4, 0), int8);
        IF_SETHIDE(false, int6);
        IF_SETTRANS(0, int6);
        IF_SETONTIMER(callback(script2673, 1, -2147483645, 0), int6);
        IF_SETPOSITION((IF_GETX(int7) + 18), 17, 0, 0, int6);
        IF_SETHIDE(false, int7);
        IF_SETTRANS(0, int7);
        IF_SETONTIMER(callback(script2673, 1, -2147483645, 0), int7);
        IF_SETHIDE(false, int10);
        IF_SETTRANS(0, int10);
        IF_SETONTIMER(callback(script2673, 1, -2147483645, 0), int10);
        IF_SETHIDE(false, int11);
        IF_SETTRANS(0, int11);
        IF_SETONTIMER(callback(script2673, 1, -2147483645, 0), int11);
    };
    return;
}