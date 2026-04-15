//
function script18566(int0: struct, int1: int, int2: unknown_int): string {
    var int3 = script17726(int0);
    if (((int2 == 1) && (int3 > 0))) {
        return `<col=ffffff>${TOSTRING_LOCALISED(SCALE(int1, 100, int3), 1)}</col> (<col=ffffff>${inttostring(int1, 10)}%</col><sprite=14904>)`;
    };
    return `<col=ffffff>${inttostring(int1, 10)}%</col><sprite=14904>`;
}