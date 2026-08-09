//
function script16266(): number {
    if ((varclient_8421 == comp(-1, 65535))) {
        return 0;
    };
    if ((varplayer_12914 == 1)) {
        return 0;
    };
    if ((varclient_8422 == -1)) {
        if (((IF_FIND[1](varclient_8421) == 1) || (CC_FIND[1](varclient_8421, varclient_8422) == 1))) {
            if ((STRING_LENGTH(CC_GETTEXT[1]()) > 0)) {
                unk11175[1]();
                CC_SETTEXT[1]("");
                unk11176();
                varclient_8421 = comp(-1, 65535);
                varclient_8422 = -1;
                return 1;
            };
            varclient_8421 = comp(-1, 65535);
            varclient_8422 = -1;
        };
    } else if ((CC_FIND[1](varclient_8421, varclient_8422) == 1)) {
        if ((STRING_LENGTH(CC_GETTEXT[1]()) > 0)) {
            unk11175[1]();
            CC_SETTEXT[1]("");
            unk11176();
            varclient_8421 = comp(-1, 65535);
            varclient_8422 = -1;
            return 1;
        };
        varclient_8421 = comp(-1, 65535);
        varclient_8422 = -1;
    };
    return 0;
}