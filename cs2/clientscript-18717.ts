//
function script18717(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 180, (180 + 30), 0, 1)} on first hit.`;
    string0 = `${string0}<br>- <col=ffffff>${script7653(125, 1, 1, 0, 1)}%</col> of all <col=ffffff>${struct_getparam(49555, 2794)}</col> stacks ${script18568(int0)} per hit every <col=ffffff>${script15973(2, 1)}</col>.`;
    string0 = `${string0}<br>- <col=ffffff>${inttostring((5 + 1), 10)}</col> hits.`;
    string0 = `${string0}<br>- <col=ffffff>Damage over time</col>.`;
    string0 = `${string0}<br>- ${script17724(5, 5)}.`;
    string0 = `${string0}<br>- Consumes all <col=ffffff>${struct_getparam(49555, 2794)}</col> stacks.`;
    return string0;
}