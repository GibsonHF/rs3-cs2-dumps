//
function script11245(): void {
    if ((STAFFMODLEVEL() == 0)) {
        return;
    };
    if ((strcmp("", IF_GETTEXT(comp(1610, 8))) != 0)) {
        CHAT_SENDPUBLIC(IF_GETTEXT(comp(1610, 8)));
    };
    return;
}