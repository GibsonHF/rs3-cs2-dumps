//
function script17721(int0: struct, int1: unknown_int, int2: int, int3: int, int4: unknown_int, int5: unknown_int): string {
    var int6 = script17726(int0);
    if ((int1 == 0)) {
        var int1 = script18567(int0);
    };
    var string0 = script17722(int1, 1);
    if ((int4 == 1)) {
        string0 = `bonus ${string0}`;
    };
    if (((int5 == 1) && (int6 > 0))) {
        return `<col=ffffff>${TOSTRING_LOCALISED(SCALE(int2, 100, int6), 1)}-${TOSTRING_LOCALISED((SCALE(int2, 100, int6) + SCALE((int3 - int2), 100, int6)), 1)}</col> (<col=ffffff>${inttostring(int2, 10)}%-${inttostring(int3, 10)}%</col><sprite=14904>) ${string0}`;
    };
    return `<col=ffffff>${inttostring(int2, 10)}%-${inttostring(int3, 10)}%</col><sprite=14904> ${string0}`;
}