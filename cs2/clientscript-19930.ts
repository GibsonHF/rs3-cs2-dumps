//
function script19930(int0: number): number {
    var int1 = dbrow_getfield(int0, 1306640, 0);
    var int2 = script19932(int1);
    var int3 = dbrow_getfield(int1, 1302608, 0);
    var int4 = -1;
    if ((int2 != 0)) {
        return int2;
    };
    if (((int3 != -1) && (int0 != int3))) {
        int4 = dbrow_getfield(int0, 1306704, 0);
        if ((int4 == -1)) {
            script12478(`No previous clue set for sequential, non first clue dbrow. Clue ID: ${inttostring(dbrow_getfield(int0, 1306624, 0), 10)}`);
            return 4;
        };
        if ((script19934(int4) != 1)) {
            return 4;
        };
    };
    return 0;
}