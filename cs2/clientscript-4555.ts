//
function script4555(int0: component, int1: component, int2: int, int3: unknown_int): void {
    if ((((CLAN_GETCHATCOUNT() <= 0) || (USERDETAIL_QUICKCHAT() == 1)) || (script5280() == 1))) {
        return;
    };
    switch (int2) {
        case 84: {
            if ((CLAN_GETCHATCOUNT() > 0)) {
                if ((STRING_LENGTH(varclient_2480) > 0)) {
                    stack(1);
                    CHAT_SETMODE();
                    CHAT_SENDPUBLIC(varclient_2480);
                    script1594();
                };
            } else {
                MES_TYPED(11, 0, "You are not in a Friends Chat Channel.");
            };
            varclient_2480 = "";
            IF_SETTEXT(ESCAPE(varclient_2480), int0);
            varclient_1507 = STRING_LENGTH(varclient_2480);
            script4571(int0, int1, varclient_2480);
            break;
        }
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103: {
            varclient_1507 = script1553(int2, varclient_1507, varclient_2480);
            script4571(int0, int1, varclient_2480);
            break;
        }
        default: {
            if ((((CHAR_ISPRINTABLE(int3) == 1) || (int2 == 85)) || (int2 == 101))) {
                [varclient_2480, varclient_1507] = script802(varclient_1507, varclient_2480, 0, int2, int3);
                IF_SETTEXT(ESCAPE(varclient_2480), int0);
                script4571(int0, int1, varclient_2480);
            };
            break;
        }
    };
    return;
}