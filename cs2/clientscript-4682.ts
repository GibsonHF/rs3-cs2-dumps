//
function script4682(): int {
    var int0 = -1;
    var int1 = 8;
    if ((PLAYERMEMBER() == false)) {
        int1 = 3;
    };
    while ((++int0 < int1)) {
        if ((STOCKMARKET_ISOFFEREMPTY(int0, 0) == 1)) {
            return int0;
        };
    };
    return -1;
}