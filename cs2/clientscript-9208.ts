//
function script9208(): void {
    var string0 = "";
    var string1 = "";
    if ((varclient_3783 == 0)) {
        [string0, string1] = FRIEND_GETNAME(varclient_3784);
        FRIEND_SETNOTES(string0, IF_GETTEXT(comp(451, 6)));  // friends_edit_note:input_text
    } else {
        [string0, string1] = IGNORE_GETNAME(varclient_3784);
        IGNORE_SETNOTES(string0, IF_GETTEXT(comp(451, 6)));  // friends_edit_note:input_text
    };
    script8841(35, 0);
    IF_CLOSE();
    return;
}