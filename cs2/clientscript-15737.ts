//
function script15737(int0: struct, int1: unknown_int, string0: string): string {
    if ((script7495() == 0)) {
        return string0;
    };
    var string0 = `${string0}<br><br><col=ffffff>${struct_getparam(52791, 2794)}</col> (consumes <col=ffffff>${inttostring(4, 10)}</col> <sprite=23875><nbsp><col=ffffff>${struct_getparam(52791, 2794)}</col> stacks)`;
    string0 = `${string0}<br>- Deals ${script17720(52790 as struct, 170, (170 + 20), 0, int1)} per hit.`;
    return string0;
}