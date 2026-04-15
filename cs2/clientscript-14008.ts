//
function script14008(int0: unknown_int): void {
    var int1 = script3853(int0);
    script13917(int1);
    if ((int1 < 20)) {
        script13917((int1 + 5));
    };
    if ((MODULO(int1, 5) != 4)) {
        script13917((int1 + 1));
    };
    if ((int1 > 4)) {
        script13917((int1 - 5));
    };
    if ((MODULO(int1, 5) != 0)) {
        script13917((int1 - 1));
    };
    script14010(int0, script13374(int1));
    if ((int1 < 20)) {
        script14010(script1501((int1 + 5)), script13374((int1 + 5)));
    };
    if ((MODULO(int1, 5) != 4)) {
        script14010(script1501((int1 + 1)), script13374((int1 + 1)));
    };
    if ((int1 > 4)) {
        script14010(script1501((int1 - 5)), script13374((int1 - 5)));
    };
    if ((MODULO(int1, 5) != 0)) {
        script14010(script1501((int1 - 1)), script13374((int1 - 1)));
    };
    return;
}