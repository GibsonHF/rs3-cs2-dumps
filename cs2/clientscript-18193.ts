//
function script18193(int0: dbrow, int1: int, int2: int, int3: unknown_int, int4: int, int5: int, int6: int, string0: string): [dbrow, int] {
    var int7 = -1 as dbrow;
    var int8 = 0;
    if ((script18206(int0) == 0)) {
        int7 = DB_FIND_GET(int1);
        if ((int7 != -1 as dbrow)) {
            return [int7, int2];
        };
    };
    if ((((int7 == -1 as dbrow) && (int2 < int1)) && (int3 == 1))) {
        while ((int2 < int1)) {
            int7 = script18189(int8, string0, int4, int5, int6);
            var int2 = (int2 + 1);
            if ((DB_GETFIELDCOUNT(int7, 667920) > 0)) {
                int8 = (dbrow_getfield(int7, 667920, 0) + 1);
            };
        };
    };
    if ((DB_GETFIELDCOUNT(int0, 667920) > 0)) {
        int8 = (dbrow_getfield(int0, 667920, 0) + 1);
    };
    if ((int3 == 1)) {
        int7 = script18189(int8, string0, int4, int5, int6);
        if ((int7 != -1 as dbrow)) {
            return [int7, (int2 + 1)];
        };
        if ((script18195(string0) == 1)) {
            int7 = script18190();
            if ((int0 != int7)) {
                return [int7, (int2 + 1)];
            };
        };
    };
    return [-1 as dbrow, int2];
}