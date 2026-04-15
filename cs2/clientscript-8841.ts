//
function script8841(int0: int, int1: unknown_int): void {
    if ((int0 <= 0)) {
        return;
    };
    var int2 = script8854();
    if ((int1 == 1)) {
        if ((int0 == 22)) {
            if ((int2 != int0)) {
                script8843(int2, 0);
            };
            script8837(varclient_2872, 0);
        } else {
            if ((int2 != int0)) {
                script8843(int2, 0);
                script8837(varclient_2872, 1);
            };
            script8848();
            script9955(int0);
        };
        script8849(int0);
        script8843(int0, int1);
    } else {
        script8850(int0);
        script8843(int0, int1);
        if ((int2 == int0)) {
            script8837(varclient_2872, 1);
            int2 = script8854();
            script8841(int2, 1);
        };
    };
    return;
}