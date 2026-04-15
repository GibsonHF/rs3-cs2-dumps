//
function script2301(int0: unknown_int, int1: unknown_int, int2: int): void {
    var int3 = script8599(int2);
    var int4 = script8596(int2);
    var int5 = script8595(int2);
    var int6 = script8597(int2);
    var int7 = (IF_GETNEXTSUBID(int5) - 1);
    var int8 = STRING_LENGTH(script8611(int2));
    var int9 = CHATPHRASE_FIND(script8611(int2), 0);
    var int10 = 0;
    var int11 = -1 as chatphrase;
    switch (int0) {
        case 104: {
            if ((int7 == 0)) {
                return;
            };
            if ((script8617(int2) <= 0)) {
                script8618(int2, (int7 - 1));
            } else {
                script8618(int2, (script8617(int2) - 1));
            };
            if ((CC_FIND(int5, (script8617(int2) + 1)) == 1)) {
                if ((CC_FIND[1](int5, 0) == 1)) {
                    CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                    CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
                    CC_SETCOLOUR[1](5733957);
                    CC_SETFILL[1](1);
                };
                if ((CC_GETY() < IF_GETSCROLLY(int5))) {
                    script72(int6, int5, (IF_GETSCROLLY(int5) - CC_GETHEIGHT()));
                } else if (((CC_GETY() + CC_GETHEIGHT()) > (IF_GETHEIGHT(int5) + IF_GETSCROLLY(int5)))) {
                    script72(int6, int5, IF_GETSCROLLHEIGHT(int5));
                };
            };
            return;
        }
        case 105: {
            if ((int7 == 0)) {
                return;
            };
            if ((script8617(int2) == (int7 - 1))) {
                script8618(int2, 0);
            } else {
                script8618(int2, (script8617(int2) + 1));
            };
            if ((CC_FIND(int5, (script8617(int2) + 1)) == 1)) {
                if ((CC_FIND[1](int5, 0) == 1)) {
                    CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                    CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
                    CC_SETCOLOUR[1](5733957);
                    CC_SETFILL[1](1);
                };
                if (((CC_GETY() + CC_GETHEIGHT()) > (IF_GETHEIGHT(int5) + IF_GETSCROLLY(int5)))) {
                    script72(int6, int5, (IF_GETSCROLLY(int5) + CC_GETHEIGHT()));
                } else if ((CC_GETY() < IF_GETSCROLLY(int5))) {
                    script72(int6, int5, 0);
                };
            };
            return;
        }
        case 102: {
            script1050(script8613(int2), script8605(int2), int2);
            return;
        }
        case 13: {
            script1054(int2);
            return;
        }
        case 84: {
            if ((script8617(int2) < 0)) {
                if ((int8 > 0)) {
                    script8622(int2, 0);
                    IF_SETONTIMER(callback(), int4);
                    script1904(int3, int5, int6, int2);
                } else {
                    script1054(int2);
                };
            } else if (((int9 > 0) && (CC_FIND(int5, (script8617(int2) + 1)) == 1))) {
                while ((int10 < int9)) {
                    int11 = CHATPHRASE_FINDNEXT();
                    if ((strcmp(CC_GETTEXT(), CHATPHRASE_GETTEXT(int11)) == 0)) {
                        script1071(int3, int11, 0, int2);
                        return;
                    };
                    int10 = (int10 + 1);
                };
            };
            return;
        }
        case 85: {
            if ((int8 > 0)) {
                script8612(int2, SUBSTRING(script8611(int2), 0, (int8 - 1)));
            } else if ((script8615(int2) == false)) {
                script1054(int2);
            } else {
                script8618(int2, -1);
                IF_SETHIDE(true, script8588(int2));
                IF_SETHIDE(true, script8590(int2));
                IF_SETHIDE(true, script8594(int2));
                IF_SETHIDE(false, script8598(int2));
                IF_SETHIDE(false, script8599(int2));
                IF_SETHIDE(true, script8600(int2));
                script1068(int3, 0, int2);
                return;
            };
            break;
        }
        default: {
            if (((CHAR_ISPRINTABLE(int1) == 1) && (int8 < 80))) {
                script8612(int2, REMOVETAGS(APPEND_CHAR(script8611(int2), int1)));
            } else {
                return;
            };
            break;
        }
    };
    IF_SETTEXT(`Search for: ${script8611(int2)}*`, int4);
    IF_SETTEXTSHADOW(1, int4);
    script8622(int2, 50);
    IF_SETONTIMER(callback(script1903, int3, int4, int5, int6, int2), int4);
    return;
}