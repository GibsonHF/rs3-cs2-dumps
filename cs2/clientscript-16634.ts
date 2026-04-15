//
function script16634(int0: int, int1: int, string0: string): void {
    switch (FRIEND_PLATFORM(int0)) {
        case 0:
        case 4: {
            script1050(1, string0, int1);
            break;
        }
        case 8: {
            printmessage("You cannot use Quick Chat to send a message to someone playing Old School RuneScape.");
            break;
        }
        default: {
            printmessage("You cannot use Quick Chat to send a message to that player.");
            break;
        }
    };
    return;
}