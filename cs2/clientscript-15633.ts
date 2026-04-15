//
function script15633(): void {
    var int0 = comp(907, 1);
    var int1 = comp(907, 2);
    var int2 = comp(907, 3);
    var int3 = comp(907, 143);
    var int4 = comp(907, 4);
    var int5 = comp(907, 69);
    var int6 = comp(907, 70);
    var int7 = 30;
    var int8 = 30;
    var int9 = 24;
    var int10 = 482;
    var int11 = 148;
    var int12 = 233;
    var int13 = 104;
    var int14 = 13;
    var int15 = ((IF_GETWIDTH(int0) - IF_GETWIDTH(int3)) - int14);
    var int16 = IF_GETHEIGHT(int0);
    var int17 = int15;
    var int18 = 0;
    var int19 = 10;
    var int20 = 0;
    var int21 = 0;
    while ((int20 < 200)) {
        int18 = ((int8 + int9) + int7);
        int18 = (int18 + SCALE(int15, int10, int11));
        int18 = (int18 + SCALE(int15, int10, int13));
        if ((int18 <= int16)) {
            int20 = (int20 + 200);
        } else {
            int15 = (int15 - int19);
        };
        int20 = (int20 + 1);
    };
    IF_SETSIZE(int17, 0, 0, 1, int1);
    IF_SETSIZE(int15, int18, 0, 0, int2);
    var int22 = (SCALE(int15, int10, int11) + int8);
    IF_SETSIZE(0, int22, 1, 0, int4);
    IF_SETPOSITION(0, int22, 1, 0, int5);
    IF_SETPOSITION(0, (int22 + int7), 0, 0, int6);
    int22 = (SCALE(int15, int10, int13) + int9);
    IF_SETSIZE(0, int22, 1, 0, int6);
    script16881(comp(907, 16));
    script16881(comp(907, 10));
    return;
}