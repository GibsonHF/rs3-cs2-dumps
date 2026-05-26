//
function script917(): void {
    CC_DELETEALL(29425667);
    varclient_742 = 0;
    var int0 = INV_TOTAL(93, varclient_743);
    var int1 = script17404();
    if ((varclient_743 != -1 as obj)) {
        if ((varclient_743 == 995 as obj)) {
            int0 = int1;
        };
        script919();
        IF_SETHIDE(0, 29425671);
        IF_SETSIZE(16384, 147, 2, 0, 29425666);
    } else {
        IF_SETOBJECT_NONUM(-1, -1, 29425673);
        IF_SETHIDE(1, 29425671);
        IF_SETSIZE(16384, 187, 2, 0, 29425666);
        if (((varplayer_135 != -1 as obj) && branch_lt_long[55](script17400(), script17377(varplayer_137, INT_TO_LONG(varplayer_136))))) {
            IF_SETCOLOUR(16711680, 29425675);
        } else {
            IF_SETCOLOUR(varclient_1241, 29425675);
        };
    };
    if (((varclient_743 == -1 as obj) || (varclient_743 == 995 as obj))) {
        switch (int1) {
            case 0: {
                IF_SETTEXT("You have no coins.", 29425675);
                break;
            }
            case 1: {
                IF_SETTEXT("You have one coin.", 29425675);
                break;
            }
            default: {
                IF_SETTEXT(`You have ${script17372(script17400(), 3, 1)} coins.`, 29425675);
                break;
            }
        };
    } else {
        switch (int0) {
            case 0: {
                IF_SETTEXT(`You have no ${enum_getvalue(33, 36, 11621 as cs2enum, varclient_743)}.`, 29425675);
                break;
            }
            case 1: {
                IF_SETTEXT(`You have one ${enum_getvalue(33, 36, 923 as cs2enum, varclient_743)}.`, 29425675);
                break;
            }
            case 2147483647: {
                IF_SETTEXT(`You have more than ${script940(int0)} ${enum_getvalue(33, 36, 11621 as cs2enum, varclient_743)}!`, 29425675);
                break;
            }
            default: {
                IF_SETTEXT(`You have ${script940(int0)} ${enum_getvalue(33, 36, 11621 as cs2enum, varclient_743)}.`, 29425675);
                break;
            }
        };
    };
    var int2 = 181;
    var int3 = script920(int2);
    if ((int3 > IF_GETHEIGHT(29425667))) {
        int2 = 165;
        CC_DELETEALL(29425667);
        int3 = script920(int2);
    } else {
        CC_DELETEALL(29425668);
    };
    IF_SETSCROLLSIZE(int2, int3, 29425667);
    IF_SETSIZE(int2, 6, 0, 1, 29425667);
    IF_SETSCROLLPOS(0, 0, 29425667);
    if ((int3 > IF_GETHEIGHT(29425667))) {
        script31(29425668, 29425667, 792, 789, 790, 791, 773, 788);
    };
    return;
}