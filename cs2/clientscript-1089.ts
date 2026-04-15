//
function script1089(): void {
    if ((CHAT_GETFILTER_PRIVATE() == 2)) {
        CHAT_GETFILTER_PUBLIC();
        CHAT_GETFILTER_TRADE(stack(), 1);
        CHAT_SETFILTER();
        script8492(18);
        script84(18);
    };
    return;
}