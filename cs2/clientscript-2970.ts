//
function script2970(int0: component, int1: component, int2: component, int3: dbrow, int4: int, int5: int, int6: int): int {
    if ((int3 == -1 as dbrow)) {
        return int5;
    };
    if ((((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535))) || (int2 == comp(-1, 65535)))) {
        return int5;
    };
    var int7 = DB_GETFIELDCOUNT(int3, 127008);
    if ((int7 == 0)) {
        return int5;
    };
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = false;
    var int12 = -1 as struct;
    while ((int9 < int7)) {
        int12 = dbrow_getfield(int3, 127008, int9);
        int11 = script9395(int12);
        if ((script16146(int12, int11) == 1)) {
            var int5 = script18933(int0, int1, int2, int12, int4, int9, int8, int5, int6, int11);
            int8 = (int8 + 1);
        };
        int9 = (int9 + 1);
    };
    return int5;
}