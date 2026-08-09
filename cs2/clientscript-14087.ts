//
function script14087(int0: number, int1: number, int2: number): [number, number] {
    var int3 = script11651(int0);
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    if ((int3 != -1)) {
        int4 = dbrow_getfield(int3, 1515584, 0);
        if (((int1 == 63) || (int1 == dbrow_getfield(int3, 1515600, 0)))) {
            if ((((int2 == 127) || (int2 == 126)) || (int2 == dbrow_getfield(int3, 1515616, 0)))) {
                if ((script7105(int4) == 1)) {
                    int5 = script7108(int4);
                    if ((int5 > 0)) {
                        return [dbrow_getfield(int3, 1515520, 0), int5];
                    };
                };
            };
        };
    };
    var int7 = script13406(int1, int2, STAT(22 as stat), 0, 0, 0, 1, 0, 1);
    unk11023(int7, 1515664, 0);
    var int8 = dbrow_findnext();
    if ((script14088() == 1)) {
        int3 = int8;
        while ((int3 != -1)) {
            int4 = dbrow_getfield(int3, 1515584, 0);
            int6 = script7105(int4);
            if ((int6 == 1)) {
                int5 = script7108(int4);
                if ((int5 > 0)) {
                    return [dbrow_getfield(int3, 1515520, 0), int5];
                };
            };
            int3 = dbrow_findnext();
        };
    };
    if ((int8 != -1)) {
        return [dbrow_getfield(int8, 1515520, 0), 0];
    };
    return [0, 0];
}