//
function script4362(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: int, int11: unknown_int, long0: unknown_long): void {
    if ((((int9 == 0) || (int8 == 0)) || (int6 == 0))) {
        stack(5936);
        stack(int2);
        IF_SETGRAPHIC();
        return;
    };
    var int12 = enum_getvalue(0, 26, 3689 as cs2enum, int6);
    var string0 = `${script3381(int4)} - ${enum_getvalue(0, 36, 3695 as cs2enum, int5)}`;
    string0 = `${string0} Game Time`;
    if ((int9 == 261)) {
        string0 = `${string0}<br><br>N/A - <br>${enum_getvalue(0, 36, 3696 as cs2enum, int8)}<br><br>${enum_getvalue(0, 36, 3687 as cs2enum, int6)}`;
    } else {
        string0 = `${string0}<br><br>World ${inttostring(int9, 10)} - <br>${enum_getvalue(0, 36, 3696 as cs2enum, int8)}<br><br>${enum_getvalue(0, 36, 3687 as cs2enum, int6)}`;
    };
    if (((int12 != -1 as cs2enum) && (int7 > 0))) {
        string0 = `${string0}<br>${enum_getvalue(0, 36, int12, int7)}`;
    };
    string0 = `${string0}<br><br>Open to ${enum_getvalue(0, 36, 3716 as cs2enum, int10)}`;
    if ((int11 == 1)) {
        string0 = `${string0}<br>Attendance is mandatory`;
    };
    IF_SETONOP(callback(script4363, int0, string0, long0, int2, int4, int5, int9, int8, int6), int1);
    stack(enum_getvalue(0, 23, 3688, int6));
    stack(int3);
    IF_SETGRAPHIC();
    stack(5932);
    stack(int2);
    IF_SETGRAPHIC();
    return;
}