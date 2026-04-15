//
function script8500(int0: unknown_int): void {
    stack(8501);
    stack("");
    stack(int0);
    IF_SETONMISCTRANSMIT();
    IF_SETONCHATTRANSMIT(callback(script1546), int0);
    CHAT_GETFILTER_PUBLIC();
    CHAT_GETFILTER_TRADE(stack(), CHAT_GETFILTER_PRIVATE());
    CHAT_SETFILTER();
    varclient_3937 = -1;
    varclient_3938 = -1;
    varclient_3939 = -1;
    varclient_3940 = -1;
    varclient_3941 = -1;
    varclient_3942 = -1;
    varclient_4503 = -1;
    varclient_3943 = -1;
    varclient_4298 = -1;
    varclient_1275 = -1;
    varclient_1276 = -1;
    varclient_1510 = -1;
    return;
}