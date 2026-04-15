//
function script19032(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 130, (130 + 30), 0, int1)} on first hit.`;
    string0 = `${string0}<br>- ${script17720(int0, 170, (170 + 30), 0, int1)} per hit every <col=ffffff>${script15973(3, 1)}</col>.`;
    string0 = `${string0}<br>- <col=ffffff>${inttostring((6 + 1), 10)}</col> hits.`;
    string0 = `${string0}<br>- <col=ffffff>Damage over time</col>.`;
    string0 = `${string0}<br>- Generates <sprite=30373><nbsp><col=ffffff>${struct_getparam(50070, 2794)}</col>.`;
    return string0;
}