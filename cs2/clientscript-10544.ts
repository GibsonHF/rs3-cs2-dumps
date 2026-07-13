//
function script10544(int0: number): void {
    script11635(int0, 0);
    var int1 = int0;
    var int2 = (43 - 1);
    var int3 = 0;
    while ((int1 < int2)) {
        int3 = script11076((int1 + 1));
        script11635(int1, int3);
        if ((int3 == 0)) {
            return;
        };
        int1 = (int1 + 1);
    };
    script11635(int1, 0);
    return;
}