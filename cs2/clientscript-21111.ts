//
function script21111(): void {
    var int6 = varplayer_4499;
    if ((int1 == 0)) {
        var int1 = script18567(int0);
    };
    var string0 = script17722(int1, 1);
    if ((int4 == 1)) {
        string0 = `bonus ${string0}`;
    };
    if (((int5 == 1) && (int6 > 0))) {
        stack(`<col=ffffff>${TOSTRING_LOCALISED(SCALE(int2, 100, int6), 1)}-${TOSTRING_LOCALISED((SCALE(int2, 100, int6) + SCALE((int3 - int2), 100, int6)), 1)}</col> (<col=ffffff>${inttostring(int2, 10)}%-${inttostring(int3, 10)}%</col><sprite=14902>) ${string0}`);
        return;
    };
    stack(`<col=ffffff>${inttostring(int2, 10)}%-${inttostring(int3, 10)}%</col><sprite=14902> ${string0}`);
    return;
}