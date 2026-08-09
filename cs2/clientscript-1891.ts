//
function script1891(): number {
    if (((CLAN_GETCHATCOUNT() > 0) && BRANCH_GREATER_THAN_OR_EQUALS(CLAN_GETCHATMINKICK(CLAN_GETCHATRANK())))) {
        return 1;
    };
    return 0;
}