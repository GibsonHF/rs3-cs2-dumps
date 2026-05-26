//[clientscript,friends_chat_minimenu_timer]
function script204(int0: number): void {
    if ((MINIMENUOPEN(script8049(int0, 72679457), -1) == 1)) {
        return;
    };
    IF_SETONTIMER(callback(), script8049(int0, 72679457));
    script518(int0);
    script2394(126287876);
    return;
}