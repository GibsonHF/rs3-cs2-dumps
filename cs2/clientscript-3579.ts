//
function script3579(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int): string {
    var string0 = "With any of the following traits:<br>";
    if ((int0 > -1)) {
        string0 = `${string0}${struct_getparam(enum_getvalue(0, 73, 15791 as cs2enum, int0), 7456)}`;
    } else {
        return string0;
    };
    if ((int1 > -1)) {
        string0 = `${string0}, ${struct_getparam(enum_getvalue(0, 73, 15791 as cs2enum, int1), 7456)}`;
    } else {
        return string0;
    };
    if ((int2 > -1)) {
        string0 = `${string0}, ${struct_getparam(enum_getvalue(0, 73, 15791 as cs2enum, int2), 7456)}`;
    } else {
        return string0;
    };
    if ((int3 > -1)) {
        string0 = `${string0}, ${struct_getparam(enum_getvalue(0, 73, 15791 as cs2enum, int3), 7456)}`;
    } else {
        return string0;
    };
    if ((int4 > -1)) {
        string0 = `${string0}, ${struct_getparam(enum_getvalue(0, 73, 15791 as cs2enum, int4), 7456)}`;
    } else {
        return string0;
    };
    if ((int5 > -1)) {
        string0 = `${string0}, ${struct_getparam(enum_getvalue(0, 73, 15791 as cs2enum, int5), 7456)}`;
    };
    return string0;
}