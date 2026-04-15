//
function script18637(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 135, (135 + 30), 0, int1)}.`;
    string0 = `${string0}<br>- ${script17720(int0, 155, (155 + 30), 0, int1)} to the target and up to ${script18561(9)} within ${script17709(1)} of you.`;
    string0 = `${string0}<br>- Reduces the cooldown of <sprite=14215><nbsp><col=ffffff>${struct_getparam(14685, 2794)}</col> by <col=ffffff>${script15973(5, 1)} for each enemy hit.`;
    string0 = `${string0}<br>- <col=ffffff>${inttostring(2, 10)}</col> hits.`;
    string0 = script15736(int0, string0, int1);
    return string0;
}