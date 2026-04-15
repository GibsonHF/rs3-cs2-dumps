//
function script11449(int0: struct, int1: int, int2: unknown_int, int3: unknown_int): void {
    IF_SETHIDE(false, comp(1624, 62));
    IF_SETPOSITION(8, IF_GETY(comp(1624, 63)), 2, 0, comp(1624, 63));
    IF_SETOBJECT_NONUM(struct_getparam(int0, 5067), 5, comp(1624, 60));
    if ((strcmp("", struct_getparam(int0, 5066)) != 0)) {
        IF_SETTEXT(struct_getparam(int0, 5066), comp(1624, 61));
    } else {
        IF_SETTEXT(OC_NAME(struct_getparam(int0, 5067)), comp(1624, 61));
    };
    var int4 = struct_getparam(int0, 5069);
    var int5 = int1;
    var int6 = struct_getparam(varplayer_5426, 5068);
    var int7 = struct_getparam(int0, 5067);
    var string0 = "Purchase";
    if ((struct_getparam(int0, 5634) == 1)) {
        if ((int4 > 0)) {
            int5 = MIN(int1, (varplayer_5427 / int4));
        };
        if ((OC_STACKABLE(int7) == 0)) {
            int5 = MIN((int6 * int5), INV_FREESPACE(93 as inv));
        } else if ((INV_TOTAL(93 as inv, int7) > 0)) {
            int5 = MIN(int5, (2147483647 - INV_TOTAL(93 as inv, int7)));
        };
        int5 = MAX(int5, 1);
    };
    switch (int0) {
        case 31507: {
            if ((varbitplayer_4540 == 1)) {
                int4 = 0;
                string0 = "Re-colour";
            };
            break;
        }
        case 31508: {
            if ((varbitplayer_4538 == 1)) {
                int4 = 0;
                string0 = "Re-colour";
            };
            break;
        }
        case 31509: {
            if ((varbitplayer_4539 == 1)) {
                int4 = 0;
                string0 = "Re-colour";
            };
            break;
        }
        case 31510: {
            if ((varbitplayer_4541 == 1)) {
                int4 = 0;
                string0 = "Re-Colour";
            };
            break;
        }
    };
    if ((varplayer_5427 < int4)) {
        IF_SETTEXT("You do not have enough currency for the purchase of:", comp(1624, 59));
        IF_SETTEXT("OK", comp(1624, 73));
        IF_SETHIDE(true, comp(1624, 62));
        IF_SETPOSITION(0, IF_GETY(comp(1624, 63)), 1, 0, comp(1624, 63));
    } else if (((int2 == 1) && (int3 == 0))) {
        IF_SETTEXT("You already have the maximum amount of clue scrolls.", comp(1624, 59));
        IF_SETTEXT("OK", comp(1624, 73));
        IF_SETHIDE(true, comp(1624, 62));
        IF_SETPOSITION(0, IF_GETY(comp(1624, 63)), 1, 0, comp(1624, 63));
    } else if (((PLAYERMEMBER() == false) && (OC_MEMBERS(int7) == 1))) {
        IF_SETTEXT("This item is for members only:", comp(1624, 59));
        IF_SETTEXT("OK", comp(1624, 73));
        IF_SETHIDE(true, comp(1624, 62));
        IF_SETPOSITION(0, IF_GETY(comp(1624, 63)), 1, 0, comp(1624, 63));
    } else {
        IF_SETTEXT(`Spend ${TOSTRING_LOCALISED((int4 * int5), 1)} on purchasing ${TOSTRING_LOCALISED(int5, 1)}:`, comp(1624, 59));
        IF_SETTEXT(string0, comp(1624, 73));
    };
    IF_SETHIDE(false, comp(1624, 11));
    return;
}