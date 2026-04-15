//[clientscript,snapshot_ignore_yes]
function script222(): void {
    if ((FRIEND_TEST(varclient_2578) == 1)) {
        MES_TYPED(26, 0, "Sorry, you cannot ignore players in your Friends List.");
    } else {
        IGNORE_ADD_TEMP(varclient_2578);
        MES_TYPED(26, 0, `You are ignoring ${varclient_2578} until you log out.`);
    };
    varclient_11 = false;
    return;
}