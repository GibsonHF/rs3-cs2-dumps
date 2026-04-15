//
function script453(int0: int, int1: unknown_int, int2: unknown_int, int3: unknown_int): string {
    var string0 = "";
    var int4 = 0;
    if ((((int1 == 0) && (script19705() == 1)) && (enum_hasoutput(0, 10781 as cs2enum, int0) == 1))) {
        int4 = script19688(int0);
    } else {
        int4 = script19718(int0);
    };
    if (((int4 != 0) && (STRING_LENGTH(enum_getvalue(0, 36, 6629 as cs2enum, int4)) > 0))) {
        if ((int1 == 1)) {
            string0 = enum_getvalue(0, 36, 6629 as cs2enum, int4);
        } else {
            string0 = enum_getvalue(0, 36, 6629 as cs2enum, int4);
        };
    } else {
        string0 = script19717(int0);
    };
    if (((((varclient_3477 == true) && (int1 == 1)) && (int3 == 0)) && (int0 == varclient_8266))) {
        string0 = `* ${string0}`;
    };
    if (((int2 == 0) || (enum_hasoutput(0, 10781 as cs2enum, int0) == 0))) {
        return string0;
    };
    var int5 = 0;
    var int6 = 0;
    if (((script19705() == 1) && (int1 == 0))) {
        int5 = script19690(int0);
        int6 = script19691(int0);
    } else {
        int5 = script19720(int0);
        int6 = script19721(int0);
    };
    if (((int5 <= 0) || (int6 <= 0))) {
        return string0;
    };
    return `${string0} (${TOSTRING_LOCALISED(int5, 1)} x ${TOSTRING_LOCALISED(int6, 1)})`;
}