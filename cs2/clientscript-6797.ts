//
function script6797(int0: obj, int1: int): int {
    var int0 = script8156(int0);
    if ((script3802(int0) == true)) {
        if ((script14340(int0, 0, script14337()) != -1)) {
            return 0;
        };
        return 1;
    };
    var int2 = script14342(int0, 0, 1);
    if ((int2 == -1)) {
        return 1;
    };
    if ((((2147483647 - int1) - script14345(int2)) > 0)) {
        return 0;
    };
    return -1;
}