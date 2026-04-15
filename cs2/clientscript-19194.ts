//
function script19194(int0: dbrow, int1: int, int2: component, int3: component, int4: component, int5: component, int6: int): void {
    var string0 = "";
    var int7 = false;
    var int8 = -1 as obj;
    var int9 = -1;
    var int10 = 0;
    [int8, int9, int10] = dbrow_getfield(int0, 401424, int1);
    if ((int10 <= int6)) {
        int7 = true;
    } else {
        int7 = false;
    };
    IF_SETHIDE(script12585(int7), int5);
    if ((item_getparam(int8, 4414) != -1 as struct)) {
        IF_SETOBJECT_NONUM(int8, int9, int4);
    } else {
        IF_SETOBJECT_ALWAYSNUM(int8, int9, int4);
    };
    if ((IF_FIND(int2) == 1)) {
        script19195(int7, int10, int8, int9);
    };
    IF_SETTEXT(`Level ${inttostring(int10, 10)}`, int3);
    return;
}