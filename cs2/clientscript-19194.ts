//
function script19194(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    var string0 = "";
    var int7 = 0;
    var int8 = -1;
    var int9 = -1;
    var int10 = 0;
    [int8, int9, int10] = dbrow_getfield(int0, 401424, int1);
    if ((int10 <= int6)) {
        int7 = 1;
    } else {
        int7 = 0;
    };
    IF_SETHIDE(script12585(int7), int5);
    if ((item_getparam(int8, 4414) != -1)) {
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