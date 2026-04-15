//
function script20020(): int {
    var int0 = 0;
    var int1 = 0;
    var int2 = 5;
    while ((++int0 <= 8)) {
        int1 = script20015(int0);
        if (((int1 != 0) && (int1 < int2))) {
            int2 = int1;
        };
    };
    return int2;
}