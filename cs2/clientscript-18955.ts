//
function script18955(int0: int, int1: unknown_int): void {
    if ((int1 == 1)) {
        var int0 = 0;
    } else {
        int0 = script12377(int0, 1, 25);
    };
    var int2 = 0;
    while ((int2 <= 7)) {
        unk11042(int2, int0);
        if ((int1 == 1)) {
            unk11043(1);
        } else {
            unk11043(0);
        };
        if ((int2 == 0)) {
            if ((script18943() == 0)) {
                unk11042(int2, 0);
                unk11041(1);
            } else if ((int1 == 1)) {
                unk11041(2);
            } else {
                unk11041(1);
            };
        };
        int2 = (int2 + 1);
    };
    return;
}