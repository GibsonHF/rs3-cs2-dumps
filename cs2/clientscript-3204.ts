//
function script3204(int0: struct): int {
    var int1 = script11366(int0);
    var int2 = 0;
    if ((int1 == 0)) {
        int2 = script11367(int0);
        if ((int2 < 9000)) {
            int1 = 1;
        } else if (((int2 >= 9000) && (int2 < 24000))) {
            int1 = 2;
        } else {
            int1 = 3;
        };
    };
    return int1;
}