//
function script6361(int0: int): void {
    var int1 = 0;
    var int2 = (13 - 1);
    while ((int0 < int2)) {
        int1 = MAX((int0 + 1), int1);
        while ((script6352(script6362(int0)) == 0)) {
            script6367(int0, int1);
            if ((++int1 == 13)) {
                return;
            };
        };
        var int0 = (int0 + 1);
    };
    return;
}