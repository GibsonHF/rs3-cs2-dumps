//
function script11915(int0: number, int1: number): void {
    if ((IF_GETHIDE(comp(662, 71)) == true)) {  // lore_stats_side:scroll_counter_holder_small
        return;
    };
    var int2 = 0;
    if ((CC_FIND(comp(662, 70), 8) == 1)) {  // lore_stats_side:lore_familiar_specbar_button
        int2 = PARAWIDTH(CC_GETTEXT(), 1000, CC_GETFONTMETRICS());
        if (((CC_GETX() + int2) >= (IF_GETX(IF_GETPARENTLAYER(comp(662, 123))) + IF_GETX(comp(662, 123))))) {  // lore_stats_side:scroll_counter_graphic_small
            CC_SETTEXT(inttostring(int0, 10));
        } else {
            CC_SETTEXT(`${inttostring(int0, 10)}/${inttostring(int1, 10)}`);
        };
    };
    return;
}