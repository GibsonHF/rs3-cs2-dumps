//
function script17882(int0: number, int1: number): number {
    var int2 = MIN(script17862(int0), script17892(int0));
    var int3 = -1;
    var int4 = 0;
    while ((int2 >= 1)) {
        if ((script17868(int0, int2) == 0)) {
            int4 = script17874(int0, int2);
            if ((script17843(int4, int1) == 1)) {
                return 1;
            };
        };
        int2 = (int2 - 1);
    };
    return 0;
}