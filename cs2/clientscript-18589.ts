//
function script18589(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = (8 * (16 / 3));
    if ((varbitplayer_30341 > 0)) {
        int2 = (int2 - (varbitplayer_30341 * 1));
    };
    int2 = ((int2 * 10) / (16 / 3));
    var string0 = `${string0}<br>- Heals you for <col=ffffff>${TOSTRING_LOCALISED(SCALE(int2, 1000, script2916()), 1)}</col> (<col=ffffff>${script7653(int2, 1, 1, 0, 1)}%</col> <sprite=18851><nbsp><col=ED705A>Maximum<nbsp>Life<nbsp>Points</col>) every <col=ffffff>${script14945(3, 1)}</col>.`;
    string0 = `${string0}<br>- ${script17710(16)}.`;
    return string0;
}