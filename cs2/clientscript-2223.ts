//
function script2223(int0: unknown_int, int1: unknown_int, int2: int): void {
    var int3 = script8599(int2);
    var int4 = script8592(int2);
    var int5 = script8593(int2);
    var int6 = -1 as chatphrase;
    var int7 = (IF_GETNEXTSUBID(int4) - 1);
    if ((IF_FIND(int4) == 1)) {
        int6 = cc_getparam(3648);
    };
    var int8 = 1;
    var int9 = 0;
    var int10 = 1000;
    var int11 = -1;
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
            if ((CC_FIND(int4, (script1844(script8617(int2)) + 1)) == 1)) {
                if ((CC_FIND[1](int4, 0) == 1)) {
                    CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                    CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
                    CC_SETCOLOUR[1](5733957);
                    CC_SETFILL[1](1);
                };
                if ((CC_GETY() < IF_GETSCROLLY(int4))) {
                    script72(int5, int4, (IF_GETSCROLLY(int4) - CC_GETHEIGHT()));
                } else if (((CC_GETY() + CC_GETHEIGHT()) > (IF_GETHEIGHT(int4) + IF_GETSCROLLY(int4)))) {
                    script72(int5, int4, IF_GETSCROLLHEIGHT(int4));
                };
            };
            break;
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
            if ((CC_FIND(int4, (script1844(script8617(int2)) + 1)) == 1)) {
                if ((CC_FIND[1](int4, 0) == 1)) {
                    CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                    CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
                    CC_SETCOLOUR[1](5733957);
                    CC_SETFILL[1](1);
                };
                if (((CC_GETY() + CC_GETHEIGHT()) > (IF_GETHEIGHT(int4) + IF_GETSCROLLY(int4)))) {
                    script72(int5, int4, (IF_GETSCROLLY(int4) + CC_GETHEIGHT()));
                } else if ((CC_GETY() < IF_GETSCROLLY(int4))) {
                    script72(int5, int4, 0);
                };
            };
            break;
        }
        case 102: {
            script1050(script8613(int2), script8605(int2), int2);
            break;
        }
        case 13: {
            script1054(int2);
            break;
        }
        case 84: {
            if (((script8617(int2) >= 0) && (CC_FIND(int4, (script8617(int2) + 1)) == 1))) {
                script1074(int3, int6, script1844(script8617(int2)), int2);
            };
            break;
        }
        case 85: {
            if ((script8615(int2) == false)) {
                script1054(int2);
            } else {
                script8618(int2, -1);
                IF_SETHIDE(true, script8588(int2));
                IF_SETHIDE(true, script8590(int2));
                IF_SETHIDE(true, script8594(int2));
                IF_SETHIDE(false, script8598(int2));
                IF_SETHIDE(false, script8599(int2));
                IF_SETHIDE(true, script8600(int2));
            };
            break;
        }
        default: {
            if ((CHAR_ISALPHANUMERIC(int1) == 1)) {
                while ((int9 < int7)) {
                    if ((((CC_FIND(int4, (script1844(int9) + 1)) == 1) && (STRING_INDEXOF_CHAR(CHAR_TOLOWERCASE(LOWERCASE(CC_GETTEXT()), int1), 0) == 0)) && (CC_FIND[1](int4, 0) == 1))) {
                        CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                        CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
                        CC_SETCOLOUR[1](5733957);
                        CC_SETFILL[1](1);
                        if ((int9 < script8617(int2))) {
                            if ((CC_GETY() < IF_GETSCROLLY(int4))) {
                                script72(int5, int4, CC_GETY());
                            };
                        } else if (((int9 > script8617(int2)) && ((CC_GETY() + CC_GETHEIGHT()) > (IF_GETHEIGHT(int4) + IF_GETSCROLLY(int4))))) {
                            script72(int5, int4, ((CC_GETY() + CC_GETHEIGHT()) - IF_GETHEIGHT(int4)));
                        };
                        script8618(int2, int9);
                        return;
                    };
                    int9 = (int9 + 1);
                };
            };
            break;
        }
    };
    return;
}