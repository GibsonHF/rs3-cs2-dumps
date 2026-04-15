//
function script12243(int0: cs2enum): void {
    var int1 = -1;
    while ((++int1 < ENUM_GETOUTPUTCOUNT(int0))) {
        if ((script7083(script9101(enum_getvalue(0, 73, int0, int1))) == 1)) {
            script12247(varclient_6674, int1);
            varclient_6674 = (varclient_6674 + 1);
            if ((varclient_6674 >= 20)) {
                varclient_6674 = MODULO(varclient_6674, 20);
            };
        };
    };
    return;
}