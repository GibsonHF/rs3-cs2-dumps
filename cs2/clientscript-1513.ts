//[proc,player_kit_body_redraw]
function script1513(): void {
    var int0 = -1 as cs2enum;
    var int1 = -1 as cs2enum;
    var int2 = -1;
    var int3 = -1 as idkit;
    var int4 = -1 as cs2enum;
    var int5 = -1 as cs2enum;
    var int6 = -1 as cs2enum;
    var int7 = -1;
    var int8 = -1;
    switch (varclient_778) {
        case 1: {
            stack(1052);
            stack(47775756);
            IF_SETGRAPHIC();
            stack(1045);
            stack(47775757);
            IF_SETGRAPHIC();
            stack(1057);
            stack(47775758);
            IF_SETGRAPHIC();
            stack(1054);
            stack(47775759);
            IF_SETGRAPHIC();
            int2 = script15531(3);
            if ((GENDER() == 1)) {
                int0 = 693 as cs2enum;
                int1 = 1593 as cs2enum;
            } else {
                int0 = 711 as cs2enum;
                int1 = 702 as cs2enum;
            };
            int3 = varclient_1011;
            int4 = 3282 as cs2enum;
            int5 = 2347 as cs2enum;
            int6 = 2348 as cs2enum;
            int7 = 1;
            int8 = varclient_1016;
            break;
        }
        case 2: {
            stack(1052);
            stack(47775756);
            IF_SETGRAPHIC();
            stack(1053);
            stack(47775757);
            IF_SETGRAPHIC();
            stack(1049);
            stack(47775758);
            IF_SETGRAPHIC();
            stack(1054);
            stack(47775759);
            IF_SETGRAPHIC();
            int2 = script15531(4);
            if ((GENDER() == 1)) {
                int0 = 751 as cs2enum;
            } else {
                int0 = 749 as cs2enum;
            };
            int1 = 750 as cs2enum;
            int3 = varclient_1012;
            break;
        }
        case 3: {
            stack(1052);
            stack(47775756);
            IF_SETGRAPHIC();
            stack(1053);
            stack(47775757);
            IF_SETGRAPHIC();
            stack(1057);
            stack(47775758);
            IF_SETGRAPHIC();
            stack(1046);
            stack(47775759);
            IF_SETGRAPHIC();
            int2 = script15531(5);
            if ((GENDER() == 1)) {
                int0 = 1607 as cs2enum;
                int1 = 1606 as cs2enum;
            } else {
                int0 = 1586 as cs2enum;
                int1 = 1585 as cs2enum;
            };
            int3 = varclient_1013;
            int4 = 3284 as cs2enum;
            int5 = 2347 as cs2enum;
            int6 = 2348 as cs2enum;
            int7 = 2;
            int8 = varclient_1017;
            break;
        }
        default: {
            varclient_778 = 0;
            stack(1044);
            stack(47775756);
            IF_SETGRAPHIC();
            stack(1053);
            stack(47775757);
            IF_SETGRAPHIC();
            stack(1057);
            stack(47775758);
            IF_SETGRAPHIC();
            stack(1054);
            stack(47775759);
            IF_SETGRAPHIC();
            int2 = script15531(2);
            if ((GENDER() == 1)) {
                int0 = 1591 as cs2enum;
                int1 = 1590 as cs2enum;
            } else {
                int0 = 690 as cs2enum;
                int1 = 689 as cs2enum;
            };
            int3 = varclient_1010;
            int4 = 3282 as cs2enum;
            int5 = 2347 as cs2enum;
            int6 = 2348 as cs2enum;
            int7 = 1;
            int8 = varclient_1016;
            break;
        }
    };
    CC_DELETEALL(comp(729, 17));
    var int9 = 0;
    var int10 = ENUM_GETOUTPUTCOUNT(int0);
    var int11 = -1 as idkit;
    var string0 = "";
    var int12 = 0;
    var int13 = 0;
    while ((int9 < int10)) {
        int11 = enum_getvalue(0, 10, int0, int9);
        string0 = enum_getvalue(0, 36, int1, int9);
        CC_CREATE(comp(729, 17), 5, IF_GETNEXTSUBID(comp(729, 17)));
        CC_SETSIZE(18, 18, 0, 0);
        CC_SETPOSITION(0, (int12 + 1), 0, 0);
        CC_CREATE[1](comp(729, 17), 4, IF_GETNEXTSUBID(comp(729, 17)));
        CC_SETSIZE[1](20, 19, 1, 0);
        CC_SETPOSITION[1](0, int12, 2, 0);
        CC_SETTEXTALIGN[1](0, 1, 0);
        script15722(3, 4);
        CC_SETTEXTFONT[1](27 as fontmetrics);
        CC_SETTEXT[1](string0);
        if ((int11 == int3)) {
            CC_SETGRAPHIC(18544 as graphic);
            int13 = int12;
        } else {
            CC_SETGRAPHIC(18542 as graphic);
            CC_SETOP(1, string0);
            CC_SETOP[1](1, string0);
            CC_SETONOP(callback(script1514, -2147483644, int11, int2));
            CC_SETONOP[1](callback(script1514, -2147483644, int11, int2));
        };
        int9 = (int9 + 1);
        int12 = (int12 + 20);
    };
    if ((int12 > IF_GETHEIGHT(comp(729, 17)))) {
        IF_SETSIZE(20, 4, 1, 1, comp(729, 17));
        IF_SETSCROLLSIZE(0, int12, comp(729, 17));
        if ((int13 < IF_GETSCROLLY(comp(729, 17)))) {
            IF_SETSCROLLPOS(0, (int13 - 5), comp(729, 17));
        } else if (((int13 + 19) >= (IF_GETSCROLLY(comp(729, 17)) + IF_GETHEIGHT(comp(729, 17))))) {
            IF_SETSCROLLPOS(0, ((int13 + 25) - IF_GETHEIGHT(comp(729, 17))), comp(729, 17));
        };
        IF_SETHIDE(false, comp(729, 18));
        script31(comp(729, 18), comp(729, 17), 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    } else {
        IF_SETSIZE(4, 4, 1, 1, comp(729, 17));
        IF_SETSCROLLSIZE(0, 0, comp(729, 17));
        IF_SETSCROLLPOS(0, 0, comp(729, 17));
        CC_DELETEALL(comp(729, 18));
        IF_SETHIDE(true, comp(729, 18));
    };
    CC_DELETEALL(comp(729, 20));
    if ((int5 == -1 as cs2enum)) {
        IF_SETSIZE(4, 4, 1, 1, comp(729, 20));
        IF_SETSCROLLSIZE(0, 0, comp(729, 20));
        IF_SETSCROLLPOS(0, 0, comp(729, 20));
        CC_DELETEALL(comp(729, 21));
        IF_SETHIDE(true, comp(729, 21));
        return;
    };
    int10 = ENUM_GETOUTPUTCOUNT(int5);
    var int14 = 5;
    var int15 = 0;
    if ((((((int10 - 1) / int14) + 1) * 21) > IF_GETHEIGHT(comp(729, 20)))) {
        [int14, int15] = [4, 2];
    };
    int9 = 0;
    int12 = 0;
    var int16 = 0;
    var int17 = -1 as graphic;
    var int18 = 0;
    while ((int9 < int10)) {
        int18 = enum_getvalue(0, 0, int4, int9);
        string0 = enum_getvalue(0, 36, int6, int9);
        CC_CREATE(comp(729, 20), 3, IF_GETNEXTSUBID(comp(729, 20)));
        CC_SETSIZE(20, 20, 0, 0);
        CC_SETFILL(1);
        CC_SETPOSITION(((int16 * CC_GETWIDTH()) + int15), int12, 0, 0);
        CC_SETCOLOUR(enum_getvalue(0, 0, int5, int9));
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        CC_CREATE[1](47775764, 5, IF_GETNEXTSUBID(47775764));
        CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
        if ((int18 == int8)) {
            CC_SETGRAPHIC[1](2289 as graphic);
            int13 = int12;
        } else {
            int17 = 2288 as graphic;
            CC_SETGRAPHIC[1](int17);
            CC_SETONMOUSELEAVE[1](callback(script688, -2147483645, CC_GETID[1](), int17));
            int17 = 2289;
            CC_SETONMOUSEOVER[1](callback(script688, -2147483645, CC_GETID[1](), int17));
            CC_SETOP[1](1, string0);
            CC_SETONOP[1](callback(script1515, -2147483644, int18, int7));
        };
        int9 = (int9 + 1);
        if ((int16 < (int14 - 1))) {
            int16 = (int16 + 1);
        } else {
            int16 = 0;
            int12 = (int12 + CC_GETHEIGHT());
        };
    };
    if ((int16 != 0)) {
        int12 = (int12 + 21);
    };
    if (((int12 > IF_GETHEIGHT(comp(729, 20))) || (int14 < 5))) {
        IF_SETSIZE(20, 4, 1, 1, comp(729, 20));
        IF_SETSCROLLSIZE(0, int12, comp(729, 20));
        if ((int13 < IF_GETSCROLLY(comp(729, 20)))) {
            IF_SETSCROLLPOS(0, (int13 - 5), comp(729, 20));
        } else if (((int13 + 21) >= (IF_GETSCROLLY(comp(729, 20)) + IF_GETHEIGHT(comp(729, 20))))) {
            IF_SETSCROLLPOS(0, ((int13 + 25) - IF_GETHEIGHT(comp(729, 20))), comp(729, 20));
        };
        IF_SETHIDE(false, comp(729, 21));
        script31(comp(729, 21), comp(729, 20), 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    } else {
        IF_SETSIZE(4, 4, 1, 1, comp(729, 20));
        IF_SETSCROLLSIZE(0, 0, comp(729, 20));
        IF_SETSCROLLPOS(0, 0, comp(729, 20));
        CC_DELETEALL(comp(729, 21));
        IF_SETHIDE(true, comp(729, 21));
    };
    return;
}