//
function script21127(): void {
    var string0 = "";
    switch (int0) {
        case 1: {
            string0 = `<col=25AD37>Ranged abilities</col> have a <col=ffffff>${script7653(250, 1, 1, 0, 1)}%</col> chance to refresh their cooldown when cast against a target.`;
            break;
        }
        case 2: {
            string0 = `<col=ffffff>Sanguine Volley</col> and refreshing an ability applies <sprite=36575><nbsp><col=ffffff>${struct_getparam(53542, 2794)}</col> to self for <col=ffffff>${script15973(9, 1)}</col>.`;
            break;
        }
    };
    stack(string0);
    return;
}