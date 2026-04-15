//
function script19021(int0: unknown_int): string {
    var string0 = "";
    switch (int0) {
        case 1: {
            string0 = `Damage over time abilities generate <sprite=33967><nbsp>${struct_getparam(50083, 2794)}, lasting ${script15973(50, 1)}. At ${inttostring(1, 10)}, ${inttostring(10, 10)} and ${inttostring(25, 10)} stacks, gain additional effects.`;
            break;
        }
        case 2: {
            string0 = `Damage over time abilities deal ${inttostring(30, 10)}% increased damage.`;
            break;
        }
    };
    return string0;
}