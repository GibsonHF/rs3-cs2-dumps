//
function script9863(int0: int, int1: component, int2: int): [int, int, int, int] {
    var int3 = script3609();
    if ((int3 == -1 as dbrow)) {
        return [int2, 0, 0, 0];
    };
    var int4 = 0;
    var int5 = DB_GETFIELDCOUNT(int3, 299328);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as obj;
    var int12 = -1 as struct;
    var int13 = varplayer_9062;
    if ((AND(int13, 170) == 0)) {
        int13 = (int13 * 3);
    };
    while (((int2 < int5) && (int8 <= int0))) {
        [int8, int9, int11, int12, int10] = dbrow_getfield(int3, 299328, int2);
        if ((int8 == int0)) {
            if (((int4 == 0) && (int0 != 0))) {
                int4 = int2;
            };
            if (((AND(int9, 85) != 0) && (AND(int9, varplayer_9062) != 0))) {
                int6 = (int6 + 1);
            } else if ((AND(int9, int13) != 0)) {
                int7 = (int7 + 1);
            };
        };
        var int2 = (int2 + 1);
    };
    return [(int2 - 1), int4, int6, int7];
}