//
function script9959(int0: int): void {
    var int1 = script8855(int0);
    script8856(int0, 0);
    var int2 = 1;
    while ((int2 != 0)) {
        int2 = script8855((int0 + 1));
        script8856((int0 + 1), int1);
        int1 = int2;
        var int0 = (int0 + 1);
    };
    return;
}