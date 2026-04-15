//
function script11691(int0: component): int {
    var int1 = (IF_GETWIDTH(int0) * 100);
    var int2 = IF_GETHEIGHT(int0);
    if (((int1 == 0) || (int2 == 0))) {
        return 177;
    };
    return (int1 / int2);
}