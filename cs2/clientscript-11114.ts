//
function script11114(int0: int, int1: unknown_int, int2: int, int3: int, int4: component, int5: component, int6: component): void {
    CC_DELETEALL(int5);
    IF_SETTEXT(enum_getvalue(0, 36, 9847 as cs2enum, int0), int4);
    var string0 = `${script11120(int1)}<br>`;
    if (((int3 == 1) || (int3 == 2))) {
        IF_SETHIDE(true, int6);
        var int1 = -1;
        string0 = "";
    } else if ((script11118(int1, int2) == 1)) {
        stack(18694);
        stack(int6);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, int6);
    } else {
        stack(18695);
        stack(int6);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, int6);
    };
    var string1 = `${string0}Current value: ${inttostring(int2, 10)}`;
    var int7 = 0;
    var int8 = 0;
    var int9 = 90;
    CC_CREATE(int5, 5, IF_GETNEXTSUBID(int5));
    CC_SETPOSITION(int9, 2, 0, 0);
    CC_SETGRAPHIC(19456 as graphic);
    [int7, int8] = CC_GETGRAPHICDIMENSIONS();
    CC_SETSIZE(int7, int8, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script3876, string1, int5, CC_GETID()));
    var int10 = 0;
    var int11 = 0;
    var int12 = ((int7 - 4) / 2);
    switch (int1) {
        case -1: {
            break;
        }
        case 0: {
            int11 = 0;
            int10 = (int12 - 16);
            break;
        }
        case 1: {
            int11 = (int12 - 16);
            int10 = 32;
            break;
        }
        case 2: {
            int11 = (int12 + 16);
            int10 = (int12 - 16);
            break;
        }
    };
    CC_CREATE(int5, 5, IF_GETNEXTSUBID(int5));
    CC_SETPOSITION(((int9 + int11) + 2), 5, 0, 0);
    CC_SETGRAPHIC(24897 as graphic);
    CC_SETSIZE(int10, 11, 0, 0);
    CC_SETTILING(true);
    var int13 = 24768 as graphic;
    var int14 = SCALE(int2, 500, 16);
    if (((int3 != 1) && (int3 != 3))) {
        if ((int14 > int12)) {
            int14 = int12;
            if ((int2 > 2500)) {
                int13 = 24770 as graphic;
            } else {
                int13 = 24769 as graphic;
            };
        };
        if ((int14 < (0 - int12))) {
            int14 = (0 - int12);
            if ((int2 < -2500)) {
                int13 = 24896 as graphic;
            } else {
                int13 = 24895 as graphic;
            };
        };
        CC_CREATE(int5, 5, IF_GETNEXTSUBID(int5));
        CC_SETPOSITION((((int9 + int12) + int14) - 3), 2, 0, 0);
        CC_SETGRAPHIC(int13);
        CC_SETSIZE(13, 19, 0, 0);
    };
    return;
}