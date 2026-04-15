//
function script20065(): int {
    var int0 = 0;
    var int1 = script3909();
    var int2 = -1 as struct;
    var int3 = -1 as struct;
    var int4 = -1 as graphic;
    var int5 = -1 as graphic;
    var int6 = -1 as dbrow;
    var int7 = 0;
    var int8 = 0;
    while ((int0 < int1)) {
        [int2, int3, int4, int5, int6] = dbrow_getfield(4168 as dbrow, 552960, int0);
        if ((script3911(int2, int0) == 1)) {
            if ((struct_getparam(int2, 9311) == true)) {
                if ((int8 == 1)) {
                    int8 = 0;
                } else {
                    int8 = 1;
                    int7 = (int7 + 1);
                };
            } else {
                int8 = 0;
                int7 = (int7 + 1);
            };
        };
        int0 = (int0 + 1);
    };
    return int7;
}