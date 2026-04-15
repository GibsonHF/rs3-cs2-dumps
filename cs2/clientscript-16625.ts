//
function script16625(int0: int, int1: int): string {
    if ((int0 < 0)) {
        if ((varclient_4752 < 0)) {
            return "Promo Over";
        };
        return "Last Chance!";
    };
    return script5729((int0 / 60), MODULO(int0, 60), (59 - int1), true, true);
}