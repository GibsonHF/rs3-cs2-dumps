//
function script20019(): number {
    var int0 = 0;
    var int1 = 0;
    var int2 = 4;
    int0 = (int0 + 1);
    while ((int0 <= 8)) {
        int1 = script20011(int0);
        if (((int1 != 0) && (int1 < int2))) {
            int2 = int1;
        };
    };
    return int2;
}