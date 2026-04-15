//[proc,partnercheck]
function script506(string0: string): unknown_int {
    if (((STRING_LENGTH(varclient_2504) > 0) && ((strcmp(REMOVETAGS(string0), REMOVETAGS(varclient_2504)) == 0) || (strcmp(REMOVETAGS(string0), REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED())) == 0)))) {
        return 1;
    };
    return 0;
}