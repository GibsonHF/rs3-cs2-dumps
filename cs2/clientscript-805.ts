//
function script805(int0: int): int {
    var int1 = 5592405;
    if ((int0 > 75)) {
        int1 = 65280;
    } else if ((int0 > 40)) {
        int1 = 16776960;
    } else if ((int0 > 25)) {
        int1 = 16750623;
    } else {
        int1 = 16711680;
    };
    return int1;
}