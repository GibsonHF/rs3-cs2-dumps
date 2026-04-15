//
function script12246(int0: int): int {
    varclient_6674 = (varclient_6674 + 1);
    if ((varclient_6674 >= 20)) {
        varclient_6674 = MODULO(varclient_6674, 20);
    };
    script12247(varclient_6674, int0);
    return varclient_6674;
}