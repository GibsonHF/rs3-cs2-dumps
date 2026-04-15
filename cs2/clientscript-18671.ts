//
function script18671(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- <sprite=30015><nbsp><col=ffffff>${struct_getparam(48293, 2794)}:</col> Generates <col=ffffff>${inttostring(2, 10)}<nbsp><sprite=30101><nbsp>${struct_getparam(48333, 2794)}</col> stacks.`;
    string0 = `${string0}<br>- <sprite=30076><nbsp><col=ffffff>${struct_getparam(48296, 2794)}:</col> ${script18558(60)}</col>.`;
    string0 = `${string0}<br>- <sprite=30077><nbsp><col=ffffff>${struct_getparam(48297, 2794)}:</col> Deals ${script17717(150)}.`;
    string0 = `${string0}<br>- <sprite=30074><nbsp><col=ffffff>${struct_getparam(48314, 2794)}:</col> ${script17711(17, true)}.`;
    string0 = `${string0}<br>- ${script17710(script17444(int0))}.`;
    string0 = `${string0}<br>- <col=ffffff>On cast:</col> Resets the cooldown of <sprite=30076><nbsp><col=ffffff>${struct_getparam(48296, 2794)}</col> and <sprite=30074><nbsp><col=ffffff>${struct_getparam(48314, 2794)}</col>.`;
    return string0;
}