//
function script3355(int0: int, int1: int, int2: int, int3: int): [int, int] {
    var int4 = 0;
    var int5 = 0;
    if (((int0 == -1) && (int1 == -1))) {
        var [int0, int1] = script10900(DATE_MINUTES());
    };
    if ((int0 > int2)) {
        return [-1, -1];
    };
    int4 = (int2 - int0);
    if ((int3 >= int1)) {
        int5 = (int3 - int1);
    } else {
        int4 = MAX((int4 - 1), 0);
        if ((int3 == 0)) {
            int5 = (60 - int1);
        } else {
            int5 = (int1 - int3);
        };
    };
    return [int4, int5];
}