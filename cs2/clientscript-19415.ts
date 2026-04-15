//
function script19415(int0: unknown_int, int1: int): [int, unknown_int, int] {
    var int2 = 0;
    var int3 = -1;
    var int4 = ACTIVECLANSETTINGS_GETAFFINEDCOUNT();
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    while ((int2 < int4)) {
        int3 = script19413(int2);
        if ((script19326(int3) == 0)) {
            if ((unk10985(int2, int0, int0) == 1)) {
                if ((int2 == int1)) {
                    int6 = 1;
                };
                int5 = (int5 + 1);
            };
            int7 = (int7 + 1);
        };
        int2 = (int2 + 1);
    };
    return [int5, int6, int7];
}