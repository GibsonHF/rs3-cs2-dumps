//
function script19921(int0: number, int1: number, int2: number, int3: number): void {
    varbitplayer_58204 = 1;
    var int4 = -1;
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    var int10 = comp(-1, 65535);
    var int11 = comp(-1, 65535);
    var int12 = -1 as fontmetrics;
    var string0 = "";
    var int13 = 1;
    int4 = 83755014;
    int5 = comp(1278, 122);
    int6 = comp(1278, 128);
    int7 = comp(1278, 124);
    int8 = comp(1278, 120);
    int9 = comp(1278, 123);
    int10 = comp(1278, 125);
    int11 = comp(1278, 126);
    int13 = 1;
    IF_SETGRAPHIC(34909 as graphic, int8);
    IF_SETHIDE(true, int5);
    IF_SETHIDE(true, int7);
    IF_SETHIDE(false, int9);
    IF_SETHIDE(true, int10);
    IF_SETHIDE(true, int11);
    if ((int13 > 1)) {
        string0 = `${inttostring(int13, 10)}x ${OC_NAME(int1)}`;
    } else {
        string0 = OC_NAME(int1);
    };
    IF_SETTEXT(string0, int5);
    int12 = script16927(IF_GETWIDTH(int5), IF_GETHEIGHT(int5), 3, 16357, 15, 11, string0);
    IF_SETTEXTFONT(int12, int5);
    IF_SETOPCURSOR(1, 201, int6);
    script19726(int7, int1, int2, int13, int3, 100, 80, 35, -50, 1);
    IF_SETONTIMER(callback(), int8);
    unk10997(int8);
    script19982(int8, int0, int5, int7, int10);
    return;
}