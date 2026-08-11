//
function script12804(): void {
    var int0 = 0;
    var int1 = 0;
    var string0 = "Burthorpe";
    [int1, int1, int0] = DATE_RUNEDAY_TODATE(DATE_RUNEDAY());
    IF_SETTEXT("Meet Count Check!", comp(1795, 6));  // cs_week_2016_seasonal:meet_count_check_title
    IF_SETTEXT(`Count Check has recently appeared in ${string0} and he's hosting Customer Service Week ${inttostring(int0, 10)}! He's got a bunch of rewards and information for you, so go visit him!`, comp(1795, 23));  // cs_week_2016_seasonal:meet_count_check_text
    IF_SETTEXT("Count Check's Account Check!", comp(1795, 24));  // cs_week_2016_seasonal:account_check_title
    IF_SETTEXT("Count Check is great at checking accounts. He'll tell you all about your account security. If you've got a secure enough account, he'll even give you a reward for it! Check him out!", comp(1795, 25));  // cs_week_2016_seasonal:account_check_text
    IF_SETTEXT("The Drop!", comp(1795, 26));  // cs_week_2016_seasonal:the_drop_title
    IF_SETTEXT("The reappearance of Count Check has also brought back The Drop! Compete against other players for a title and XP lamp rewards.<br>If you complete The Drop and get every question correct, you'll be entered into a raffle too!", comp(1795, 27));  // cs_week_2016_seasonal:the_drop_text
    IF_SETTEXT("Customer Service Clue Scrolls!", comp(1795, 28));  // cs_week_2016_seasonal:cs_clues_title
    if ((MAP_MEMBERS() == 1)) {
        IF_SETTEXT("Count Check also has another trick up his sleeve: clue scrolls! Every day during Customer Service Week, you'll be able to ask him for a special Customer Service clue scroll, which will reward you with TWO caskets instead of one! However, one of these caskets is a little bit more secure than the other, so you'll need an Authenticator active AND a bank PIN in order to open it.", comp(1795, 29));  // cs_week_2016_seasonal:cs_clues_text
    } else {
        IF_SETTEXT("Count Check also has another trick up his sleeve: clue scrolls for free players! Every day during Customer Service Week, you'll be able to ask him for a special Customer Service clue scroll, which will reward you with TWO caskets instead of one! However, one of these caskets is a little bit more secure than the other, so you'll need an Authenticator active AND a bank PIN in order to open it.", comp(1795, 29));  // cs_week_2016_seasonal:cs_clues_text
    };
    return;
}