//
function script16594(int0: dbrow, int1: unknown_int): int {
    var int2 = varplayer_9062;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = (varplayer_9078 - 1);
    var int7 = -1;
    var int8 = 0;
    var int9 = -1 as obj;
    var int10 = -1 as struct;
    var int11 = 0;
    var int12 = DB_GETFIELDCOUNT(int0, 299328);
    var int13 = 0;
    while (((int4 < int12) && (int5 <= int6))) {
        [int5, int8, int9, int10, int11] = dbrow_getfield(int0, 299328, int4);
        if ((int5 <= int6)) {
            if ((int7 != int5)) {
                int3 = script3599(int5);
                int7 = int5;
            };
            if (((AND(int8, int3) == 0) && (AND(int2, int8) != 0))) {
                int13 = (int13 + 1);
                if ((int1 == 0)) {
                    return int13;
                };
            };
        };
        int4 = (int4 + 1);
    };
    return int13;
}