//
function script15637(int0: number): void {
    var int1 = 0;
    var int2 = IF_GETWIDTH(59637822);
    var int3 = 2;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    while ((int1 < 7)) {
        switch (int1) {
            case 0: {
                int5 = SCALE(83, 748, int2);
                int6 = 59637791;
                int7 = 59637827;
                int8 = 59637840;
                int9 = 59637782;
                break;
            }
            case 1: {
                int5 = SCALE(75, 748, int2);
                int6 = 59637796;
                int7 = 59637829;
                int8 = 59637841;
                int9 = 59637783;
                break;
            }
            case 2: {
                int5 = SCALE(207, 748, int2);
                int6 = 59637801;
                int7 = 59637830;
                int8 = 59637842;
                int9 = 59637784;
                break;
            }
            case 3: {
                int5 = SCALE(202, 748, int2);
                int6 = 59637805;
                int7 = 59637831;
                int8 = 59637843;
                int9 = 59637785;
                break;
            }
            case 4: {
                int5 = SCALE(75, 748, int2);
                int6 = 59637809;
                int7 = 59637833;
                int8 = 59637844;
                int9 = 59637786;
                break;
            }
            case 5: {
                int5 = SCALE(40, 748, int2);
                int6 = 59637814;
                int7 = 59637834;
                int8 = 59637845;
                int9 = 59637787;
                break;
            }
            case 6: {
                int5 = (int2 - int4);
                int6 = 59637818;
                int7 = 59637835;
                int8 = -1;
                int9 = -1;
                break;
            }
        };
        if ((int8 != -1)) {
            IF_SETCOLOUR(int0, int8);
        };
        if ((int9 != -1)) {
            IF_SETCOLOUR(int0, int9);
        };
        IF_SETSIZE(int5, 0, 0, 1, int6);
        IF_SETSIZE(int5, 0, 0, 1, int7);
        IF_SETPOSITION(int4, 0, 0, 0, int6);
        IF_SETPOSITION(int4, 0, 0, 0, int7);
        if ((int7 == 59637831)) {
            IF_SETSIZE(int5, 0, 0, 1, 59637832);
            IF_SETPOSITION(int4, 0, 0, 0, 59637832);
        };
        if (((int8 != -1) && (int9 != -1))) {
            IF_SETPOSITION((int4 + int5), 0, 0, 0, int8);
            IF_SETPOSITION((int4 + int5), 0, 0, 0, int9);
        };
        int4 = (int4 + (int5 + int3));
        int1 = (int1 + 1);
    };
    var int10 = 26;
    var int11 = 15;
    var int12 = 21;
    if (((script13749() == 1) && (IF_GETWIDTH(59637760) >= 900))) {
        int10 = 28;
        int11 = 24;
        int12 = 42;
    };
    IF_SETSIZE(int12, 0, 0, 1, 59637826);
    IF_SETPOSITION((int12 + int3), 0, 0, 0, 59637827);
    if ((script13749() == 1)) {
        IF_SETHIDE(1, 59637793);
        IF_SETHIDE(1, 59637798);
        IF_SETHIDE(1, 59637811);
        IF_SETHIDE(0, 59637794);
        IF_SETHIDE(0, 59637799);
        IF_SETHIDE(0, 59637812);
        stack(13461);
        stack(59637816);
        IF_SETGRAPHIC();
        IF_SETSIZE(int11, int11, 0, 0, 59637794);
        IF_SETSIZE(int11, int11, 0, 0, 59637799);
        IF_SETSIZE(int11, int11, 0, 0, 59637812);
    } else {
        IF_SETTEXTFONT(int10, 59637793);
        IF_SETTEXTFONT(int10, 59637798);
        IF_SETTEXTFONT(int10, 59637811);
        IF_SETPOSITION(4, 0, 0, 1, 59637793);
        IF_SETPOSITION(4, 0, 0, 1, 59637798);
        IF_SETPOSITION(4, 0, 0, 1, 59637811);
    };
    IF_SETTEXTFONT(int10, 59637803);
    IF_SETTEXTFONT(int10, 59637807);
    IF_SETTEXTFONT(int10, 59637820);
    IF_SETPOSITION(4, 0, 0, 1, 59637803);
    IF_SETPOSITION(4, 0, 0, 1, 59637807);
    IF_SETPOSITION(4, 0, 0, 1, 59637820);
    IF_SETSIZE(int11, int11, 0, 0, 59637795);
    IF_SETSIZE(int11, int11, 0, 0, 59637800);
    IF_SETSIZE(int11, int11, 0, 0, 59637813);
    IF_SETSIZE(int11, int11, 0, 0, 59637817);
    IF_SETSIZE(int11, int11, 0, 0, 59637804);
    IF_SETSIZE(int11, int11, 0, 0, 59637808);
    IF_SETSIZE(int11, int11, 0, 0, 59637821);
    return;
}