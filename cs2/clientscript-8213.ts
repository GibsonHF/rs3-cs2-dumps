//
function script8213(int0: int, int1: int, int2: unknown_int, int3: unknown_int): string {
    var string0 = "";
    var string1 = "";
    if ((int0 > 0)) {
        var int1 = script8214(int1);
        if ((int1 == 0)) {
            if ((int2 == 1)) {
                string0 = enum_getvalue(0, 36, 7559 as cs2enum, int0);
            };
            if ((strcmp(string0, "") == 0)) {
                string0 = enum_getvalue(0, 36, 6747 as cs2enum, int0);
            };
        } else {
            if ((int2 == 1)) {
                string0 = enum_getvalue(0, 36, 17346 as cs2enum, int0);
                if ((strcmp(string0, "") == 0)) {
                    string0 = enum_getvalue(0, 36, 7559 as cs2enum, int0);
                };
                string1 = enum_getvalue(0, 36, 7559 as cs2enum, int1);
            };
            if ((strcmp(string0, "") == 0)) {
                string0 = enum_getvalue(0, 36, 6747 as cs2enum, int0);
            };
            if ((strcmp(string1, "") == 0)) {
                string1 = enum_getvalue(0, 36, 6747 as cs2enum, int1);
            };
            if ((int3 == 1)) {
                string0 = `${string1}-${string0}`;
            } else {
                string0 = `${string1}-${string0}`;
            };
        };
    };
    return string0;
}