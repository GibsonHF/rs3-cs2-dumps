//
function script19946(): void {
    var int0 = comp(1336, 26);
    var int1 = comp(1336, 27);
    var int2 = IF_GETWIDTH(int0);
    var int3 = 17865;
    var int4 = -1 as dbrow;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1;
    var int9 = -1;
    var int10 = 0;
    var int11 = 0;
    var int12 = 33620 as graphic;
    var int13 = -1;
    CC_DELETEALL(int0);
    switch (varbitplayer_57881) {
        case 1: {
            int3 = 17866;
            break;
        }
        case 2: {
            int3 = 17867;
            break;
        }
        case 3: {
            int3 = 15221;
            break;
        }
        case 4: {
            int3 = 15222;
            break;
        }
    };
    int5 = CC_SETPARAM_STRING(WORLDMAP_LISTELEMENT_START(1306640, int3, 3, 0), 1306624, 1, -1, 0);
    while ((++int13 < int5)) {
        dbrow_findnext();
        int4 = stack();
        int6 = 0;
        int7 = 0;
        int12 = 33620;
        if ((int4 != -1)) {
            if ((script19930(int4) != 0)) {
                int6 = 1;
            };
            int10 = dbrow_getfield(int4, 1306624, 0);
            if ((script19934(int4) == 1)) {
                int7 = 1;
            };
            script7853(int0, int10, 0, int11, 0, 0, int2, 24, 0, 0, 4479 as dbrow, `Clue ${inttostring((int13 + 1), 10)}`, true, 1, true, false);
            CC_SETTEXTFONT(207 as fontmetrics);
            unk11097(script10495(2), 0);
            CC_SETOP(1, "Select");
            CC_SETONBUTTONCLICK(callback(script19947, int10));
            if ((int9 == -1)) {
                int9 = int10;
            };
            if ((int6 == 1)) {
                int12 = 33621 as graphic;
            } else if ((int7 == 1)) {
                int12 = 33622 as graphic;
            } else if ((int8 == -1)) {
                int8 = int10;
            };
            script2994(int0, (int10 + 30), 4, (int11 + (24 / 4)), 0, 0, 12, 12, 0, 0, int12);
            int11 = (int11 + (24 + 4));
        };
    };
    IF_SETHIDE(false, int1);
    IF_SETSCROLLPOS(0, 0, int0);
    IF_SETSCROLLSIZE(0, int11, int0);
    script7791(int1, int0);
    if ((int8 == -1)) {
        int8 = int9;
    };
    if ((CC_FIND(int0, int8) == 1)) {
        script7872(true, 1, true, true);
    };
    script19948(int8);
    return;
}