//
function script14631(int0: dbrow): int {
    var int1 = dbrow_getfield(int0, 368640, 0);
    var int2 = 0;
    while ((++int2 <= 1)) {
        if ((script14651(int2) == int1)) {
            return int2;
        };
    };
    return -1;
}