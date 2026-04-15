//
function script14013(int0: unknown_int): void {
    varclient_6373 = 0;
    var int1 = script3853(int0);
    var int2 = script13374(int1);
    script14009(int0, int2);
    if ((int1 < 20)) {
        script14009(script1501((int1 + 5)), script13374((int1 + 5)));
    };
    if ((MODULO(int1, 5) != 4)) {
        script14009(script1501((int1 + 1)), script13374((int1 + 1)));
    };
    if ((int1 > 4)) {
        script14009(script1501((int1 - 5)), script13374((int1 - 5)));
    };
    if ((MODULO(int1, 5) != 0)) {
        script14009(script1501((int1 - 1)), script13374((int1 - 1)));
    };
    return;
}