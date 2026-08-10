//
function script20255(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): number {
    var int7 = ((int4 * (140 + 15)) + 4);
    var int8 = script12585(script20142(int1));
    var int9 = dbrow_getfield(int0, 1343552, 0);
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 1;
    var int14 = 4;
    script15938(94568455, int1, 0, (int7 - 8), 0, 0, 0, 2, 0, 0, 1);
    stack(int1);
    stack(1);
    script21106();
    script15938(94568455, int1, 3, int7, 0, 0, 0, 140, 0, 0, 1);
    script10033(int1, 4, 0, 0, 0, 0, 0, 28, 1, 0, 4128);
    script10033(int1, 5, 0, 0, 0, 0, 0, 0, 1, 1, 4368);
    CC_SETTRANS(128);
    if ((dbrow_getfield(int0, 1343664, 0) != 1)) {
        CC_SETHIDE(true);
    };
    stack(int0);
    stack(int1);
    script21088();
    var string0 = [];
    script10485(int1, 6, 10, 4, 0, 0, 0, 20, 1, 0, 2141, string0);
    CC_SETTEXTALIGN(0, 1, 0);
    script20259(int6, int8);
    if ((varbitplayer_61493 == 0)) {
        script10485(int1, 7, 10, 4, 2, 0, 0, 20, 1, 0, 2141, `${inttostring(int9, 10)} x XP`);
        CC_SETTEXTALIGN(2, 1, 0);
    };
    script20259(int6, int8);
    script15938(94568456, 200, int4, 0, 0, 0, 0, 0, 0, 1, 1);
    cc_setparam(9342, int1);
    while ((int10 < int3)) {
        var int5 = script20256(int0, int1, (int2 + int10), int4, int5, int10, int8, int6);
        int10 = (int10 + 1);
    };
    return int5;
}