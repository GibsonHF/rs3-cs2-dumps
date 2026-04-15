//
function script6035(int0: stat, int1: int, int2: obj, int3: unknown_int): unknown_int {
    if ((int2 == 54603 as obj)) {
        return 1;
    };
    if (((int0 == -1 as stat) && (script16690(int0, int2) == 0))) {
        if ((int3 == 1)) {
            printmessage("You cannot use this on the currently embargoed skill.");
            SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
        };
        return 0;
    };
    if ((((((MAP_MEMBERS() == 0) && (enum_hasoutput(17, 5472 as cs2enum, int0) == 1)) && (STAT_BASE(int0) >= script12038(int0))) && (OC_CATEGORY(int2) != 3074 as category)) && (int2 != 31822 as obj))) {
        if ((int3 == 1)) {
            if ((PLAYERMEMBER() == false)) {
                printmessage("You have reached the maximum level for this skill in the free game. To gain more XP you must subscribe.");
            } else {
                printmessage("You have the reached the maximum level for this skill in the free game. To gain more XP you must log in to a members' world.");
            };
            SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
        };
        return 0;
    };
    switch (int0) {
        case 26: {
            if ((((STAT_BASE(13 as stat) < 80) || (STAT_BASE(25 as stat) < 80)) || (STAT_BASE(12 as stat) < 80))) {
                return 0;
            };
            break;
        }
    };
    if ((STAT_BASE(int0) < int1)) {
        if ((int3 == 1)) {
            printmessage(`You must choose a skill in which you already have level ${inttostring(int1, 10)}.`);
            SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
        };
        return 0;
    };
    switch (int2) {
        case 13439: {
            switch (int0) {
                case 0:
                case 2:
                case 1:
                case 3:
                case 4:
                case 6:
                case 14:
                case 13:
                case 10:
                case 7:
                case 11:
                case 8:
                case 5: {
                    break;
                }
                default: {
                    if ((int3 == 1)) {
                        printmessage("You may only use this lamp to increase a skill that you learned about while helping Sir Vant.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                }
            };
            break;
        }
        case 25468: {
            switch (int0) {
                case 0: {
                    if (((script259(24713 as obj) > 0) || (varbitplayer_4345 == 246))) {
                        return 0;
                    };
                    break;
                }
                case 2: {
                    if (((script259(24715 as obj) > 0) || (varbitplayer_4345 == 248))) {
                        return 0;
                    };
                    break;
                }
                case 1: {
                    if (((script259(24717 as obj) > 0) || (varbitplayer_4345 == 250))) {
                        return 0;
                    };
                    break;
                }
                case 4: {
                    if (((script259(24719 as obj) > 0) || (varbitplayer_4345 == 252))) {
                        return 0;
                    };
                    break;
                }
                case 6: {
                    if (((script259(24721 as obj) > 0) || (varbitplayer_4345 == 254))) {
                        return 0;
                    };
                    break;
                }
                case 5: {
                    if (((script259(24723 as obj) > 0) || (varbitplayer_4345 == 256))) {
                        return 0;
                    };
                    break;
                }
                case 20: {
                    if (((script259(24725 as obj) > 0) || (varbitplayer_4345 == 258))) {
                        return 0;
                    };
                    break;
                }
                case 22: {
                    if (((script259(24727 as obj) > 0) || (varbitplayer_4345 == 260))) {
                        return 0;
                    };
                    break;
                }
                case 24: {
                    if (((script259(24729 as obj) > 0) || (varbitplayer_4345 == 262))) {
                        return 0;
                    };
                    break;
                }
                case 3: {
                    if (((script259(24731 as obj) > 0) || (varbitplayer_4345 == 264))) {
                        return 0;
                    };
                    break;
                }
                case 16: {
                    if (((script259(24733 as obj) > 0) || (varbitplayer_4345 == 266))) {
                        return 0;
                    };
                    break;
                }
                case 15: {
                    if (((script259(24735 as obj) > 0) || (varbitplayer_4345 == 268))) {
                        return 0;
                    };
                    break;
                }
                case 17: {
                    if (((script259(24737 as obj) > 0) || (varbitplayer_4345 == 270))) {
                        return 0;
                    };
                    break;
                }
                case 12: {
                    if (((script259(24739 as obj) > 0) || (varbitplayer_4345 == 272))) {
                        return 0;
                    };
                    break;
                }
                case 9: {
                    if (((script259(24741 as obj) > 0) || (varbitplayer_4345 == 274))) {
                        return 0;
                    };
                    break;
                }
                case 18: {
                    if (((script259(24743 as obj) > 0) || (varbitplayer_4345 == 276))) {
                        return 0;
                    };
                    break;
                }
                case 21: {
                    if (((script259(24745 as obj) > 0) || (varbitplayer_4345 == 278))) {
                        return 0;
                    };
                    break;
                }
                case 14: {
                    if (((script259(24747 as obj) > 0) || (varbitplayer_4345 == 280))) {
                        return 0;
                    };
                    break;
                }
                case 13: {
                    if (((script259(24749 as obj) > 0) || (varbitplayer_4345 == 282))) {
                        return 0;
                    };
                    break;
                }
                case 10: {
                    if (((script259(24751 as obj) > 0) || (varbitplayer_4345 == 284))) {
                        return 0;
                    };
                    break;
                }
                case 7: {
                    if (((script259(24753 as obj) > 0) || (varbitplayer_4345 == 286))) {
                        return 0;
                    };
                    break;
                }
                case 11: {
                    if (((script259(24755 as obj) > 0) || (varbitplayer_4345 == 288))) {
                        return 0;
                    };
                    break;
                }
                case 8: {
                    if (((script259(24757 as obj) > 0) || (varbitplayer_4345 == 290))) {
                        return 0;
                    };
                    break;
                }
                case 19: {
                    if (((script259(24759 as obj) > 0) || (varbitplayer_4345 == 292))) {
                        return 0;
                    };
                    break;
                }
                case 23: {
                    if (((script259(24761 as obj) > 0) || (varbitplayer_4345 == 294))) {
                        return 0;
                    };
                    break;
                }
                case 25: {
                    if (((script259(29553 as obj) > 0) || (varbitplayer_4345 == 590))) {
                        return 0;
                    };
                    break;
                }
                case 26: {
                    if (((script259(37837 as obj) > 0) || (varbitplayer_4345 == 776))) {
                        return 0;
                    };
                    break;
                }
            };
            break;
        }
        case 25469: {
            switch (int0) {
                case 0: {
                    if (((script259(24714 as obj) > 0) || (varbitplayer_4345 == 247))) {
                        return 0;
                    };
                    break;
                }
                case 2: {
                    if (((script259(24716 as obj) > 0) || (varbitplayer_4345 == 249))) {
                        return 0;
                    };
                    break;
                }
                case 1: {
                    if (((script259(24718 as obj) > 0) || (varbitplayer_4345 == 251))) {
                        return 0;
                    };
                    break;
                }
                case 4: {
                    if (((script259(24720 as obj) > 0) || (varbitplayer_4345 == 253))) {
                        return 0;
                    };
                    break;
                }
                case 6: {
                    if (((script259(24722 as obj) > 0) || (varbitplayer_4345 == 255))) {
                        return 0;
                    };
                    break;
                }
                case 5: {
                    if (((script259(24724 as obj) > 0) || (varbitplayer_4345 == 257))) {
                        return 0;
                    };
                    break;
                }
                case 20: {
                    if (((script259(24726 as obj) > 0) || (varbitplayer_4345 == 259))) {
                        return 0;
                    };
                    break;
                }
                case 22: {
                    if (((script259(24728 as obj) > 0) || (varbitplayer_4345 == 261))) {
                        return 0;
                    };
                    break;
                }
                case 24: {
                    if (((script259(24730 as obj) > 0) || (varbitplayer_4345 == 263))) {
                        return 0;
                    };
                    break;
                }
                case 3: {
                    if (((script259(24732 as obj) > 0) || (varbitplayer_4345 == 265))) {
                        return 0;
                    };
                    break;
                }
                case 16: {
                    if (((script259(24734 as obj) > 0) || (varbitplayer_4345 == 267))) {
                        return 0;
                    };
                    break;
                }
                case 15: {
                    if (((script259(24736 as obj) > 0) || (varbitplayer_4345 == 269))) {
                        return 0;
                    };
                    break;
                }
                case 17: {
                    if (((script259(24738 as obj) > 0) || (varbitplayer_4345 == 271))) {
                        return 0;
                    };
                    break;
                }
                case 12: {
                    if (((script259(24740 as obj) > 0) || (varbitplayer_4345 == 273))) {
                        return 0;
                    };
                    break;
                }
                case 9: {
                    if (((script259(24742 as obj) > 0) || (varbitplayer_4345 == 275))) {
                        return 0;
                    };
                    break;
                }
                case 18: {
                    if (((script259(24744 as obj) > 0) || (varbitplayer_4345 == 277))) {
                        return 0;
                    };
                    break;
                }
                case 21: {
                    if (((script259(24746 as obj) > 0) || (varbitplayer_4345 == 279))) {
                        return 0;
                    };
                    break;
                }
                case 14: {
                    if (((script259(24748 as obj) > 0) || (varbitplayer_4345 == 281))) {
                        return 0;
                    };
                    break;
                }
                case 13: {
                    if (((script259(24750 as obj) > 0) || (varbitplayer_4345 == 283))) {
                        return 0;
                    };
                    break;
                }
                case 10: {
                    if (((script259(24752 as obj) > 0) || (varbitplayer_4345 == 285))) {
                        return 0;
                    };
                    break;
                }
                case 7: {
                    if (((script259(24754 as obj) > 0) || (varbitplayer_4345 == 287))) {
                        return 0;
                    };
                    break;
                }
                case 11: {
                    if (((script259(24756 as obj) > 0) || (varbitplayer_4345 == 289))) {
                        return 0;
                    };
                    break;
                }
                case 8: {
                    if (((script259(24758 as obj) > 0) || (varbitplayer_4345 == 291))) {
                        return 0;
                    };
                    break;
                }
                case 19: {
                    if (((script259(24760 as obj) > 0) || (varbitplayer_4345 == 293))) {
                        return 0;
                    };
                    break;
                }
                case 23: {
                    if (((script259(24762 as obj) > 0) || (varbitplayer_4345 == 295))) {
                        return 0;
                    };
                    break;
                }
                case 25: {
                    if (((script259(29554 as obj) > 0) || (varbitplayer_4345 == 591))) {
                        return 0;
                    };
                    break;
                }
                case 26: {
                    if (((script259(37838 as obj) > 0) || (varbitplayer_4345 == 777))) {
                        return 0;
                    };
                    break;
                }
            };
            break;
        }
        case 25977: {
            switch (int0) {
                case 0:
                case 2:
                case 1:
                case 3:
                case 4:
                case 6:
                case 5:
                case 23:
                case 15:
                case 18:
                case 28: {
                    break;
                }
                default: {
                    if ((int3 == 1)) {
                        printmessage("You may only use this to increase combat related skills.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                }
            };
            break;
        }
        case 34835: {
            switch (int0) {
                case 0:
                case 2:
                case 1:
                case 3:
                case 4:
                case 6:
                case 5:
                case 23:
                case 15:
                case 18:
                case 28: {
                    break;
                }
                default: {
                    if ((int3 == 1)) {
                        printmessage("You may only use this to increase combat related skills.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                }
            };
            break;
        }
        case 25070: {
            switch (int0) {
                case 0:
                case 2:
                case 1:
                case 3:
                case 4:
                case 6:
                case 28: {
                    break;
                }
                default: {
                    if ((int3 == 1)) {
                        printmessage("You may only choose a combat skill.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                }
            };
            break;
        }
        case 29752:
        case 36835: {
            switch (int0) {
                case 0:
                case 2:
                case 1:
                case 3:
                case 4:
                case 6:
                case 28: {
                    break;
                }
                default: {
                    if ((int3 == 1)) {
                        printmessage("You may only use this to increase basic combat skills.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                }
            };
            break;
        }
        case 31076: {
            switch (int0) {
                case 0:
                case 2:
                case 1:
                case 3:
                case 4:
                case 6:
                case 28: {
                    break;
                }
                default: {
                    if ((int3 == 1)) {
                        printmessage("You may only choose a combat skill.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                }
            };
            break;
        }
        case 27366:
        case 27367: {
            switch (int0) {
                case 0: {
                    if ((varbitplayer_17989 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 2: {
                    if ((varbitplayer_17990 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 4: {
                    if ((varbitplayer_17991 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 6: {
                    if ((varbitplayer_17992 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 1: {
                    if ((varbitplayer_17993 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 3: {
                    if ((varbitplayer_17994 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 5: {
                    if ((varbitplayer_17995 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 16: {
                    if ((varbitplayer_17996 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 15: {
                    if ((varbitplayer_17997 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 17: {
                    if ((varbitplayer_17998 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 12: {
                    if ((varbitplayer_17999 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 20: {
                    if ((varbitplayer_18000 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 14: {
                    if ((varbitplayer_18001 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 13: {
                    if ((varbitplayer_18002 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 10: {
                    if ((varbitplayer_18003 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 7: {
                    if ((varbitplayer_18004 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 11: {
                    if ((varbitplayer_18005 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 8: {
                    if ((varbitplayer_18006 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 9: {
                    if ((varbitplayer_18007 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 18: {
                    if ((varbitplayer_18008 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 19: {
                    if ((varbitplayer_18009 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 22: {
                    if ((varbitplayer_18010 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 21: {
                    if ((varbitplayer_18011 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 23: {
                    if ((varbitplayer_18012 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 24: {
                    if ((varbitplayer_18013 == 0)) {
                        return 0;
                    };
                    break;
                }
                case 25: {
                    if ((varbitplayer_20590 == 0)) {
                        return 0;
                    };
                    break;
                }
                default: {
                    return 0;
                }
            };
            break;
        }
        case 27362: {
            switch (int0) {
                case 3:
                case 0:
                case 2:
                case 1:
                case 4:
                case 6:
                case 28: {
                    break;
                }
                default: {
                    if ((int3 == 1)) {
                        printmessage("You may only use this book to increase combat related skills.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                }
            };
            break;
        }
        case 28363: {
            switch (int0) {
                case 3:
                case 0:
                case 2:
                case 1:
                case 4:
                case 6: {
                    break;
                }
                default: {
                    if ((int3 == 1)) {
                        printmessage("You may only improve combat related skills.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                }
            };
            break;
        }
        case 28320: {
            switch (int0) {
                case 13:
                case 10:
                case 14:
                case 20:
                case 12:
                case 8:
                case 11:
                case 9:
                case 22:
                case 21:
                case 17:
                case 7:
                case 15:
                case 19:
                case 25:
                case 27: {
                    break;
                }
                default: {
                    if ((int3 == 1)) {
                        printmessage("You can only boost certain non-combat skills with the banner.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                }
            };
            break;
        }
        case 28567: {
            switch (int0) {
                case 0: {
                    if ((varbitplayer_18518 == 1)) {
                        return 0;
                    };
                    break;
                }
                case 24:
                case 10: {
                    break;
                }
                case 19:
                case 17: {
                    if ((MAP_MEMBERS() == 0)) {
                        return 0;
                    };
                    break;
                }
                default: {
                    return 0;
                }
            };
            break;
        }
        case 28568: {
            switch (int0) {
                case 1: {
                    if ((varbitplayer_18518 == 1)) {
                        return 0;
                    };
                    break;
                }
                case 14:
                case 8: {
                    break;
                }
                case 22:
                case 15: {
                    if ((MAP_MEMBERS() == 0)) {
                        return 0;
                    };
                    break;
                }
                default: {
                    return 0;
                }
            };
            break;
        }
        case 28569: {
            switch (int0) {
                case 6: {
                    if ((varbitplayer_18518 == 1)) {
                        return 0;
                    };
                    break;
                }
                case 5:
                case 20:
                case 3: {
                    break;
                }
                case 23: {
                    if (((varbitplayer_18518 == 1) || (MAP_MEMBERS() == 0))) {
                        return 0;
                    };
                    break;
                }
                default: {
                    return 0;
                }
            };
            break;
        }
        case 28570: {
            switch (int0) {
                case 2: {
                    if ((varbitplayer_18518 == 1)) {
                        return 0;
                    };
                    break;
                }
                case 7:
                case 11: {
                    break;
                }
                case 21:
                case 18: {
                    if ((MAP_MEMBERS() == 0)) {
                        return 0;
                    };
                    break;
                }
                default: {
                    return 0;
                }
            };
            break;
        }
        case 28571: {
            switch (int0) {
                case 4: {
                    if ((varbitplayer_18518 == 1)) {
                        return 0;
                    };
                    break;
                }
                case 12:
                case 13: {
                    break;
                }
                case 16:
                case 9: {
                    if ((MAP_MEMBERS() == 0)) {
                        return 0;
                    };
                    break;
                }
                default: {
                    return 0;
                }
            };
            break;
        }
        case 30226: {
            if ((enum_getvalue(17, 0, 8103 as cs2enum, int0) > 0)) {
                return 1;
            };
            return 0;
        }
        case 31931: {
            if ((TESTBIT(varbitplayer_23327, enum_getvalue(17, 0, 1482 as cs2enum, int0)) == 1)) {
                return 0;
            };
            return 1;
        }
        case 32307:
        case 43364: {
            if ((script212(int0, STAT_BASE(int0), 1, 0) > 0)) {
                return 1;
            };
            return 0;
        }
        case 35919: {
            switch (int0) {
                case 14:
                case 19:
                case 8:
                case 15:
                case 5:
                case 22:
                case 20:
                case 25:
                case 2:
                case 17: {
                    break;
                }
                default: {
                    return 0;
                }
            };
            break;
        }
        case 36921: {
            switch (int0) {
                case 19:
                case 23:
                case 14:
                case 21:
                case 5:
                case 22:
                case 0:
                case 4:
                case 1:
                case 6:
                case 2: {
                    break;
                }
                default: {
                    return 0;
                }
            };
            break;
        }
        case 37682: {
            switch (int0) {
                case 14:
                case 25:
                case 13:
                case 22:
                case 12:
                case 16:
                case 5:
                case 15:
                case 8:
                case 18: {
                    break;
                }
                default: {
                    return 0;
                }
            };
            break;
        }
        case 39842: {
            switch (int0) {
                case 8:
                case 25:
                case 2:
                case 16:
                case 7:
                case 22:
                case 13:
                case 15:
                case 20:
                case 12: {
                    break;
                }
                default: {
                    return 0;
                }
            };
            break;
        }
        case 37192: {
            switch (int0) {
                case 0: {
                    if ((varplayer_6169 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 1: {
                    if ((varplayer_6170 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 2: {
                    if ((varplayer_6171 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 3: {
                    if ((varplayer_6172 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 4: {
                    if ((varplayer_6173 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 5: {
                    if ((varplayer_6174 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 6: {
                    if ((varplayer_6175 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 7: {
                    if ((varplayer_6176 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 8: {
                    if ((varplayer_6177 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 9: {
                    if ((varplayer_6178 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 10: {
                    if ((varplayer_6179 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 11: {
                    if ((varplayer_6180 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 12: {
                    if ((varplayer_6181 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 13: {
                    if ((varplayer_6182 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 14: {
                    if ((varplayer_6183 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 15: {
                    if ((varplayer_6184 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 16: {
                    if ((varplayer_6185 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 17: {
                    if ((varplayer_6186 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 18: {
                    if ((varplayer_6187 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 19: {
                    if ((varplayer_6188 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 20: {
                    if ((varplayer_6189 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 21: {
                    if ((varplayer_6190 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 22: {
                    if ((varplayer_6191 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 23: {
                    if ((varplayer_6192 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 24: {
                    if ((varplayer_6193 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 25: {
                    if ((varplayer_6194 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 26: {
                    if ((varplayer_6195 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 27: {
                    if ((varplayer_9208 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 28: {
                    if ((varplayer_10956 > 0)) {
                        return 1;
                    };
                    break;
                }
            };
            return 0;
        }
        case 39669: {
            if ((script9121(int0) == 1)) {
                return 1;
            };
            return 0;
        }
        case 39668: {
            if ((script13031(int0) == 1)) {
                return 1;
            };
            return 0;
        }
        case 44606:
        case 44607:
        case 44608:
        case 44609: {
            if ((int0 == 26 as stat)) {
                return 0;
            };
            break;
        }
        case 21409: {
            return script6679(int0, int3);
        }
        case 55178: {
            if ((script495(int0) > 0)) {
                return 1;
            };
            return 0;
        }
        case 55179: {
            if ((int0 == varplayer_10927)) {
                return 0;
            };
            if ((script495(int0) == 1000000000)) {
                return 0;
            };
            return script12970(int0);
        }
    };
    if ((((((((((((item_getparam(int2, 4018) == 1) || (item_getparam(int2, 4019) == 1)) || (item_getparam(int2, 4020) == 1)) || (item_getparam(int2, 4021) == 1)) || (item_getparam(int2, 4022) == 1)) || (item_getparam(int2, 4023) == 1)) || (item_getparam(int2, 4024) == 1)) || (item_getparam(int2, 4025) == 1)) || (item_getparam(int2, 4026) == 1)) || (item_getparam(int2, 4027) == 1)) || (item_getparam(int2, 7946) == 1))) {
        switch (int0) {
            case 0: {
                if ((item_getparam(int2, 4018) == 0)) {
                    if ((int3 == 1)) {
                        printmessage("You cannot use this to increase your Attack skill.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                };
                break;
            }
            case 2: {
                if ((item_getparam(int2, 4019) == 0)) {
                    if ((int3 == 1)) {
                        printmessage("You cannot use this to increase your Strength skill.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                };
                break;
            }
            case 1: {
                if ((item_getparam(int2, 4020) == 0)) {
                    if ((int3 == 1)) {
                        printmessage("You cannot use this to increase your Defence skill.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                };
                break;
            }
            case 3: {
                if ((item_getparam(int2, 4021) == 0)) {
                    if ((int3 == 1)) {
                        printmessage("You cannot use this to increase your Constitution skill.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                };
                break;
            }
            case 4: {
                if ((item_getparam(int2, 4022) == 0)) {
                    if ((int3 == 1)) {
                        printmessage("You cannot use this to increase your Ranged skill.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                };
                break;
            }
            case 6: {
                if ((item_getparam(int2, 4023) == 0)) {
                    if ((int3 == 1)) {
                        printmessage("You cannot use this to increase your Magic skill.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                };
                break;
            }
            case 5: {
                if ((item_getparam(int2, 4024) == 0)) {
                    if ((int3 == 1)) {
                        printmessage("You cannot use this to increase your Prayer skill.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                };
                break;
            }
            case 23: {
                if ((item_getparam(int2, 4025) == 0)) {
                    if ((int3 == 1)) {
                        printmessage("You cannot use this to increase your Summoning skill.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                };
                break;
            }
            case 15: {
                if ((item_getparam(int2, 4026) == 0)) {
                    if ((int3 == 1)) {
                        printmessage("You cannot use this to increase your Herblore skill.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                };
                break;
            }
            case 18: {
                if ((item_getparam(int2, 4027) == 0)) {
                    if ((int3 == 1)) {
                        printmessage("You cannot use this to increase your Slayer skill.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                };
                break;
            }
            case 28: {
                if ((item_getparam(int2, 7946) == 0)) {
                    if ((int3 == 1)) {
                        printmessage("You cannot use this to increase your Necromancy skill.");
                        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                    };
                    return 0;
                };
                break;
            }
            default: {
                if ((int3 == 1)) {
                    printmessage("You may only use this to increase combat related skills.");
                    SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
                };
                return 0;
            }
        };
    };
    if ((item_getparam(int2, 4762) == 1)) {
        switch (int0) {
            case 0: {
                if ((script10926(0 as stat, item_getparam(int2, 4763), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 2: {
                if ((script10926(2 as stat, item_getparam(int2, 4764), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 4: {
                if ((script10926(4 as stat, item_getparam(int2, 4765), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 6: {
                if ((script10926(6 as stat, item_getparam(int2, 4766), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 1: {
                if ((script10926(1 as stat, item_getparam(int2, 4767), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 3: {
                if ((script10926(3 as stat, item_getparam(int2, 4768), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 5: {
                if ((script10926(5 as stat, item_getparam(int2, 4769), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 16: {
                if ((script10926(16 as stat, item_getparam(int2, 4770), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 15: {
                if ((script10926(15 as stat, item_getparam(int2, 4771), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 17: {
                if ((script10926(17 as stat, item_getparam(int2, 4772), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 12: {
                if ((script10926(12 as stat, item_getparam(int2, 4773), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 20: {
                if ((script10926(20 as stat, item_getparam(int2, 4774), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 14: {
                if ((script10926(14 as stat, item_getparam(int2, 4775), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 13: {
                if ((script10926(13 as stat, item_getparam(int2, 4776), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 10: {
                if ((script10926(10 as stat, item_getparam(int2, 4777), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 7: {
                if ((script10926(7 as stat, item_getparam(int2, 4778), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 11: {
                if ((script10926(11 as stat, item_getparam(int2, 4779), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 8: {
                if ((script10926(8 as stat, item_getparam(int2, 4780), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 9: {
                if ((script10926(9 as stat, item_getparam(int2, 4781), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 18: {
                if ((script10926(18 as stat, item_getparam(int2, 4782), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 19: {
                if ((script10926(19 as stat, item_getparam(int2, 4783), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 22: {
                if ((script10926(22 as stat, item_getparam(int2, 4784), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 21: {
                if ((script10926(21 as stat, item_getparam(int2, 4785), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 23: {
                if ((script10926(23 as stat, item_getparam(int2, 5557), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 24: {
                if ((script10926(24 as stat, item_getparam(int2, 4787), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 25: {
                if ((script10926(25 as stat, item_getparam(int2, 4788), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 26: {
                if ((script10926(26 as stat, item_getparam(int2, 5883), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 27: {
                if ((script10926(27 as stat, item_getparam(int2, 5986), int3) == 0)) {
                    return 0;
                };
                break;
            }
            case 28: {
                if ((script10926(28 as stat, item_getparam(int2, 8873), int3) == 0)) {
                    return 0;
                };
                break;
            }
        };
    };
    if ((int3 == 1)) {
        SOUND_VORBIS_VOLUME(6185 as vorbis, 1, 0, 100);
    };
    return 1;
}