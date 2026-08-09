//
function script18428(int0: number, int1: number): number {
    var int2 = -1;
    if ((int1 == -1)) {
        var int1 = script18427();
    };
    if ((((int0 > 0) && (int1 != -1)) && (script18415(int0, int1) == 1))) {
        int2 = dbrow_getfield(int1, 1118208, (int0 - 1));
        if ((int2 != -1)) {
            return dbrow_getfield(int2, 1122304, 0);
        };
    };
    return -1;
}