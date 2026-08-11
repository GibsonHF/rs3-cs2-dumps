//
function script9258(int0: number, string0: string, string1: string, string2: string): void {
    if ((int0 == -1 as obj)) {
        IF_RESUME_PAUSEBUTTON(43974696);
        IF_SETHIDE(true, comp(671, 17));  // lore_bank:confirm_drop_item_layer
        return;
    };
    IF_SETHIDE(false, comp(671, 17));  // lore_bank:confirm_drop_item_layer
    IF_SETOBJECT_NONUM(int0, 100, comp(671, 4));  // lore_bank:confirm_drop_graphic
    IF_SETTEXT(string1, comp(671, 2));  // lore_bank:confirm_drop_text
    IF_SETTEXT(string2, comp(671, 48));  // lore_bank:positive_button_text
    return;
}