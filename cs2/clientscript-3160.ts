//
function script3160(int0: int, int1: unknown_int, int2: component, int3: component): void {
    if (((USERDETAIL_QUICKCHAT() == 1) || (script5280() == 1))) {
        return;
    };
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    [int4, int5, int6, int7, int8, int9, int10] = script4590();
    switch (int0) {
        case 84: {
            if ((int4 < 0)) {
                MES_TYPED(43, 0, "You are not in a Clan.");
            } else if ((int5 < int6)) {
                MES_TYPED(43, 0, "Your rank is not high enough to talk in your Clan Chat.");
            } else if ((int7 == 1)) {
                MES_TYPED(43, 0, "You've been muted by your Clan and can't talk in your Clan Chat.");
            } else if ((STRING_LENGTH(varclient_2479) > 0)) {
                stack(0);
                CHAT_SETMODE();
                CHAT_SENDPUBLIC(varclient_2479);
                script1594();
            };
            varclient_2479 = "";
            IF_SETTEXT(ESCAPE(varclient_2479), int2);
            varclient_1098 = STRING_LENGTH(varclient_2479);
            script1390(int2, int3, varclient_2479);
            break;
        }
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103: {
            varclient_1098 = script1553(int0, varclient_1098, varclient_2479);
            script1390(int2, int3, varclient_2479);
            break;
        }
        default: {
            if ((((CHAR_ISPRINTABLE(int1) == 1) || (int0 == 85)) || (int0 == 101))) {
                [varclient_2479, varclient_1098] = script802(varclient_1098, varclient_2479, 0, int0, int1);
                IF_SETTEXT(ESCAPE(varclient_2479), int2);
                script1390(int2, int3, varclient_2479);
            };
            break;
        }
    };
    return;
}