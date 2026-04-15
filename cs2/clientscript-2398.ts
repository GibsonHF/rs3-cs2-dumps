//
function script2398(int0: unknown_int, int1: component, string0: string, string1: string): void {
    var int2 = 0;
    var string2 = "Talking in: ";
    var string3 = "Owner: ";
    var string4 = "<br>";
    var int3 = 26 as fontmetrics;
    if ((strcmp(string1, "") == 0)) {
        string3 = "";
        string4 = "";
    };
    var string5 = `${string2}${string0}<br>${string3}${string1}`;
    var int4 = IF_GETWIDTH(int1);
    if ((STRINGWIDTH(string0, int3) > int4)) {
        string2 = "";
        while (((STRINGWIDTH(`${string0}...`, int3) > int4) && (STRING_LENGTH(string0) > 0))) {
            var string0 = SUBSTRING(string0, 0, (STRING_LENGTH(string0) - 1));
            int2 = 1;
        };
        string0 = `<col=ffff64>${string0}...`;
    } else if ((STRINGWIDTH(`${string2}${string0}`, int3) > int4)) {
        string2 = "";
        int2 = 1;
    };
    if ((STRINGWIDTH(string1, int3) > int4)) {
        string3 = "";
        while (((STRINGWIDTH(`${string1}...`, int3) > int4) && (STRING_LENGTH(string1) > 0))) {
            var string1 = SUBSTRING(string1, 0, (STRING_LENGTH(string1) - 1));
            int2 = 1;
        };
        string1 = `${string1}...`;
    } else if ((STRINGWIDTH(`${string3}${string1}`, int3) > int4)) {
        string3 = "";
        int2 = 1;
    };
    IF_SETTEXT(`${string2}<col=ffff64>${string0}</col>${string4}${string3}<col=ffff64>${string1}`, int1);
    if ((int2 == 1)) {
        IF_SETONMOUSEREPEAT(callback(script8799, string5, -2147483645, -2147483643), int1);
    } else {
        IF_SETONMOUSEREPEAT(callback(), int1);
    };
    var int5 = script8049(int0, comp(1109, 29));
    if ((IF_GETWIDTH(int5) < STRINGWIDTH(`${TOSTRING_LOCALISED(444, 1)} /`, int3))) {
        IF_SETHIDE(true, int5);
    } else {
        IF_SETHIDE(false, int5);
    };
    int5 = script8049(int0, comp(1109, 26));
    var int6 = script8049(int0, comp(1109, 25));
    var int7 = script8049(int0, comp(1109, 29));
    var int8 = 0;
    var int9 = 0;
    if ((script1891() == 1)) {
        int8 = 185;
        int9 = 155;
    } else {
        int8 = 155;
        int9 = 125;
    };
    if ((IF_GETWIDTH(int5) < int8)) {
        IF_SETHIDE(true, int7);
    } else {
        IF_SETHIDE(false, int7);
    };
    if ((IF_GETWIDTH(int5) < int9)) {
        IF_SETHIDE(true, int5);
        IF_SETHIDE(false, int6);
    } else {
        IF_SETHIDE(false, int5);
        IF_SETHIDE(true, int6);
    };
    return;
}