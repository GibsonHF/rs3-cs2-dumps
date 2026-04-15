//
function script10850(int0: component, int1: int): void {
    var string0 = "";
    switch (IF_GETGRAPHIC(int0)) {
        case 8239: {
            string0 = "This rune is the best possible in this slot. It will produce a lot of vis wax.";
            break;
        }
        case 8241: {
            string0 = "This rune is very strong in this slot, but not the best. It will produce quite a bit of vis wax.";
            break;
        }
        case 8248: {
            string0 = "This rune is poor in this slot. It won't produce much vis wax.";
            break;
        }
        default: {
            return;
        }
    };
    script8800(string0, int0, int1);
    return;
}