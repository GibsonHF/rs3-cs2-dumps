//
function script3849(int0: obj): [int, string] {
    if (((OC_MEMBERS(int0) == 1) && (MAP_MEMBERS() == 0))) {
        return [2, ""];
    };
    if (((varbitplayer_15102 == 1) && (varplayer_1295 < 400))) {
        return [2, "0"];
    };
    switch (int0) {
        case 8839:
        case 8840:
        case 8842:
        case 11663:
        case 11664:
        case 11665:
        case 31641:
        case 31642:
        case 31643:
        case 31644:
        case 31645:
        case 31646:
        case 8841:
        case 31647:
        case 31648:
        case 31649:
        case 31650:
        case 31651:
        case 31652:
        case 19785:
        case 19786:
        case 19787:
        case 19788:
        case 19789:
        case 19790: {
            if ((script11500() == 0)) {
                return [1, "You need Constitution, Attack, Defence, Strength, Ranged and Magic levels of 42 as well as Prayer level of 22 to wear this."];
            };
            break;
        }
        case 6082: {
            if ((varbitplayer_13897 < 1)) {
                return [1, "You need to load ammo into the device before you can use it."];
            };
            break;
        }
        case 32052: {
            if ((script11501(1) == 0)) {
                return [1, "You do not meet the requirements to wear this cape."];
            };
            break;
        }
        case 32053: {
            if ((script11501(2) == 0)) {
                return [1, "You do not meet the requirements to wear this cape."];
            };
            break;
        }
        case 32054: {
            if ((script11501(3) == 0)) {
                return [1, "You do not meet the requirements to wear this cape."];
            };
            break;
        }
        case 32055: {
            if ((script11501(4) == 0)) {
                return [1, "You do not meet the requirements to wear this cape."];
            };
            break;
        }
        case 32056: {
            if ((script11501(1) == 0)) {
                return [1, "You do not meet the requirements to wear this hood."];
            };
            break;
        }
        case 32057: {
            if ((script11501(2) == 0)) {
                return [1, "You do not meet the requirements to wear this hood."];
            };
            break;
        }
        case 32058: {
            if ((script11501(3) == 0)) {
                return [1, "You do not meet the requirements to wear this helmet."];
            };
            break;
        }
        case 32059: {
            if ((script11501(4) == 0)) {
                return [1, "You do not meet the requirements to wear this hood."];
            };
            break;
        }
        case 9813:
        case 34670:
        case 53824: {
            if ((ACHIEVEMENT_REQSTATE(1 as achievement) != -2)) {
                return [1, "You need to have completed all of the quests to wear this cape."];
            };
            break;
        }
        case 9814: {
            if ((ACHIEVEMENT_REQSTATE(1 as achievement) != -2)) {
                return [1, "You need to have completed all of the quests to wear this hood."];
            };
            break;
        }
        case 3107: {
            if ((script133(pos(0,44,59,0,0), pos(3,44,59,60,63), COORD()) == 0)) {
                return [1, "Trying to walk in these would be difficult. I'll carry them for now."];
            };
            break;
        }
        case 3105:
        case 18788: {
            if ((varplayer_2339 < 80)) {
                return [1, "The sherpa's feet must be very small. I can't get them on."];
            };
            break;
        }
        case 4827: {
            if ((varbitplayer_10461 == 0)) {
                return [1, "This bow looks quite powerful. You should talk to Grish to find out more about it before trying to use it."];
            };
            break;
        }
        case 8856: {
            if ((INV_GETNUM(94 as inv, 3) != 0)) {
                return [1, "You will need to make sure your sword hand is free to equip this shield."];
            };
            break;
        }
        case 7537: {
            if ((INV_TOTALCAT(94 as inv, 65) > 0)) {
                return [1, "You need to remove your claws first."];
            };
            break;
        }
        case 7671:
        case 7673: {
            if ((INV_GETOBJ(94 as inv, 9) != -1 as obj)) {
                return [1, "You cannot wear the boxing gloves over other gloves."];
            };
            break;
        }
        case 6583: {
            if ((varbitplayer_10443 == 1)) {
                return [1, "You can't turn into a stone while controlling the penguin suit."];
            };
            break;
        }
        case 40730: {
            if ((varbitplayer_10443 == 1)) {
                return [1, "You can't turn into a pile of sand while controlling the penguin suit."];
            };
            break;
        }
        case 24863:
        case 24864: {
            if ((varbitplayer_10443 == 0)) {
                return [1, "You can only wear that while in the penguin suit."];
            };
            break;
        }
        case 11809:
        case 11810:
        case 11811:
        case 11812: {
            return [2, ""];
        }
    };
    switch (OC_CATEGORY(int0)) {
        case 71: {
            if (((int0 != 2866 as obj) && (varbitplayer_10460 == 0))) {
                return [1, "This arrow type looks very powerful. You're not sure how you should use it yet."];
            };
            break;
        }
        case 495:
        case 496: {
            return [1, "You can't equip that."];
        }
        case 65: {
            if ((INV_TOTAL(94 as inv, 7537 as obj) > 0)) {
                return [1, "You need to remove your claw first."];
            };
            break;
        }
        case 626: {
            if ((varbitplayer_10443 == 0)) {
                return [1, "You need someone to shrink you before you can control the penguin suit."];
            };
            break;
        }
        case 2759: {
            if ((STAT_BASE(4 as stat) < item_getparam(int0, 23))) {
                return [1, `You need at least level ${inttostring(item_getparam(int0, 23), 10)} Ranged to wield this crossbow.`];
            };
            break;
        }
        case 63: {
            if ((STAT_BASE(4 as stat) < item_getparam(int0, 23))) {
                return [1, `You need at least level ${inttostring(item_getparam(int0, 23), 10)} Ranged to wield these bolts.`];
            };
            break;
        }
    };
    switch (OC_WEARPOS(int0)) {
        case 9: {
            switch (INV_GETOBJ(94 as inv, 3)) {
                case 7671:
                case 7673: {
                    return [1, "You cannot wear any other gloves under boxing gloves."];
                }
                case 10023:
                case 10024: {
                    return [1, "You can't wear those on top of a falconry glove."];
                }
            };
            if ((INV_GETOBJ(94 as inv, 4) == 284 as obj)) {
                return [1, "You can't wear those on top of this protective jacket."];
            };
            break;
        }
        case 3: {
            switch (INV_GETOBJ(94 as inv, 3)) {
                case 10023:
                case 10024: {
                    return [1, "You need both hands free when you are wearing a falconry glove."];
                }
            };
            break;
        }
        case 5: {
            switch (INV_GETOBJ(94 as inv, 3)) {
                case 10023:
                case 10024: {
                    return [1, "You need both hands free when you are wearing a falconry glove."];
                }
            };
            break;
        }
    };
    if ((varbitplayer_9644 == 1)) {
        return [1, "There's not enough room inside the Barrelchest disguise to mess around with your equipment!"];
    };
    if ((varbitplayer_21785 == 1)) {
        return [2, "You should step away from the controls before equipping anything."];
    };
    if ((item_getparam(int0, 1047) == 1)) {
        return [2, ""];
    };
    if (((item_getparam(int0, 3793) == 1) && (item_getparam(int0, 5525) == -1 as obj))) {
        return [1, "You can't equip that. It's Broken."];
    };
    if ((enum_getvalue(33, 1, 15589 as cs2enum, int0) == true)) {
        return [1, "You can't equip that."];
    };
    return [0, ""];
}