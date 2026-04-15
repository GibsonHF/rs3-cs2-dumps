//
function script9958(int0: int, int1: int): void {
    var int2 = script8847(int0);
    if ((int2 != -1)) {
        if ((int1 == -1)) {
            script8841(int0, 0);
        } else if ((int1 < int2)) {
            if ((script8854() == int0)) {
                script8841(script8855((int2 - 1)), 1);
                if ((--int2 == int1)) {
                    return;
                };
            };
            script8856(int2, 0);
            script9959(int1);
            script8856(int1, int0);
        };
    };
    return;
}