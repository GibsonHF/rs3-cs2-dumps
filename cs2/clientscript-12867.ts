//
function script12867(): int {
    var int0 = 0;
    var int1 = 0;
    var int2 = 8;
    while ((++int0 <= 10)) {
        int1 = script11948(int0);
        if (((int1 != 0) && (int1 < int2))) {
            int2 = int1;
        };
    };
    return int2;
}