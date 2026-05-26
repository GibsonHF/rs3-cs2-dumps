//
function script19731(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = 0;
    var int11 = -1;
    var string0 = "";
    var int12 = -1 as obj;
    var int13 = 0;
    var int14 = 1;
    var int15 = 1;
    var int16 = 0;
    switch (int0) {
        case 1: {
            int1 = 83755013;
            int2 = 83755071;
            int3 = 83755070;
            int4 = 83755067;
            int5 = 83755065;
            int6 = 83755018;
            int7 = 83755068;
            int10 = varbitplayer_57129;
            int15 = varbitplayer_57135;
            int12 = varplayer_12051;
            int13 = varplayer_12052;
            int14 = varplayer_12053;
            int16 = 1;
            break;
        }
        case 2: {
            int1 = 83755016;
            int2 = 83755077;
            int3 = 83755076;
            int4 = 83755073;
            int5 = 83755019;
            int6 = 83755017;
            int7 = 83755074;
            int10 = varbitplayer_57130;
            int15 = varbitplayer_57136;
            int12 = varplayer_12054;
            int13 = varplayer_12055;
            int14 = varplayer_12056;
            int16 = 15;
            break;
        }
        case 3: {
            int1 = 83755014;
            int2 = 83755130;
            int3 = 83755136;
            int4 = 83755132;
            int5 = 83755128;
            int6 = 83755015;
            int8 = 83755131;
            int7 = 83755133;
            int9 = 83755134;
            int14 = varplayer_12185;
            break;
        }
    };
    var int17 = script19987(int14);
    if ((int0 != 3)) {
        IF_SETGRAPHIC(34692, int5);
    } else {
        IF_SETGRAPHIC(34909, int5);
        script19726(int8, -1 as obj, -1, -1, int14, 100, 80, 35, -50, 1);
        IF_SETHIDE(0, int8);
        IF_SETGRAPHIC(int17, int9);
        IF_SETHIDE(0, int9);
    };
    IF_SETGRAPHIC(int17, int7);
    IF_SETHIDE(1, int7);
    IF_SETHIDE(1, int2);
    IF_SETHIDE(1, int4);
    IF_SETSIZE(200, 260, 0, 0, int5);
    IF_SETPARAM_INT(5841, 2, int1);
    IF_SETPARAM_INT(5840, 3, int1);
    IF_SETPARAM_INT(5942, 4000, int1);
    IF_SETGRAPHIC(34910, int6);
    IF_SETHIDE(0, int6);
    IF_SETSIZE(260, 310, 0, 0, int6);
    IF_SETOPCURSOR(1, 201, int3);
    if ((int0 == 3)) {
        return;
    };
    if ((int15 > 1)) {
        string0 = `${inttostring(int15, 10)}x ${OC_NAME(int12)}`;
    } else {
        string0 = OC_NAME(int12);
    };
    IF_SETTEXT(string0, int2);
    int11 = script16927(IF_GETWIDTH(int2), IF_GETHEIGHT(int2), 3, 16357, 15, 11, string0);
    IF_SETTEXTFONT(int11, int2);
    script19726(int4, int12, int13, int15, int14, 100, 80, 35, -50, 1);
    if ((int0 == 2)) {
        varclient_8304 = false;
    };
    IF_SETONTIMER(callback(), int5);
    unk10997(int5);
    unk11010(int16, callback(script19740, int5, int10, int2, int4, int7), int5);
    unk11009();
    script19730();
    return;
}