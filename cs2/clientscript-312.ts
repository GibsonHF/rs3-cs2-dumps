//
function script312(int0: unknown_int, string0: string): void {
    if ((int0 == 2)) {
        stack(0);
        CHAT_SETMODE();
    } else {
        stack(int0);
        CHAT_SETMODE();
    };
    CHAT_SENDPUBLIC(`My total wealth is ${string0}.`);
    return;
}