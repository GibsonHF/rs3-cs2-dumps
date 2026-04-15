//
function script10549(int0: int, int1: int): void {
    if (((((int0 < 0) || (int0 > 24)) || (int1 < 0)) || (int1 > 24))) {
        return;
    };
    var int2 = 0;
    int2 = script13932(int1);
    script13933(int1, script13932(int0));
    script13933(int0, int2);
    return;
}