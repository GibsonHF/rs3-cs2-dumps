//
function script18585(int0: unknown_int, int1: unknown_int): string {
    if (((int0 == 1) && (int1 == 1))) {
        return "Can be cast during the global cooldown but will not generate adrenaline or deal damage";
    };
    if ((int0 == 1)) {
        return "Can be cast during the global cooldown but will not generate adrenaline";
    };
    if ((int1 == 1)) {
        return "Can be cast during the global cooldown but will not deal damage";
    };
    return "Can be cast during the global cooldown";
}