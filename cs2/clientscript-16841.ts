//
function script16841(int0: struct, int1: unknown_int, string0: string): string {
    if ((struct_getparam(int0, 2842) == 1)) {
        var string0 = `${string0}<br>- <sprite=23399><nbsp><col=ffffff>${struct_getparam(52777 as struct, 2794)}</col>: Hits up to ${script18561(9)} within ${script17709(1)} of the target, dealing ${script17717(70)}.`;
    };
    string0 = `${string0}<br>- <sprite=23399><nbsp><col=ffffff>${struct_getparam(52777 as struct, 2794)}</col>: Heals you for <col=ffffff>${inttostring(5, 10)}%</col> of the damage dealt.`;
    return string0;
}