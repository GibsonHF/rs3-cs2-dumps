//[clientscript,clan_chat_minimenu_timer]
function script4450(int0: number, int1: number): void {
    if ((MINIMENUOPEN(int1, -1) == 1)) {
        return;
    };
    IF_SETONTIMER(callback(), int1);
    if ((unk10993(0) == 1)) {
        script4451(int0);
    };
    return;
}