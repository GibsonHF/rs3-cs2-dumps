//
function script18103(int0: dbrow): [int, int] {
    var int1 = -1 as obj;
    var int2 = -1 as struct;
    var int3 = -1 as dbrow;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1 as graphic;
    var int7 = script17853();
    if ((int7 == -1 as dbrow)) {
        return [0, 0];
    };
    var int8 = DB_GETFIELDCOUNT(int7, 991360);
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as dbrow;
    var int12 = 0;
    var int13 = 0;
    while ((int9 < int8)) {
        [int10, int11] = dbrow_getfield(int7, 991360, int9);
        if ((script17868(int7, int10) == false)) {
            [int1, int2, int3, int4, int5, int6] = script17884(int11);
            if ((int3 == int0)) {
                if ((script17874(int7, int10) == true)) {
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