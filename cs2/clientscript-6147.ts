//
function script6147(int0: component, int1: int, int2: int, int3: int, int4: int): void {
    var int5 = varclient_1904;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as coordgrid;
    var int12 = -1 as coordgrid;
    var int13 = -1 as coordgrid;
    var int14 = -1 as coordgrid;
    int6 = (300 + RANDOM(250));
    int7 = (2 + RANDOM(6));
    int8 = 0;
    int9 = ((varclient_1906 + 250) + RANDOM(300));
    SPLINE_NEW(0, int7);
    SPLINE_NEW(1, int7);
    while ((int8 < int7)) {
        [int11, int12, int13, int14] = script6150(int1, int4, MOVECOORD(int5, 1, 0, 1));
        int10 = (int2 + SCALE(int8, (int7 - 1), (int9 - int2)));
        SPLINE_ADDPOINT(0, int8, int11, int10, int12, int10, 0);
        SPLINE_ADDPOINT(1, int8, int5, (400 + varclient_1906), int5, (400 + varclient_1906), 0);
        var int1 = (int1 + int4);
        int8 = (int8 + 1);
    };
    if ((int3 == -1)) {
        var int3 = int6;
    };
    CAM_MOVEALONG(0, 0, int3, int6, 1, 0);
    int1 = (int1 - int4);
    while ((int1 < 0)) {
        int1 = (int1 + 8);
    };
    while ((int1 > 7)) {
        int1 = (int1 - 8);
    };
    IF_SETONCAMFINISHED(callback(script6148, int0, int1, int9, int4, int6, 0), int0);
    return;
}