//[proc,lobby_popup]
function script3093(int0: number, int1: number, int2: number, string0: string, string1: string, string2: string, string3: string): void {
    if ((IF_GETHIDE(59375767) == 0)) {
        return;
    };
    script3097();
    var int3 = 50;
    var int4 = 140;
    var int5 = 600;
    var int6 = 450;
    var int7 = 150;
    var int8 = 20;
    var int9 = 50;
    var int10 = 20;
    var int11 = 72;
    var int12 = 10;
    var int13 = 40;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 18;
    if ((STRING_LENGTH(string2) > 0)) {
        int14 = MAX(int7, (30 + PARAWIDTH(string2, 1000, 56)));
    } else {
        IF_SETHIDE(1, 53739532);
    };
    if ((STRING_LENGTH(string3) > 0)) {
        int15 = MAX(int7, (30 + PARAWIDTH(string3, 1000, 56)));
    } else {
        IF_SETHIDE(1, 53739533);
    };
    var int18 = int6;
    var int19 = (int13 + int8);
    if (((int14 > 0) && (int15 > 0))) {
        if ((((int14 + int15) + int8) > (int5 - int9))) {
            int14 = (((int5 - int9) - int8) / 2);
            int15 = int14;
            int18 = int5;
        } else {
            int18 = MAX(int18, (((int14 + int15) + int8) + int9));
        };
        IF_SETPOSITION(0, 0, 0, 2, 53739532);
        IF_SETPOSITION(0, 0, 2, 2, 53739533);
        IF_SETHIDE(0, 53739532);
        IF_SETHIDE(0, 53739533);
    } else if ((int14 > 0)) {
        IF_SETPOSITION(0, 0, 1, 2, 53739532);
        IF_SETHIDE(0, 53739532);
        IF_SETHIDE(1, 53739533);
    } else if ((int15 > 0)) {
        IF_SETPOSITION(0, 0, 1, 2, 53739533);
        IF_SETHIDE(1, 53739532);
        IF_SETHIDE(0, 53739533);
    } else {
        IF_SETHIDE(1, 53739533);
        IF_SETHIDE(1, 53739532);
        int19 = 0;
    };
    script8047(53739532, string2, dbrow_getfield(int1, 520208, 0));
    script8047(53739533, string3, dbrow_getfield(int1, 520224, 0));
    script3095(53739532, 53739533, int0);
    IF_SETSIZE(int14, 0, 0, 1, 53739532);
    IF_SETSIZE(int15, 0, 0, 1, 53739533);
    if ((int2 != -1)) {
        int19 = (int19 + (int11 + int12));
        if ((int2 == 18963)) {
            IF_SET2DANGLE(0, 53739528);
            IF_SETHIDE(0, 53739526);
            IF_SETHIDE(1, 53739529);
        } else {
            stack(int2);
            stack(53739529);
            IF_SETGRAPHIC();
            IF_SETHIDE(1, 53739526);
            IF_SETHIDE(0, 53739529);
        };
        IF_SETPOSITION(0, (int11 + int12), 1, 0, 53739530);
    } else {
        IF_SETPOSITION(0, 0, 1, 0, 53739530);
        IF_SETHIDE(1, 53739526);
        IF_SETHIDE(1, 53739529);
    };
    var int20 = PARAHEIGHT(string1, int18, 30);
    int19 = (int19 + (int20 * int17));
    IF_SETSIZE(int10, (int20 * int17), 1, 0, 53739530);
    int18 = MAX(int18, PARAWIDTH(string0, int5, IF_GETFONTMETRICS(53739548)));
    int19 = (int19 + int4);
    int18 = (int18 + int3);
    IF_SETSIZE(int18, int19, 0, 0, 53739522);
    IF_SETSIZE(124, 76, 1, 0, 53739545);
    IF_SETTEXT(string0, 53739548);
    IF_SETTEXT(string1, 53739530);
    IF_SETONKEY(callback(script3100, -2147483640), 59375767);
    IF_SETHIDE(0, 59375767);
    return;
}