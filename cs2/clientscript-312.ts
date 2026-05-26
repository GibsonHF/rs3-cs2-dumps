//
function script312(int0: number, string0: string): void {
    if ((int0 == 2)) {
        CHAT_SETMODE(0);
    } else {
        CHAT_SETMODE(int0);
    };
    CHAT_SENDPUBLIC(`My total wealth is ${string0}.`);
    return;
}