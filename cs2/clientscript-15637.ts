//
function script15637(int0: int): void {
    var int1 = 0;
    var int2 = IF_GETWIDTH(comp(910, 62));
    var int3 = 2;
    var int4 = 0;
    var int5 = 0;
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    while ((int1 < 7)) {
        switch (int1) {
            case 0: {
                int5 = SCALE(83, 748, int2);
                int6 = comp(910, 31);
                int7 = comp(910, 67);
                int8 = comp(910, 80);
                int9 = comp(910, 22);
                break;
            }
            case 1: {
                int5 = SCALE(75, 748, int2);
                int6 = comp(910, 36);
                int7 = comp(910, 69);
                int8 = comp(910, 81);
                int9 = comp(910, 23);
                break;
            }
            case 2: {
                int5 = SCALE(207, 748, int2);
                int6 = comp(910, 41);
                int7 = comp(910, 70);
                int8 = comp(910, 82);
                int9 = comp(910, 24);
                break;
            }
            case 3: {
                int5 = SCALE(202, 748, int2);
                int6 = comp(910, 45);
                int7 = comp(910, 71);
                int8 = comp(910, 83);
                int9 = comp(910, 25);
                break;
            }
            case 4: {
                int5 = SCALE(75, 748, int2);
                int6 = comp(910, 49);
                int7 = comp(910, 73);
                int8 = comp(910, 84);
                int9 = comp(910, 26);
                break;
            }
            case 5: {
                int5 = SCALE(40, 748, int2);
                int6 = comp(910, 54);
                int7 = comp(910, 74);
                int8 = comp(910, 85);
                int9 = comp(910, 27);
                break;
            }
            case 6: {
                int5 = (int2 - int4);
                int6 = comp(910, 58);
                int7 = comp(910, 75);
                int8 = comp(-1, 65535);
                int9 = comp(-1, 65535);
                break;
            }
        };
        if ((int8 != comp(-1, 65535))) {
            IF_SETCOLOUR(int0, int8);
        };
        if ((int9 != comp(-1, 65535))) {
            IF_SETCOLOUR(int0, int9);
        };
        IF_SETSIZE(int5, 0, 0, 1, int6);
        IF_SETSIZE(int5, 0, 0, 1, int7);
        IF_SETPOSITION(int4, 0, 0, 0, int6);
        IF_SETPOSITION(int4, 0, 0, 0, int7);
        if ((int7 == comp(910, 71))) {
            IF_SETSIZE(int5, 0, 0, 1, comp(910, 72));
            IF_SETPOSITION(int4, 0, 0, 0, comp(910, 72));
        };
        if (((int8 != comp(-1, 65535)) && (int9 != comp(-1, 65535)))) {
            IF_SETPOSITION((int4 + int5), 0, 0, 0, int8);
            IF_SETPOSITION((int4 + int5), 0, 0, 0, int9);
        };
        int4 = (int4 + (int5 + int3));
        int1 = (int1 + 1);
    };
    var int10 = 26 as fontmetrics;
    var int11 = 15;
    var int12 = 21;
    if (((script13749() == true) && (IF_GETWIDTH(comp(910, 0)) >= 900))) {
        int10 = 28 as fontmetrics;
        int11 = 24;
        int12 = 42;
    };
    IF_SETSIZE(int12, 0, 0, 1, comp(910, 66));
    IF_SETPOSITION((int12 + int3), 0, 0, 0, comp(910, 67));
    if ((script13749() == true)) {
        IF_SETHIDE(true, comp(910, 33));
        IF_SETHIDE(true, comp(910, 38));
        IF_SETHIDE(true, comp(910, 51));
        IF_SETHIDE(false, comp(910, 34));
        IF_SETHIDE(false, comp(910, 39));
        IF_SETHIDE(false, comp(910, 52));
        stack(13461);
        stack(59637816);
        IF_SETGRAPHIC();
        IF_SETSIZE(int11, int11, 0, 0, 59637794);
        IF_SETSIZE(int11, int11, 0, 0, 59637799);
        IF_SETSIZE(int11, int11, 0, 0, 59637812);
    } else {
        IF_SETTEXTFONT(int10, comp(910, 33));
        IF_SETTEXTFONT(int10, comp(910, 38));
        IF_SETTEXTFONT(int10, comp(910, 51));
        IF_SETPOSITION(4, 0, 0, 1, comp(910, 33));
        IF_SETPOSITION(4, 0, 0, 1, comp(910, 38));
        IF_SETPOSITION(4, 0, 0, 1, comp(910, 51));
    };
    IF_SETTEXTFONT(int10, comp(910, 43));
    IF_SETTEXTFONT(int10, comp(910, 47));
    IF_SETTEXTFONT(int10, comp(910, 60));
    IF_SETPOSITION(4, 0, 0, 1, comp(910, 43));
    IF_SETPOSITION(4, 0, 0, 1, comp(910, 47));
    IF_SETPOSITION(4, 0, 0, 1, comp(910, 60));
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 35));
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 40));
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 53));
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 57));
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 44));
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 48));
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 61));
    return;
}