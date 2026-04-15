//
function script7174(int0: unknown_int, int1: unknown_int, int2: int, string0: string): void {
    if ((strcmp(string0, "") == 0)) {
        return;
    };
    varclient_2232 = int2;
    var int3 = script8875(4);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    var int4 = IF_GETWIDTH(int3);
    var int5 = IF_GETHEIGHT(int3);
    var int6 = PARAHEIGHT(string0, ((int4 * 3) / 4), 30 as fontmetrics);
    var int7 = PARAWIDTH(string0, ((int4 * 3) / 4), 30 as fontmetrics);
    var int8 = (int6 * 32);
    var int9 = (int7 + 12);
    var int10 = (int8 + 10);
    IF_SETSIZE((int9 + 6), (6 + int10), 0, 0, comp(1372, 0));
    IF_SETSIZE(int9, int10, 0, 0, comp(1372, 1));
    IF_SETPOSITION(0, 0, 1, 1, comp(1372, 1));
    IF_SETSIZE(int9, int10, 0, 0, comp(1372, 4));
    IF_SETPOSITION(0, 0, 1, 1, comp(1372, 4));
    IF_SETSIZE(int7, int8, 0, 0, comp(1372, 3));
    IF_SETPOSITION(0, 0, 1, 1, comp(1372, 3));
    var int11 = 0;
    var int12 = 0;
    var int13 = (int5 / 20);
    switch (int0) {
        case 0: {
            int11 = 40;
            break;
        }
        case 1: {
            int11 = ((int4 / 2) - (int9 / 2));
            break;
        }
        case 2: {
            int11 = ((int4 - int9) - 40);
            break;
        }
    };
    switch (int1) {
        case 0: {
            int12 = int13;
            break;
        }
        case 1: {
            int12 = ((int5 / 2) - (int10 / 2));
            break;
        }
        case 2: {
            int12 = ((int5 - int10) - int13);
            break;
        }
    };
    IF_SETPOSITION(int11, int12, 0, 0, comp(1372, 0));
    IF_SETTEXT(string0, comp(1372, 3));
    IF_SETTEXTALIGN(0, 1, 0, comp(1372, 3));
    IF_SETTEXTFONT(30 as fontmetrics, comp(1372, 3));
    IF_SETHIDE(false, comp(1372, 0));
    var int14 = MAX(0, (1 + STRING_INDEXOF_CHAR(string0, 58, 0)));
    switch (varclient_2233) {
        case 1: {
            script7179();
            break;
        }
        case 2: {
            script7180(string0, int14);
            break;
        }
        case 3: {
            script7181(string0, int14);
            break;
        }
        case 4: {
            script7184();
            break;
        }
        case 5: {
            script7185();
            break;
        }
        case 6: {
            script12784();
            break;
        }
        default: {
            script7179();
            break;
        }
    };
    return;
}