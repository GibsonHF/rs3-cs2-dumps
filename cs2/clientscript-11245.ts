//
function script11245(): void {
    if ((STAFFMODLEVEL() == 0)) {
        return;
    };
    if ((strcmp("", IF_GETTEXT(comp(1610, 8))) != 0)) {  // jmod_tool:selected_chat_phrase
        CHAT_SENDPUBLIC(IF_GETTEXT(comp(1610, 8)));  // jmod_tool:selected_chat_phrase
    };
    return;
}