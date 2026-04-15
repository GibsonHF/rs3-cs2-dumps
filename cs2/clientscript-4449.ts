//[clientscript,clan_chat_onclantransmit]
function script4449(int0: component, int1: component): void {
    if ((MINIMENUOPEN(int1, -1) == 1)) {
        IF_SETONTIMER(callback(script4450, int0, int1), int1);
        return;
    };
    if ((unk10993(0) == 1)) {
        script4451(int0);
    };
    return;
}