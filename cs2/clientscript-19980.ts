//
function script19980(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 260, (260 + 40), 0, int1)}.`;
    string0 = `${string0}<br>- Applies <sprite=34998><nbsp><col=ffffff>${struct_getparam(51672, 2794)}</col> to the target.`;
    string0 = `${string0}<br>`;
    string0 = `${string0}<br><col=ffffff>Against your <sprite=34998><nbsp><col=ffffff>${struct_getparam(51672, 2794)}</col></col>:`;
    string0 = `${string0}<br>- Hits an additional <col=ffffff>${inttostring(3, 10)}</col> times.`;
    string0 = `${string0}<br>- Additional hits: ${script17721(int0, -1, 245, (245 + 20), 0, int1)}.`;
    string0 = `${string0}<br>- ${script18555(150)}.`;
    return string0;
}