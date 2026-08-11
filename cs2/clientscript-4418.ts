//[clientscript,clan_click_pm]
function script4418(): void {
    var string0 = REMOVETAGS(IF_GETTEXT(comp(1107, 39)));  // clan_info:planter_name
    if ((FRIEND_TEST(string0) == 0)) {
        printmessage(`Attempting to add ${string0} to your Friends List.`);
        FRIEND_ADD(string0);
    } else {
        printmessage(`You've already added ${string0} to your friends list.`);
    };
    return;
}