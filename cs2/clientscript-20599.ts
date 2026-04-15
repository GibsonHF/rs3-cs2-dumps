//
function script20599(int0: dbrow, int1: component, int2: unknown_int, int3: component, int4: int, int5: int): void {
    IF_SETHIDE(true, int1);
    var int6 = dbrow_getfield(int0, 1417360, 0);
    var int7 = -1 as graphic;
    var int8 = -1 as struct;
    var int9 = -1;
    var int10 = -1;
    var int11 = 1;
    var int12 = 0;
    [int11, int12] = script20463(int0);
    if ((int4 == 536)) {
        var int4 = (536 / 4);
    } else {
        int4 = 172;
    };
    if ((script6431() == true)) {
        var int5 = (int5 - (int5 / 6));
    } else {
        int5 = (int5 - (int5 / 20));
    };
    if (((int6 != -1 as dbrow) && (int11 == 1))) {
        int8 = dbrow_getfield(int6, 1425504, 0);
        if (((int8 == -1 as struct) || (varplayer_12587 != int8))) {
            int7 = script20474(int6);
            int9 = dbrow_getfield(int6, 1425520, 0);
            if ((int9 == 0)) {
                int7 = 14158 as graphic;
            } else if ((int9 == 2)) {
                int7 = 11730 as graphic;
            };
            if ((int9 != -1)) {
                int10 = script20458(int8, int9);
            };
            if ((int10 != -1)) {
                if ((int7 != -1 as graphic)) {
                    stack(int7);
                    stack(int2);
                    IF_SETGRAPHIC();
                };
                IF_SETTEXT(TOSTRING_LOCALISED(int10, 1), int3);
                IF_SETPOSITION(int4, int5, 0, 0, int1);
                IF_SETHIDE(false, int1);
            };
        };
    };
    return;
}