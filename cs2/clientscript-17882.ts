//
function script17882(int0: dbrow, int1: boolean): unknown_int {
    var int2 = MIN(script17862(int0), script17892(int0));
    var int3 = -1;
    var int4 = false;
    while ((int2 >= 1)) {
        if ((script17868(int0, int2) == false)) {
            int4 = script17874(int0, int2);
            if ((script17843(int4, int1) == true)) {
                return 1;
            };
        };
        int2 = (int2 - 1);
    };
    return 0;
}