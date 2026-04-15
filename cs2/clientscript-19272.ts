//
function script19272(): void {
    var int0 = -1 as model;
    switch (script16161()) {
        case 50555: {
            int0 = 64543 as model;
            if ((IF_GETMODEL(84541499) != int0)) {
                IF_SETMODEL(int0, comp(1290, 59));
                IF_SETPOSITION(-340, -180, 1, 1, comp(1290, 59));
                IF_SETMODELANGLE(0, 0, 0, 0, 16, 1200, comp(1290, 59));
            };
            int0 = 109310 as model;
            if ((IF_GETMODEL(84541500) != int0)) {
                IF_SETMODEL(int0, comp(1290, 60));
                IF_SETPOSITION(240, -180, 1, 1, comp(1290, 60));
                IF_SETMODELANGLE(0, 0, 0, 0, -16, 1200, comp(1290, 60));
            };
            break;
        }
    };
    if ((varplayer_11901 == -1 as dbrow)) {
        return;
    };
    var int1 = dbrow_getfield(varplayer_11901, 1216528, 0);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    if ((DB_GETROWTABLE(varplayer_11902) == 298)) {
        IF_SETHIDE(false, comp(1290, 9));
    } else {
        IF_SETHIDE(true, comp(1290, 9));
    };
    [int0, int2, int3, int4, int5, int6, int7, int8, int9] = dbrow_getfield(int1, 1212560, 0);
    if ((IF_GETMODEL(84541449) != int0)) {
        IF_SETMODEL(int0, comp(1290, 9));
        IF_SETPOSITION(int2, int3, 1, 1, comp(1290, 9));
        IF_SETMODELANGLE(int4, int5, int6, int7, int8, int9, comp(1290, 9));
    };
    [int0, int2, int3, int4, int5, int6, int7, int8, int9] = dbrow_getfield(int1, 1212576, 0);
    if ((IF_GETMODEL(84541475) != int0)) {
        IF_SETMODEL(int0, comp(1290, 35));
        IF_SETPOSITION(int2, int3, 1, 1, comp(1290, 35));
        IF_SETMODELANGLE(int4, int5, int6, int7, int8, int9, comp(1290, 35));
    };
    [int0, int2, int3, int4, int5, int6, int7, int8, int9] = dbrow_getfield(int1, 1212592, 0);
    if ((IF_GETMODEL(84541524) != int0)) {
        IF_SETMODEL(int0, comp(1290, 84));
        IF_SETPOSITION(int2, int3, 1, 1, comp(1290, 84));
        IF_SETMODELANGLE(int4, int5, int6, int7, int8, int9, comp(1290, 84));
    };
    return;
}