//
function script4745(int0: component, int1: int): void {
    var int2 = -1 as inv;
    var int3 = -1 as obj;
    var string0 = "null";
    if ((varbitplayer_3079 != 0)) {
        int2 = enum_getvalue(0, 39, 3879 as cs2enum, varbitplayer_3079);
        if ((int1 < INV_SIZE(int2))) {
            int3 = INV_GETOBJ(int2, int1);
            if ((int3 != -1 as obj)) {
                string0 = script4747(int3);
                if ((STRING_LENGTH(string0) > 0)) {
                    script8800(string0, int0, int1);
                };
            };
        };
    };
    return;
}