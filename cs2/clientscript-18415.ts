//
function script18415(int0: number, int1: number): number {
    if ((((int0 != -1) && (int1 != -1)) && (DB_GETFIELDCOUNT(int1, 1118208) >= int0))) {
        return 1;
    };
    script12478("The current day of the running buff_select_event doesn't have enough buffs for all buff selection buttons.");
    return 0;
}