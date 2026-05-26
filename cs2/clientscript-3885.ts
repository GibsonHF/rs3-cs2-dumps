//
function script3885(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number): void {
    var int12 = 240;
    var int13 = 20;
    if ((STRING_LENGTH(IF_GETTEXT(int1)) > 0)) {
        int12 = (PARAWIDTH(IF_GETTEXT(int1), 500, 26 as fontmetrics) + 80);
        int13 = (MAX(1, PARAHEIGHT(IF_GETTEXT(int1), 500, 26 as fontmetrics)) * 18);
        if (((int13 > 18) && (STRING_LENGTH(IF_GETTEXT(int9)) == 0))) {
            IF_SETPOSITION(0, 20, 1, 0, int2);
            IF_SETPOSITION(0, 60, 1, 0, int3);
        };
        if ((int12 > IF_GETWIDTH(int0))) {
            IF_SETSIZE(int12, int13, 0, 0, int2);
            IF_SETSIZE(int12, int13, 0, 0, int3);
            IF_SETSIZE(int12, int13, 0, 0, int4);
            IF_SETSIZE(int12, int13, 0, 0, int5);
            IF_SETSIZE(int12, int13, 0, 0, int6);
        };
        IF_SETONTIMER(callback(), int0);
    };
    return;
}