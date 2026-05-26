//
function script3661(int0: number): void {
    CC_DELETEALL(41549838);
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = DB_GETFIELDCOUNT(int0, 299152);
    while ((int6 < int7)) {
        script3659(41549838, int6, dbrow_getfield(int0, 299152, int6));
        int6 = (int6 + 1);
    };
    int6 = 0;
    int7 = DB_GETFIELDCOUNT(int0, 299136);
    while ((int6 < int7)) {
        script3659(41549837, int6, dbrow_getfield(int0, 299136, int6));
        int6 = (int6 + 1);
    };
    int6 = 0;
    int7 = DB_GETFIELDCOUNT(int0, 299168);
    while ((int6 < int7)) {
        script3659(41549840, int6, dbrow_getfield(int0, 299168, int6));
        int6 = (int6 + 1);
    };
    int6 = 0;
    int7 = DB_GETFIELDCOUNT(int0, 299184);
    while ((int6 < int7)) {
        script3659(41549839, int6, dbrow_getfield(int0, 299184, int6));
        int6 = (int6 + 1);
    };
    return;
}