//
function script17878(int0: dbrow, int1: int): [int, dbrow, dbrow, dbrow, dbrow, dbrow] {
    if ((int0 == -1 as dbrow)) {
        script12478("Invalid pass.");
        return [0, -1 as dbrow, -1 as dbrow, -1 as dbrow, -1 as dbrow, -1 as dbrow];
    };
    if ((int1 == script17892(int0))) {
        return script17879(int0);
    };
    var int1 = MAX(0, int1);
    script17927();
    var int2 = 0;
    var int3 = -1 as dbrow;
    var int4 = -1 as dbrow;
    var int5 = -1 as dbrow;
    var int6 = -1 as dbrow;
    var int7 = -1 as dbrow;
    var int8 = (int1 - 1);
    var int9 = DB_GETFIELDCOUNT(int0, 991360);
    var int10 = 0;
    var int11 = -1 as dbrow;
    while ((int8 < int9)) {
        [int10, int11] = dbrow_getfield(int0, 991360, int8);
        if ((int10 == int1)) {
            switch (int2) {
                case 0: {
                    int3 = int11;
                    break;
                }
                case 1: {
                    int4 = int11;
                    break;
                }
                case 2: {
                    int5 = int11;
                    break;
                }
                case 3: {
                    int6 = int11;
                    break;
                }
                case 4: {
                    int7 = int11;
                    break;
                }
                default: {
                    script12478("We need to add more possible index's, we're only expecting 5 rewards per level.");
                    break;
                }
            };
            int2 = (int2 + 1);
        } else if ((int10 > int1)) {
            return [int2, int3, int4, int5, int6, int7];
        };
        int8 = (int8 + 1);
    };
    return [int2, int3, int4, int5, int6, int7];
}