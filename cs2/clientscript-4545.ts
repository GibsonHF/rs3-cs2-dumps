//
function script4545(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((((int2 == 0) || (int2 == 1)) && ((IF_GETWIDTH(int0) + int5) >= int1))) {
        IF_SETSIZE(int1, IF_GETHEIGHT(int0), 0, 0, int0);
        if ((int4 != -1)) {
            IF_SETGRAPHIC(int4, int3);
        };
        IF_SETONTIMER(callback(), int0);
        return;
    };
    if ((((int2 == 2) || (int2 == 3)) && ((IF_GETHEIGHT(int0) + int5) >= int1))) {
        IF_SETSIZE(IF_GETWIDTH(int0), int1, 0, 0, int0);
        if ((int4 != -1)) {
            IF_SETGRAPHIC(int4, int3);
        };
        IF_SETONTIMER(callback(), int0);
        return;
    };
    switch (int2) {
        case 0:
        case 1: {
            IF_SETSIZE((IF_GETWIDTH(int0) + int5), IF_GETHEIGHT(int0), 0, 0, int0);
            break;
        }
        case 2:
        case 3: {
            IF_SETSIZE(IF_GETWIDTH(int0), (IF_GETHEIGHT(int0) + int5), 0, 0, int0);
            break;
        }
    };
    return;
}