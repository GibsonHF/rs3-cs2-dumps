//
function script15256(): void {
    var string0 = "";
    var int0 = FEDERATED_LOGIN_STATUS();
    switch (int0) {
        case 21: {
            string0 = "RuneScape was unable to obtain login information from Steam. Please try again later.";
            break;
        }
        case 24:
        case 25:
        case 26: {
            string0 = `RuneScape received an unexpected response (${inttostring(int0, 10)}). Please try again later, or check the RuneScape website for server maintenance.`;
            break;
        }
        default: {
            string0 = `An unexpected error occured (${inttostring(int0, 10)}). Please try again later.`;
            break;
        }
    };
    var string1 = "Go Back";
    var int1 = 1;
    switch (varclient_6818) {
        case 0: {
            string1 = "Try Again";
            break;
        }
        case 100: {
            int1 = 2;
            break;
        }
        case 101: {
            int1 = 4;
            break;
        }
        case 1:
        case 2: {
            int1 = 3;
            break;
        }
    };
    IF_SETSIZE(0, 74, 1, 1, comp(744, 55));
    IF_SETHIDE(false, comp(744, 59));
    script15269(string0, string1, int1, 0);
    return;
}