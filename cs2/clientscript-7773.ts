//
function script7773(int0: int, int1: int, int2: int, string0: string): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = script15709(1);
    [int3, int4] = script7775(1, string0, int2, -1n, -1, -1, -1, -1);
    if ((varclient_6403 == 0)) {
        if ((IF_FIND(comp(1477, 28)) == 1)) {
            var int0 = ((((CC_GETWIDTH() / 2) + CC_GETX()) + int0) - (int3 / 2));
            var int1 = ((((CC_GETHEIGHT() / 2) + CC_GETY()) + int1) - (int4 / 2));
        };
    } else {
        [int0, int1, int5, int6] = script14244();
        int5 = (int5 - int0);
        int6 = (int6 - int1);
        int0 = (int0 + ((int5 - int3) / 2));
        int1 = (int1 + ((int6 - int4) / 2));
    };
    IF_SETPOSITION(int0, int1, 0, 0, int7);
    return;
}