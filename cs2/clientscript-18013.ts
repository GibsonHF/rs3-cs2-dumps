//
function script18013(int0: unknown_int, int1: unknown_int, int2: dbrow, int3: int, int4: int, int5: int, int6: int, int7: int): void {
    IF_SETONTIMER(callback(), comp(1227, 33));
    var int8 = int1;
    var int9 = script17890(int2);
    var int10 = MIN((int1 + int0), int9);
    var int11 = 1;
    var int12 = 80412712;
    var int13 = 80412713;
    var int14 = dbrow_getfield(int2, 991264, 0);
    var int15 = 0;
    var int16 = 1;
    var int17 = 0;
    var int18 = 0;
    var int19 = script17862(7906);
    while ((int8 <= int10)) {
        int17 = 0;
        int18 = false;
        script17927();
        int16 = script17875(int2, int8);
        int11 = script17874(int2, int8);
        if ((int16 <= 0)) {
            script12478(`Lack of rewards at level ${inttostring(int8, 10)}`);
        };
        int15 = script17969(int2, int8, int16, -1);
        if ((int8 > int19)) {
            int17 = 1;
        } else if ((script17868(7906 as dbrow, int8) == true)) {
            int18 = true;
        };
        var [int6, int7] = script17978(int14, int13, int15, int16, -1, int11, int8, int18, int17, int6, int7, -1);
        var [int4, int5] = script18021(int8, int4, int5, int2, int12, int15, int18, int14, int15, -1);
        var int3 = (int3 + (int15 + script18011()));
        int8 = (int8 + 1);
    };
    if ((int10 < int9)) {
        IF_SETONTIMER(callback(script18012, int0, (int10 + 1), int2, int3, int4, int5, int6, int7), 80412705);
        return;
    };
    [int6, int7, int4, int5, int3] = script18015(int6, int7, int4, int5, int3);
    var int20 = 0;
    int3 = (int3 + script18011());
    int3 = (int3 + (IF_GETWIDTH(comp(1227, 39)) + 2));
    IF_SETSIZE(int3, IF_GETHEIGHT(int13), 0, 0, int13);
    IF_SETSIZE(int3, IF_GETHEIGHT(int12), 0, 0, int12);
    var int21 = comp(1227, 36);
    var int22 = int3;
    script17927();
    if ((varclient_7302 <= 0)) {
        IF_SETSCROLLPOS(0, 0, int21);
    };
    IF_SETSCROLLSIZE(int22, IF_GETHEIGHT(int21), int21);
    script11147(comp(1227, 35), int21);
    script18037(script18014(), 0);
    return;
}