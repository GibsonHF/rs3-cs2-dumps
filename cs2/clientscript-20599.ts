//
function script20599(int0: number, int1: number, int2: number, int3: number): void {
    IF_SETHIDE(true, int1);
    var int4 = dbrow_getfield(int0, 1417360, 0);
    var int5 = -1 as graphic;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = 1;
    var int10 = 0;
    [int9, int10] = script20463(int0);
    if (((int4 != -1) && (int9 == 1))) {
        int6 = dbrow_getfield(int4, 1425504, 0);
        if ((int6 != -1)) {
            int7 = dbrow_getfield(int4, 1425520, 0);
            int5 = script20620(int7);
            if ((int7 != -1)) {
                int8 = script20465(int6, int7);
            };
            if ((int8 != -1)) {
                if ((int5 != -1 as graphic)) {
                    IF_SETGRAPHIC(int5, int2);
                };
                IF_SETTEXT(TOSTRING_LOCALISED(int8, 1), int3);
                IF_SETHIDE(false, int1);
            };
        };
    };
    return;
}