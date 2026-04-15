//
function script16490(int0: dbrow, int1: int, int2: component, int3: unknown_int): void {
    var int4 = DB_GETFIELDCOUNT(int0, 712704);
    var int5 = -1;
    var int6 = -1 as graphic;
    var int7 = 0;
    var int8 = 0;
    var int9 = -1 as graphic;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    while ((++int5 < int4)) {
        [int9, int10, int11, int12] = dbrow_getfield(int0, 712704, int5);
        if ((int1 >= int10)) {
            int6 = int9;
            int7 = int11;
            int8 = int12;
        };
    };
    stack(int6);
    stack(int2);
    IF_SETGRAPHIC();
    if ((int3 == 1)) {
        IF_SETSIZE(int7, int8, 0, 0, int2);
    };
    return;
}