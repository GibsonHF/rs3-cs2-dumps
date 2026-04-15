//
function script5683(int0: int): void {
    CC_DELETEALL(comp(1218, 246));
    CC_DELETEALL(comp(1218, 247));
    CC_DELETEALL(comp(1218, 245));
    varclient_1753 = int0;
    varclient_1754 = script12842(int0);
    var int1 = 0;
    var int2 = -1 as cs2enum;
    var int3 = 0;
    var int4 = 0;
    var int5 = 30;
    var int6 = 0;
    IF_SETHIDE(true, comp(1218, 243));
    IF_SETHIDE(false, comp(1218, 242));
    IF_SETHIDE(true, comp(1218, 248));
    if ((int0 > 0)) {
        IF_SETHIDE(false, comp(1218, 256));
        IF_SETHIDE(false, comp(1218, 259));
        IF_SETTEXT(enum_getvalue(0, 36, 108 as cs2enum, int0), comp(1218, 4));
        if ((varbitplayer_19007 == 1)) {
            IF_SETTEXT(`${inttostring(script11862(enum_getvalue(0, 17, 681 as cs2enum, int0)), 10)}</col>`, comp(1218, 5));
        } else {
            IF_SETTEXT(inttostring(STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, int0)), 10), comp(1218, 5));
        };
        int2 = enum_getvalue(0, 26, 5421 as cs2enum, int0);
        script10428(comp(1218, 260), comp(1218, 261), int2, -1, "", varclient_1754, 0);
        script10428(comp(1218, 257), comp(1218, 258), 14116 as cs2enum, -1, "", varclient_1755, 0);
    };
    IF_SETHIDE(true, comp(1218, 20));
    IF_SETHIDE(true, comp(1218, 36));
    IF_SETHIDE(true, comp(1218, 44));
    IF_SETHIDE(true, comp(1218, 165));
    IF_SETHIDE(true, comp(1218, 221));
    IF_SETHIDE(true, comp(1218, 213));
    IF_SETHIDE(true, comp(1218, 76));
    IF_SETHIDE(true, comp(1218, 52));
    IF_SETHIDE(true, comp(1218, 60));
    IF_SETHIDE(true, comp(1218, 69));
    IF_SETHIDE(true, comp(1218, 84));
    IF_SETHIDE(true, comp(1218, 132));
    IF_SETHIDE(true, comp(1218, 116));
    IF_SETHIDE(true, comp(1218, 189));
    IF_SETHIDE(true, comp(1218, 237));
    IF_SETHIDE(true, comp(1218, 181));
    IF_SETHIDE(true, comp(1218, 108));
    IF_SETHIDE(true, comp(1218, 157));
    IF_SETHIDE(true, comp(1218, 124));
    IF_SETHIDE(true, comp(1218, 12));
    IF_SETHIDE(true, comp(1218, 197));
    IF_SETHIDE(true, comp(1218, 205));
    IF_SETHIDE(true, comp(1218, 100));
    IF_SETHIDE(true, comp(1218, 140));
    IF_SETHIDE(true, comp(1218, 229));
    IF_SETHIDE(true, comp(1218, 92));
    IF_SETHIDE(true, comp(1218, 148));
    IF_SETHIDE(true, comp(1218, 28));
    IF_SETHIDE(true, comp(1218, 173));
    IF_SETHIDE(true, comp(1218, 16));
    IF_SETHIDE(true, comp(1218, 32));
    IF_SETHIDE(true, comp(1218, 40));
    IF_SETHIDE(true, comp(1218, 161));
    IF_SETHIDE(true, comp(1218, 217));
    IF_SETHIDE(true, comp(1218, 209));
    IF_SETHIDE(true, comp(1218, 72));
    IF_SETHIDE(true, comp(1218, 48));
    IF_SETHIDE(true, comp(1218, 56));
    IF_SETHIDE(true, comp(1218, 64));
    IF_SETHIDE(true, comp(1218, 80));
    IF_SETHIDE(true, comp(1218, 128));
    IF_SETHIDE(true, comp(1218, 112));
    IF_SETHIDE(true, comp(1218, 185));
    IF_SETHIDE(true, comp(1218, 233));
    IF_SETHIDE(true, comp(1218, 177));
    IF_SETHIDE(true, comp(1218, 104));
    IF_SETHIDE(true, comp(1218, 153));
    IF_SETHIDE(true, comp(1218, 120));
    IF_SETHIDE(true, comp(1218, 8));
    IF_SETHIDE(true, comp(1218, 193));
    IF_SETHIDE(true, comp(1218, 201));
    IF_SETHIDE(true, comp(1218, 96));
    IF_SETHIDE(true, comp(1218, 136));
    IF_SETHIDE(true, comp(1218, 225));
    IF_SETHIDE(true, comp(1218, 88));
    IF_SETHIDE(true, comp(1218, 144));
    IF_SETHIDE(true, comp(1218, 24));
    IF_SETHIDE(true, comp(1218, 169));
    switch (int0) {
        case 8: {
            IF_SETHIDE(false, comp(1218, 20));
            IF_SETHIDE(false, comp(1218, 16));
            break;
        }
        case 28: {
            IF_SETHIDE(false, comp(1218, 28));
            IF_SETHIDE(false, comp(1218, 24));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1218, 36));
            IF_SETHIDE(false, comp(1218, 32));
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(1218, 44));
            IF_SETHIDE(false, comp(1218, 40));
            break;
        }
        case 22: {
            IF_SETHIDE(false, comp(1218, 52));
            IF_SETHIDE(false, comp(1218, 48));
            break;
        }
        case 16: {
            IF_SETHIDE(false, comp(1218, 60));
            IF_SETHIDE(false, comp(1218, 56));
            break;
        }
        case 11: {
            IF_SETHIDE(false, comp(1218, 69));
            IF_SETHIDE(false, comp(1218, 64));
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1218, 76));
            IF_SETHIDE(false, comp(1218, 72));
            break;
        }
        case 26: {
            IF_SETHIDE(false, comp(1218, 84));
            IF_SETHIDE(false, comp(1218, 80));
            break;
        }
        case 25: {
            IF_SETHIDE(false, comp(1218, 92));
            IF_SETHIDE(false, comp(1218, 88));
            break;
        }
        case 21: {
            IF_SETHIDE(false, comp(1218, 100));
            IF_SETHIDE(false, comp(1218, 96));
            break;
        }
        case 17: {
            IF_SETHIDE(false, comp(1218, 108));
            IF_SETHIDE(false, comp(1218, 104));
            break;
        }
        case 15: {
            IF_SETHIDE(false, comp(1218, 116));
            IF_SETHIDE(false, comp(1218, 112));
            break;
        }
        case 19: {
            IF_SETHIDE(false, comp(1218, 124));
            IF_SETHIDE(false, comp(1218, 120));
            break;
        }
        case 9: {
            IF_SETHIDE(false, comp(1218, 132));
            IF_SETHIDE(false, comp(1218, 128));
            break;
        }
        case 23: {
            IF_SETHIDE(false, comp(1218, 140));
            IF_SETHIDE(false, comp(1218, 136));
            break;
        }
        case 27: {
            IF_SETHIDE(false, comp(1218, 148));
            IF_SETHIDE(false, comp(1218, 144));
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1218, 157));
            IF_SETHIDE(false, comp(1218, 153));
            break;
        }
        case 13: {
            IF_SETHIDE(false, comp(1218, 165));
            IF_SETHIDE(false, comp(1218, 161));
            break;
        }
        case 29: {
            IF_SETHIDE(false, comp(1218, 173));
            IF_SETHIDE(false, comp(1218, 169));
            break;
        }
        case 7: {
            IF_SETHIDE(false, comp(1218, 181));
            IF_SETHIDE(false, comp(1218, 177));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1218, 189));
            IF_SETHIDE(false, comp(1218, 185));
            break;
        }
        case 12: {
            IF_SETHIDE(false, comp(1218, 197));
            IF_SETHIDE(false, comp(1218, 193));
            break;
        }
        case 20: {
            IF_SETHIDE(false, comp(1218, 205));
            IF_SETHIDE(false, comp(1218, 201));
            break;
        }
        case 14: {
            IF_SETHIDE(false, comp(1218, 213));
            IF_SETHIDE(false, comp(1218, 209));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1218, 221));
            IF_SETHIDE(false, comp(1218, 217));
            break;
        }
        case 24: {
            IF_SETHIDE(false, comp(1218, 229));
            IF_SETHIDE(false, comp(1218, 225));
            break;
        }
        case 10: {
            IF_SETHIDE(false, comp(1218, 237));
            IF_SETHIDE(false, comp(1218, 233));
            break;
        }
        case 18: {
            IF_SETHIDE(false, comp(1218, 12));
            IF_SETHIDE(false, comp(1218, 8));
            break;
        }
    };
    return;
}