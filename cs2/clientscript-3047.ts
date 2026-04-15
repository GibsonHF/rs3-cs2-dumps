//
function script3047(int0: int): void {
    switch (int0) {
        case 0:
        case 1:
        case 2: {
            CHAT_GETFILTER_PUBLIC();
            CHAT_GETFILTER_TRADE(stack(), int0);
            CHAT_SETFILTER();
            break;
        }
    };
    script3045();
    return;
}