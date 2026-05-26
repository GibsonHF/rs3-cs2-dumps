//
function script11449(int0: number, int1: number, int2: number, int3: number): void {
    IF_SETHIDE(0, 106430526);
    IF_SETPOSITION(8, IF_GETY(106430527), 2, 0, 106430527);
    IF_SETOBJECT_NONUM(struct_getparam(int0, 5067), 5, 106430524);
    if ((strcmp("", struct_getparam(int0, 5066)) != 0)) {
        IF_SETTEXT(struct_getparam(int0, 5066), 106430525);
    } else {
        IF_SETTEXT(OC_NAME(struct_getparam(int0, 5067)), 106430525);
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
            int5 = MIN((int6 * int5), INV_FREESPACE(93));
        } else if ((INV_TOTAL(93, int7) > 0)) {
            int5 = MIN(int5, (2147483647 - INV_TOTAL(93, int7)));
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
        IF_SETTEXT("You do not have enough currency for the purchase of:", 106430523);
        IF_SETTEXT("OK", 106430537);
        IF_SETHIDE(1, 106430526);
        IF_SETPOSITION(0, IF_GETY(106430527), 1, 0, 106430527);
    } else if (((int2 == 1) && (int3 == 0))) {
        IF_SETTEXT("You already have the maximum amount of clue scrolls.", 106430523);
        IF_SETTEXT("OK", 106430537);
        IF_SETHIDE(1, 106430526);
        IF_SETPOSITION(0, IF_GETY(106430527), 1, 0, 106430527);
    } else if (((PLAYERMEMBER() == 0) && (OC_MEMBERS(int7) == 1))) {
        IF_SETTEXT("This item is for members only:", 106430523);
        IF_SETTEXT("OK", 106430537);
        IF_SETHIDE(1, 106430526);
        IF_SETPOSITION(0, IF_GETY(106430527), 1, 0, 106430527);
    } else {
        IF_SETTEXT(`Spend ${TOSTRING_LOCALISED((int4 * int5), 1)} on purchasing ${TOSTRING_LOCALISED(int5, 1)}:`, 106430523);
        IF_SETTEXT(string0, 106430537);
    };
    IF_SETHIDE(0, 106430475);
    return;
}