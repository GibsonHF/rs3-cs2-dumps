//
function script476(int0: unknown_int, int1: component, int2: unknown_int, int3: component, int4: component): void {
    IF_CLEAROPS(int1);
    var int5 = false;
    var string0 = "";
    var string1 = "";
    var int6 = -1 as graphic;
    var int7 = 0;
    var int8 = 0;
    [int7, int5, string0, int8] = script477(int0);
    var int9 = 12136 as cs2enum;
    if ((int7 > 0)) {
        if ((int8 == 1)) {
            string0 = `${string0} master`;
            int9 = 14173 as cs2enum;
        };
        int6 = enum_getvalue(0, 23, 8548 as cs2enum, int7);
        IF_SETOP(1, "Select", int1);
        if ((int5 == true)) {
            IF_SETOP(2, "Activate", int1);
        };
        IF_SETOP(3, "Remove", int1);
        string1 = struct_getparam(enum_getvalue(0, 73, int9, int7), 2795);
        if ((int7 == 29)) {
            string1 = strconcat(string1, `<br><br>${script17675()}`);
        };
    } else {
        string0 = "";
        int6 = -1 as graphic;
    };
    IF_SETTEXT(string0, int3);
    IF_SETTEXT(string1, int4);
    stack(int6);
    stack(int2);
    IF_SETGRAPHIC();
    return;
}