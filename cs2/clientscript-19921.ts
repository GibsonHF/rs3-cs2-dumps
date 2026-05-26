//
function script19921(int0: number, int1: number, int2: number, int3: number): void {
    varbitplayer_58204 = 1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = -1;
    var int12 = -1;
    var string0 = "";
    var int13 = 1;
    int4 = 83755014;
    int5 = 83755130;
    int6 = 83755136;
    int7 = 83755132;
    int8 = 83755128;
    int9 = 83755131;
    int10 = 83755133;
    int11 = 83755134;
    int13 = 1;
    IF_SETGRAPHIC(34909, int8);
    IF_SETHIDE(1, int5);
    IF_SETHIDE(1, int7);
    IF_SETHIDE(0, int9);
    IF_SETHIDE(1, int10);
    IF_SETHIDE(1, int11);
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