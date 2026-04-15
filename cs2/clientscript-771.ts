//
function script771(int0: int, int1: int, int2: int): [unknown_int, int, int] {
    var int3 = 10;
    var int4 = 10;
    if ((int0 == 0)) {
        if ((int1 <= 100)) {
            return [21408, 100, 100];
        };
        if ((int1 <= 150)) {
            return [21409, 150, 150];
        };
        if ((int1 <= 200)) {
            return [21410, 200, 200];
        };
        if ((int1 <= 250)) {
            return [21411, 250, 250];
        };
        if ((int1 <= 300)) {
            return [21412, 300, 300];
        };
        if ((int1 <= 350)) {
            return [21413, 350, 350];
        };
        if ((int1 <= 400)) {
            return [21414, 400, 400];
        };
        if ((int1 <= 450)) {
            return [21415, 450, 450];
        };
        return [21416, 500, 500];
    };
    if ((int1 > int2)) {
        int3 = MAX(10, SCALE(int2, int1, int3));
    } else if ((int2 > int1)) {
        int4 = MAX(10, SCALE(int1, int2, int4));
    };
    return [1878, SCALE(int1, 100, (100 + int3)), SCALE(int2, 100, (100 + int4))];
}