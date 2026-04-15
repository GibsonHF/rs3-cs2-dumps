//
function script917(): void {
    CC_DELETEALL(comp(449, 3));
    varclient_742 = 0;
    var int0 = INV_TOTAL(93 as inv, varclient_743);
    var int1 = script17404();
    if ((varclient_743 != -1 as obj)) {
        if ((varclient_743 == 995 as obj)) {
            int0 = int1;
        };
        script919();
        IF_SETHIDE(false, comp(449, 7));
        IF_SETSIZE(16384, 147, 2, 0, comp(449, 2));
    } else {
        IF_SETOBJECT_NONUM(-1 as obj, -1, comp(449, 9));
        IF_SETHIDE(true, comp(449, 7));
        IF_SETSIZE(16384, 187, 2, 0, comp(449, 2));
        if (((varplayer_135 != -1 as obj) && branch_lt_long[55](script17400(), script17377(varplayer_137, INT_TO_LONG(varplayer_136))))) {
            IF_SETCOLOUR(16711680, comp(449, 11));
        } else {
            IF_SETCOLOUR(varclient_1241, comp(449, 11));
        };
    };
    if (((varclient_743 == -1 as obj) || (varclient_743 == 995 as obj))) {
        switch (int1) {
            case 0: {
                IF_SETTEXT("You have no coins.", comp(449, 11));
                break;
            }
            case 1: {
                IF_SETTEXT("You have one coin.", comp(449, 11));
                break;
            }
            default: {
                IF_SETTEXT(`You have ${script17372(script17400(), 3, 1)} coins.`, comp(449, 11));
                break;
            }
        };
    } else {
        switch (int0) {
            case 0: {
                IF_SETTEXT(`You have no ${enum_getvalue(33, 36, 11621 as cs2enum, varclient_743)}.`, comp(449, 11));
                break;
            }
            case 1: {
                IF_SETTEXT(`You have one ${enum_getvalue(33, 36, 923 as cs2enum, varclient_743)}.`, comp(449, 11));
                break;
            }
            case 2147483647: {
                IF_SETTEXT(`You have more than ${script940(int0)} ${enum_getvalue(33, 36, 11621 as cs2enum, varclient_743)}!`, comp(449, 11));
                break;
            }
            default: {
                IF_SETTEXT(`You have ${script940(int0)} ${enum_getvalue(33, 36, 11621 as cs2enum, varclient_743)}.`, comp(449, 11));
                break;
            }
        };
    };
    var int2 = 181;
    var int3 = script920(int2);
    if ((int3 > IF_GETHEIGHT(comp(449, 3)))) {
        int2 = 165;
        CC_DELETEALL(comp(449, 3));
        int3 = script920(int2);
    } else {
        CC_DELETEALL(comp(449, 4));
    };
    IF_SETSCROLLSIZE(int2, int3, comp(449, 3));
    IF_SETSIZE(int2, 6, 0, 1, comp(449, 3));
    IF_SETSCROLLPOS(0, 0, comp(449, 3));
    if ((int3 > IF_GETHEIGHT(comp(449, 3)))) {
        script31(comp(449, 4), comp(449, 3), 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    };
    return;
}