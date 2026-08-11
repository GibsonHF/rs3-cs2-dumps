//
function script7289(): void {
    IF_SETGRAPHIC(-1 as graphic, comp(916, 166));  // pop_ship:hover_crew_icon
    IF_SETTEXT("", comp(916, 167));  // pop_ship:hover_crew_name
    IF_SETTEXT("", comp(916, 176));  // pop_ship:hover_crew_speed
    IF_SETTEXT("", comp(916, 173));  // pop_ship:hover_crew_graft
    IF_SETTEXT("", comp(916, 174));  // pop_ship:hover_crew_combat
    IF_SETTEXT("", comp(916, 175));  // pop_ship:hover_crew_seafaring
    IF_SETTEXT("", comp(916, 168));  // pop_ship:hover_crew_level
    IF_SETTEXT("", comp(916, 177));  // pop_ship:hover_crew_trait
    IF_SETHIDE(true, comp(916, 165));  // pop_ship:crew_compare_hover
    if ((script6431() == 1)) {
        IF_SETHIDE(false, comp(916, 163));  // pop_ship:hover_crew_dragable_hint
    };
    return;
}