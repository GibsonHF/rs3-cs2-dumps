//
function script15010(): number {
    var int0 = -1;
    var int1 = 8;
    if ((PLAYERMEMBER() == 0)) {
        int1 = 3;
    };
    var int2 = 0;
    while ((++int0 < int1)) {
        if ((STOCKMARKET_ISOFFEREMPTY(int0, 0) == 1)) {
            int2 = (int2 + 1);
        };
    };
    return int2;
}