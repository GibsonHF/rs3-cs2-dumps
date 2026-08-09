//
function script18103(int0: number): [number, number] {
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    var int7 = script17853();
    if ((int7 == -1)) {
        return [0, 0];
    };
    var int8 = DB_GETFIELDCOUNT(int7, 991360);
    var int9 = 0;
    var int10 = 0;
    var int11 = -1;
    var int12 = 0;
    var int13 = 0;
    while ((int9 < int8)) {
        [int10, int11] = dbrow_getfield(int7, 991360, int9);
        if ((script17868(int7, int10) == 0)) {
            [int1, int2, int3, int4, int5, int6] = script17884(int11);
            if ((int3 == int0)) {
                if ((script17874(int7, int10) == 1)) {
                    int13 = (int13 + int4);
                } else {
                    int12 = (int12 + int4);
                };
            };
        };
        int9 = (int9 + 1);
    };
    return [int12, int13];
}