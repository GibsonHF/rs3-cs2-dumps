//
function script18444(): void {
    var int0 = 0;
    var int1 = -1 as dbrow;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = 0;
    var int9 = script18410();
    var int10 = script18416();
    var int11 = script18413(1);
    var int12 = script18427();
    var string0 = "";
    var string1 = "";
    var int13 = -1 as graphic;
    var int14 = false;
    var int15 = false;
    var int16 = DB_LISTALL(275);
    while ((++int0 <= int16)) {
        int1 = script18445(int0);
        int2 = dbrow_getfield(int1, 1126416, 0);
        int3 = dbrow_getfield(int1, 1126432, 0);
        int4 = dbrow_getfield(int1, 1126448, 0);
        int5 = dbrow_getfield(int1, 1126464, 0);
        int6 = dbrow_getfield(int1, 1126480, 0);
        int7 = dbrow_getfield(int1, 1126496, 0);
        int8 = script18428(int0, int12);
        int14 = script18446(int8, int9, int10, int11);
        int15 = script18447(int0, int8, int9, int10);
        string0 = script18429(int8);
        string1 = script18430(int8);
        int13 = script18433(int8);
        if ((IF_FIND(int2) == 1)) {
            script7872(int14, 1, true, int15);
            if ((int14 == true)) {
                CC_SETMOUSEOVERCURSOR(172);
            };
        };
        if ((IF_FIND(int3) == 1)) {
            CC_SETTEXT(string0);
        };
        if ((IF_FIND(int4) == 1)) {
            CC_SETTEXT(string1);
            script16926(16356 as cs2enum, 6, 13, 11);
        };
        if ((IF_FIND(int5) == 1)) {
            CC_SETGRAPHIC(int13);
            CC_SETSIZE(100, 100, 0, 0);
        };
        if ((IF_FIND(int6) == 1)) {
            CC_SETHIDE(int14);
        };
        if ((int11 == 1)) {
            IF_SETHIDE(false, int7);
        } else {
            IF_SETHIDE(true, int7);
        };
    };
    if ((IF_FIND(comp(1280, 18)) == 1)) {
        if ((int11 == 0)) {
            CC_SETENABLED(true);
        } else {
            CC_SETENABLED(false);
        };
    };
    return;
}