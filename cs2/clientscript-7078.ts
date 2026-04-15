//
function script7078(int0: component): void {
    if ((varclient_4103 != 1)) {
        if ((varclient_4102 < 25)) {
            if ((MODULO(varclient_4102, 1) == 0)) {
                IF_SETPOSITION(IF_GETX(int0), (5 + IF_GETY(int0)), 0, 0, int0);
            };
            varclient_4102 = (varclient_4102 + 1);
        } else {
            varclient_4103 = 1;
            varclient_4102 = 0;
        };
    } else if ((varclient_4102 < 25)) {
        if ((MODULO(varclient_4102, 1) == 0)) {
            IF_SETPOSITION(IF_GETX(int0), (IF_GETY(int0) - 5), 0, 0, int0);
        };
        varclient_4102 = (varclient_4102 + 1);
    } else {
        varclient_4103 = 0;
        varclient_4102 = 0;
    };
    return;
}