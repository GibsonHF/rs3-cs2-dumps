//
function script12659(int0: int): int {
    if ((int0 < 0)) {
        return 0;
    };
    var int1 = 0;
    var int2 = script3909();
    var int3 = -1 as struct;
    var int4 = -1 as struct;
    var int5 = -1 as graphic;
    var int6 = -1 as graphic;
    var int7 = -1 as dbrow;
    var int8 = -1;
    var int9 = 0;
    while ((int1 < int2)) {
        [int3, int4, int5, int6, int7] = dbrow_getfield(4168 as dbrow, 552960, int1);
        if ((script3911(int3, int1) == 1)) {
            if ((struct_getparam(int3, 9311) == true)) {
                if ((int9 == 1)) {
                    int9 = 0;
                } else {
                    int9 = 1;
                    int8 = (int8 + 1);
                };
            } else {
                int9 = 0;
                int8 = (int8 + 1);
            };
        };
        if ((int1 == int0)) {
            return int8;
        };
        int1 = (int1 + 1);
    };
    return 0;
}