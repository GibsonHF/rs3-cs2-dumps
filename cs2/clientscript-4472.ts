//[clientscript,clan_chat_list_op]
function script4472(int0: unknown_int, int1: unknown_int, string0: string): void {
    switch (int0) {
        case 1: {
            script8512(varclient_2231, string0);
            break;
        }
        case 5: {
            printmessage(`Attempting to add ${string0} to your Friends List.`);
            var string0 = REMOVETAGS(string0);
            FRIEND_ADD(string0);
            break;
        }
        case 6: {
            printmessage(`Attempting to add ${string0} to your Ignore List.`);
            string0 = REMOVETAGS(string0);
            IGNORE_ADD(string0);
            break;
        }
        case 7: {
            printmessage(`Attempting to remove ${string0} from your Friends List.`);
            string0 = REMOVETAGS(string0);
            varclient_3936 = string0;
            script2018(8);
            break;
        }
        case 8: {
            printmessage(`Attempting to remove ${string0} from your Ignore List.`);
            string0 = REMOVETAGS(string0);
            IGNORE_DEL(string0);
            break;
        }
        case 9: {
            script4465(string0);
            break;
        }
    };
    return;
}