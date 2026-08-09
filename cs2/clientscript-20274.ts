//
function script20274(int0: number): void {
    var int1 = comp(1480, 4);
    var int2 = comp(1480, 5);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    var int3 = DB_GETFIELDCOUNT(int0, 1380352);
    var int4 = -1;
    var int5 = -1;
    var int6 = 5;
    int4 = (int4 + 1);
    while ((int4 < int3)) {
        int5 = dbrow_getfield(int0, 1380352, int4);
        if ((int5 != -1)) {
            if ((int3 > 1)) {
                if ((int4 > 0)) {
                    int6 = (int6 + 30);
                };
                script2995(int2, int4, 10, int6, 0, 0, 0, 25, 1, 0, 2064, dbrow_getfield(int5, 1384448, 0));
                int6 = (int6 + 23);
            };
            int6 = script20275(int5, int1, int6);
        };
    };
    script8841(103, 1);
    IF_SETSCROLLSIZE(0, (int6 + 29), int1);
    IF_SETSCROLLPOS(0, 0, int1);
    script7791(96993283, int1);
    return;
}