//
function script15376(int0: component, int1: int, int2: int, int3: dbrow, int4: int, int5: int, int6: unknown_int): void {
    var int4 = (int4 + (int1 * 270));
    var string0 = "";
    if ((DB_GETFIELDCOUNT(int3, 548880) > 0)) {
        string0 = dbrow_getfield(int3, 548880, 0);
    };
    var int7 = dbrow_getfield(int3, 548960, 0);
    var string1 = script5820(int3);
    var int8 = 1;
    if ((int6 == 1)) {
        int8 = 2;
    };
    var int9 = dbrow_getfield(int3, 548896, 0);
    var int10 = -1 as graphic;
    var int11 = -1 as graphic;
    var int12 = -1 as graphic;
    var int13 = dbrow_getfield(int3, 549344, 0);
    if ((DB_GETFIELDCOUNT(int3, 548912) > 0)) {
        [int10, int11, int12] = dbrow_getfield(int3, 548912, 0);
        switch (MAP_LANG()) {
            case 1: {
                if ((int10 != -1 as graphic)) {
                    int9 = int10;
                };
                break;
            }
            case 2: {
                if ((int11 != -1 as graphic)) {
                    int9 = int11;
                };
                break;
            }
            case 3: {
                if ((int12 != -1 as graphic)) {
                    int9 = int12;
                };
                break;
            }
        };
    };
    script15083(int0, int4, int5, 255, 430, "Select", int8, int2, int9, REMOVETAGS(dbrow_getfield(int3, 548864, 0)), string0, string1, int13, -1 as struct, 0, int7, int7, 1);
    return;
}