//
function script15385(int0: int, int1: component): void {
    if ((int0 == 50)) {
        if ((varclient_6857 > 1)) {
            script15386(2, varclient_6856);
        };
    } else if ((int0 == (50 + 50))) {
        script15384((varclient_6856 + 1));
        if ((varclient_6857 > 1)) {
            script15386(1, varclient_6856);
        };
    } else if ((int0 == ((50 + 50) + 400))) {
        var int0 = -1;
    };
    int0 = (int0 + 1);
    IF_SETONTIMER(callback(script15385, int0, int1), int1);
    return;
}