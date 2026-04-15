//
function script1891(): unknown_int {
    if (((CLAN_GETCHATCOUNT() > 0) && operator(">=", CLAN_GETCHATMINKICK(CLAN_GETCHATRANK())))) {
        return 1;
    };
    return 0;
}