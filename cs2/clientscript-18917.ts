//
function script18917(int0: int, int1: int, int2: int): int {
    if ((int2 == -1)) {
        var int2 = script18855(int1);
    };
    var int3 = -1 as dbrow;
    var int4 = 0;
    var int5 = -1;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    while ((int9 <= 19)) {
        int3 = script18916(int9, int0);
        int4 = script18920(int3, -1);
        int5 = script18920(int3, 22);
        if (((int4 == 0) && ((int5 == 100) || (int5 == MAP_LANG())))) {
            int6 = script18920(int3, 0);
            int7 = script18920(int3, 1);
            if ((((int6 < varclient_7418) && (int7 < varclient_7418)) || ((int6 > int2) && (int7 > int2)))) {
            } else {
                int8 = (int8 + 1);
            };
        };
        int9 = (int9 + 1);
    };
    return int8;
}