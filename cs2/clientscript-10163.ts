//
function script10163(int0: number, int1: number): void {
    var int2 = script10664();
    if (((int1 < 0) || (int1 >= int2))) {
        var int1 = script11067();
        if ((int1 != -1)) {
            script11635(int1, int0);
        };
        return;
    };
    var int3 = int2;
    while ((--int3 > int1)) {
        script11635(int3, script11076((int3 - 1)));
    };
    script11635(int1, int0);
    return;
}