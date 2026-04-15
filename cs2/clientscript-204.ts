//[clientscript,friends_chat_minimenu_timer]
function script204(int0: unknown_int): void {
    if ((MINIMENUOPEN(script8049(int0, comp(1109, 33)), -1) == 1)) {
        return;
    };
    IF_SETONTIMER(callback(), script8049(int0, comp(1109, 33)));
    script518(int0);
    script2394(126287876);
    return;
}