//
function script15735(string0: string): string {
    if ((script7495() == 0)) {
        return string0;
    };
    var string0 = `${string0}<br><br><col=ffffff>${struct_getparam(52791, 2794)}</col> (consumes <col=ffffff>${inttostring(4, 10)}</col> <sprite=23875><nbsp><col=ffffff>${struct_getparam(52791, 2794)}</col> stacks)`;
    string0 = `${string0}<br>- Deals <col=ffffff>${script7653(100, 2, 2, 0, 1)}%</col> increased damage for each <col=ffffff>1%</col> <sprite=18851><nbsp><col=ED705A>Life<nbsp>Points</col> the target is missing, up to a maximum of <col=ffffff>${script7653(650, 1, 1, 0, 1)}%</col>.`;
    return string0;
}