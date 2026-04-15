//
function script18659(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 270, (270 + 60), 0, int1)}.`;
    string0 = `${string0}<br>- ${script17712(100, false)} for each <sprite=30101><nbsp><col=ffffff>${struct_getparam(48333, 2794)}</col> stack.`;
    string0 = `${string0}<br>- Consumes up to <col=ffffff>${inttostring(6, 10)} <sprite=30101><nbsp>${struct_getparam(48333, 2794)}</col> stacks.`;
    return string0;
}