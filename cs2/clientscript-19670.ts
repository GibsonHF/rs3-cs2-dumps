//
function script19670(int0: dbrow, int1: obj, int2: int): void {
    if (((int0 == -1 as dbrow) || (int1 == -1 as obj))) {
        return;
    };
    var int2 = MAX(1, int2);
    var int3 = dbrow_getfield(int0, 708736, 0);
    var int4 = dbrow_getfield(int0, 708624, 0);
    var int5 = dbrow_getfield(int0, 708704, 0);
    var int6 = dbrow_getfield(int0, 708720, 0);
    var int7 = dbrow_getfield(int0, 708640, 0);
    var int8 = dbrow_getfield(int0, 708608, 0);
    var int9 = dbrow_getfield(int0, 708656, 0);
    var int10 = dbrow_getfield(int0, 708688, 0);
    var int11 = dbrow_getfield(int0, 708672, 0);
    var int12 = dbrow_getfield(int0, 708752, 0);
    var int13 = item_getparam(int1, 5404);
    var int14 = item_getparam(int1, 8690);
    var int15 = item_getparam(int1, 5407);
    var int16 = item_getparam(int1, 5408);
    var int17 = item_getparam(int1, 4078);
    IF_SETHIDE(true, int5);
    IF_SETHIDE(true, int6);
    IF_SETHIDE(true, int4);
    IF_SETHIDE(true, int3);
    IF_SETHIDE(false, int12);
    IF_SETHIDE(false, int9);
    if ((int13 != -1 as struct)) {
        if ((int14 != -1 as struct)) {
            script17958(int14, struct_getparam(int14, 8691), struct_getparam(int14, 8692), int11, int7, int12, int8, int9, 50, -1 as dbrow);
            IF_SETMODELANGLE(0, 40, 0, 0, 0, 1400, comp(935, 84));
            script17956(int13, int11, int7, int4, int8, int9, 50, 14661 as dbrow);
        } else {
            script17956(int13, int11, int7, int4, int8, int9, 50, -1 as dbrow);
        };
    } else if ((int14 != -1 as struct)) {
        script17958(int14, struct_getparam(int14, 8691), struct_getparam(int14, 8692), int11, int7, int12, int8, int9, 50, -1 as dbrow);
        IF_SETMODELANGLE(0, 40, 0, 0, 0, 1400, comp(935, 84));
    } else {
        IF_SETHIDE(true, int7);
        IF_SETHIDE(true, int9);
        if ((int15 != -1 as dbrow)) {
            script16490(int15, int2, int5, 1);
            IF_SETHIDE(false, int5);
        } else if ((int16 != -1 as dbrow)) {
            IF_SETMODEL(dbrow_getfield(int16, 716800, 0), int6);
            IF_SETMODELANGLE(dbrow_getfield(int16, 716816, 0), int6);
            IF_SETHIDE(false, int6);
        } else {
            if ((int17 == true)) {
                IF_SETOBJECT_HIGHRES(int1, int5);
            } else {
                IF_SETOBJECT(int1, int2, int5);
            };
            IF_SETHIDE(false, int5);
        };
    };
    IF_SETTEXT(script4583(int2, OC_NAME(int1), `${script11601(int2, 1)} x ${OC_NAME(int1)}`), int10);
    IF_SETHIDE(true, int7);
    return;
}