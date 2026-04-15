//
function script13947(int0: int): unknown_int {
    var int1 = (int0 - DATE_MINUTES());
    if ((int1 > 10080)) {
        return 22812;
    };
    if ((int1 > 1440)) {
        return 22811;
    };
    if ((int1 > 0)) {
        return 22813;
    };
    return -1;
}