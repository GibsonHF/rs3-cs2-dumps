//
function script813(int0: int): void {
    var int1 = int0;
    var int2 = -1 as model;
    var int3 = 0;
    var int4 = comp(-1, 65535);
    [int3, int4, int2] = script814(int0);
    IF_SETMODEL(int2, int4);
    script1421(int0);
    int1 = (int0 - 1);
    while ((int1 > 0)) {
        [int3, int4, int2] = script814(int1);
        IF_SETMODEL(int2, int4);
        script1421(int1);
        if ((int3 > 1)) {
            int1 = (int1 - 1);
        } else {
            int1 = (int1 - 1);
            while ((int1 > 0)) {
                script818(int1);
                int1 = (int1 - 1);
            };
        };
    };
    int1 = (int0 + 1);
    while ((int1 <= 14)) {
        [int3, int4, int2] = script814(int1);
        IF_SETMODEL(int2, int4);
        script1421(int1);
        if ((int3 > 1)) {
            int1 = (int1 + 1);
        } else {
            int1 = (int1 + 1);
            while ((int1 <= 14)) {
                script818(int1);
                int1 = (int1 + 1);
            };
        };
    };
    return;
}