//
function script14031(int0: int): void {
    var int1 = comp(1936, 8);
    var int2 = comp(1936, 10);
    var int3 = 0;
    var int4 = 1;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as dbrow;
    CC_DELETEALL(int1);
    IF_SETCOLOUR(script10495(9), comp(1936, 0));
    while ((int4 <= 62)) {
        stack(28672);
        stack(int4);
        DB_FIND(0);
        dbrow_findnext();
        int7 = stack();
        if ((((int7 != -1) && (dbrow_getfield(int7, 28688, 0) == int0)) && (dbrow_getfield(int7, 28848, 0) == 0))) {
            CC_CREATE(int1, 3, IF_GETNEXTSUBID(int1));
            CC_SETPOSITION(2, int3, 0, 0);
            CC_SETSIZE(4, 26, 1, 0);
            CC_SETFILL(1);
            if ((MODULO(int5, 2) == 0)) {
                CC_SETCOLOUR(script10495(9));
            } else {
                CC_SETCOLOUR(script10495(12));
            };
            int6 = script3860(dbrow_getfield(int7, 28672, 0));
            if ((int6 >= 1)) {
                CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
                CC_SETPOSITION(16, (int3 + 3), 0, 0);
                CC_SETSIZE(17, 17, 0, 0);
                CC_SETGRAPHIC(1803 as graphic);
            };
            if ((int6 == 2)) {
                CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
                CC_SETPOSITION(66, (int3 + 3), 0, 0);
                CC_SETSIZE(17, 17, 0, 0);
                CC_SETGRAPHIC(1803 as graphic);
            };
            CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
            CC_SETPOSITION(103, (int3 + 6), 0, 0);
            CC_SETSIZE(350, 25, 0, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(script10495(3));
            CC_SETTEXT(dbrow_getfield(int7, 28704, 0));
            int3 = (int3 + 26);
            int5 = (int5 + 1);
        };
        int4 = (int4 + 1);
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(int1), int3), int1);
    script7791(int2, int1);
    IF_SETHIDE(true, comp(1936, 19));
    IF_SETHIDE(true, comp(1936, 27));
    IF_SETHIDE(true, comp(1936, 35));
    IF_SETHIDE(true, comp(1936, 43));
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(1936, 19));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1936, 27));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1936, 35));
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1936, 43));
            break;
        }
    };
    return;
}