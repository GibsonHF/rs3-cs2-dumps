//
function script616(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    if ((int4 == -1)) {
        return;
    };
    var int7 = dbrow_getfield(int4, 1515584, 0);
    IF_SETHIDE(false, int0);
    IF_SETOBJECT(int7, -1, int2);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    if ((int5 != -1 as dbrow)) {
        if ((DB_GETROWTABLE(int5) != 254)) {
            script12478("Invalid table in positional data.");
            return;
        };
        int8 = dbrow_getfield(int5, 1040384, 0);
        int9 = dbrow_getfield(int5, 1040400, 0);
        int10 = dbrow_getfield(int5, 1040416, 0);
        int11 = dbrow_getfield(int5, 1040432, 0);
        int12 = dbrow_getfield(int5, 1040448, 0);
        int13 = dbrow_getfield(int5, 1040464, 0);
        IF_SETMODELANGLE(int8, int9, int10, int11, int12, int13, int2);
    };
    if ((int6 == 0)) {
        IF_SETHIDE(false, int1);
        script11619(int1, int2);
    } else {
        script11620(int1);
    };
    IF_SETONTIMER(callback(script11621, -1, 7, 50, -1, int3, int2, int0, -1), int3);
    return;
}