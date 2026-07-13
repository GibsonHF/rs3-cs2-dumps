//
function script10164(int0: number, int1: number): void {
    var int2 = script10664();
    if (((int1 < 0) || (int1 >= int2))) {
        var int1 = script11067();
        if ((int1 == -1)) {
            int1 = (int2 - 1);
        } else {
            int1 = MAX(0, (int1 - 1));
        };
    };
    var int3 = script11076(int0);
    if ((int0 < int1)) {
        while ((int0 < int1)) {
            script11635(int0, script11076((int0 + 1)));
            var int0 = (int0 + 1);
        };
        script11635(int1, int3);
    } else if ((int0 > int1)) {
        while ((int0 > int1)) {
            script11635(int0, script11076((int0 - 1)));
            int0 = (int0 - 1);
        };
        script11635(int1, int3);
    };
    return;
}