//
function script18194(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string): number {
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    if ((int0 != -1 as dbrow)) {
        if ((DB_GETFIELDCOUNT(int0, 667920) > 0)) {
            int6 = (dbrow_getfield(int0, 667920, 0) + 1);
        };
        if (((int1 == 1) && (varclient_5939 > 0))) {
            int7 = script18189(int6, string0, int2, int3, int4);
            while ((int7 != -1)) {
                int5 = (int5 + 1);
                int7 = script18189((dbrow_getfield(int7, 667920, 0) + 1), string0, int2, int3, int4);
            };
            if (((script18195(string0) == 1) && (int0 != script18190()))) {
                int5 = (int5 + 1);
            };
        };
    };
    return int5;
}