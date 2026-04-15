//
function script806(): int {
    var int0 = 5592405;
    if ((RUNENERGY_VISIBLE() > 75)) {
        int0 = 65280;
    } else if ((RUNENERGY_VISIBLE() > 40)) {
        int0 = 16776960;
    } else if ((RUNENERGY_VISIBLE() > 25)) {
        int0 = 16750623;
    } else {
        int0 = 16711680;
    };
    return int0;
}