//
function script1167(): void {
    var int0 = -1 as cs2enum;
    switch (varclient_1001) {
        case 1: {
            int0 = 738 as cs2enum;
            break;
        }
        case 2: {
            int0 = 739 as cs2enum;
            break;
        }
        case 3: {
            int0 = 740 as cs2enum;
            break;
        }
        case 4: {
            int0 = 741 as cs2enum;
            break;
        }
        case 5: {
            int0 = 742 as cs2enum;
            break;
        }
        default: {
            return;
        }
    };
    script9554(comp(885, 34), comp(885, 36), comp(885, 35), enum_getvalue(0, 36, 205 as cs2enum, varclient_1001), 21218 as struct);
    var int1 = 0;
    var int2 = 0;
    var int3 = 8;
    var int4 = 10;
    var int5 = 25;
    var int6 = 5;
    var int7 = ENUM_GETOUTPUTCOUNT(int0);
    var int8 = 5;
    var int9 = -1 as obj;
    var int10 = 85;
    var int11 = comp(-1, 65535);
    var int12 = 0;
    if ((varclient_1001 == 5)) {
        int8 = 4;
        int10 = 105;
        int5 = 32;
        int3 = 10;
    };
    CC_DELETEALL(comp(885, 0));
    while ((int1 < int7)) {
        int9 = enum_getvalue(0, 33, int0, int1);
        int11 = enum_getvalue(0, 9, 737 as cs2enum, int1);
        if (((int9 != -1 as obj) && (int11 != comp(-1, 65535)))) {
            IF_SETHIDE(false, int11);
            IF_SETSIZE(int10, int10, 0, 0, int11);
            IF_SETPOSITION((int3 + ((int10 + int3) * MODULO(int1, int8))), (int4 + ((int1 / int8) * (int10 + int4))), 0, 0, int11);
            CC_CREATE(comp(885, 0), 5, int2);
            CC_SETSIZE(34, 30, 0, 0);
            unk11112(enum_getvalue(0, 33, int0, int1), -1);
            CC_SETPOSITION((int5 + IF_GETX(int11)), (int6 + IF_GETY(int11)), 0, 0);
            CC_SETOP(1, "Examine");
            CC_SETOPBASE(`<col=ff9040>${script18300(int9)}`);
            CC_CREATE(57999360, 4, (int2 + 1));
            CC_SETSIZE(IF_GETWIDTH(int11), (IF_GETWIDTH(int11) - 5), 0, 0);
            CC_SETTEXTFONT(26);
            CC_SETCOLOUR(13408512);
            CC_SETTEXTSHADOW(1);
            CC_SETTEXTALIGN(1, 2, 0);
            if ((strcmp(CC_GETTEXT(), "") == 0)) {
                CC_SETTEXT("Getting data...");
            };
            CC_SETPOSITION(IF_GETX(int11), IF_GETY(int11), 0, 0);
            int2 = (int2 + 2);
            int12 = (CC_GETY() + CC_GETHEIGHT());
        };
        int1 = (int1 + 1);
    };
    while ((int1 < ENUM_GETOUTPUTCOUNT(737 as cs2enum))) {
        IF_SETHIDE(true, enum_getvalue(0, 9, 737 as cs2enum, int1));
        int1 = (int1 + 1);
    };
    if ((int12 < IF_GETHEIGHT(comp(885, 0)))) {
        IF_SETSCROLLPOS(0, 0, comp(885, 0));
        IF_SETSCROLLSIZE(0, 0, comp(885, 0));
        CC_DELETEALL(comp(885, 1));
        IF_SETHIDE(true, comp(885, 1));
    } else {
        IF_SETHIDE(false, comp(885, 1));
        IF_SETSCROLLPOS(0, 0, comp(885, 0));
        IF_SETSCROLLSIZE(IF_GETWIDTH(comp(885, 0)), (int12 + int5), comp(885, 0));
        script31(comp(885, 1), comp(885, 0), 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    };
    return;
}