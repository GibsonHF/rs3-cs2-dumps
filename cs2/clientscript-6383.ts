//
function script6383(): void {
    if ((IF_GETHIDE(comp(241, 5)) == false)) {  // sliske1_underworld:sliske1_underworld_pg1
        script6980();
        IF_SETHIDE(true, comp(241, 5));  // sliske1_underworld:sliske1_underworld_pg1
        IF_SETHIDE(true, comp(241, 6));  // sliske1_underworld:sliske1_underworld_pg2
        IF_SETHIDE(false, comp(241, 7));  // sliske1_underworld:sliske1_underworld_pg3
        IF_SETHIDE(false, comp(241, 8));  // sliske1_underworld:sliske1_underworld_pg4
    } else if ((IF_GETHIDE(comp(241, 7)) == false)) {  // sliske1_underworld:sliske1_underworld_pg3
        script6980();
        IF_SETHIDE(true, comp(241, 7));  // sliske1_underworld:sliske1_underworld_pg3
        IF_SETHIDE(true, comp(241, 8));  // sliske1_underworld:sliske1_underworld_pg4
        IF_SETHIDE(false, comp(241, 9));  // sliske1_underworld:sliske1_underworld_pg5
        IF_SETHIDE(false, comp(241, 10));  // sliske1_underworld:sliske1_underworld_pg6
    } else if ((IF_GETHIDE(comp(241, 9)) == false)) {  // sliske1_underworld:sliske1_underworld_pg5
        script6980();
        IF_SETHIDE(true, comp(241, 9));  // sliske1_underworld:sliske1_underworld_pg5
        IF_SETHIDE(true, comp(241, 10));  // sliske1_underworld:sliske1_underworld_pg6
        IF_SETHIDE(false, comp(241, 11));  // sliske1_underworld:sliske1_underworld_pg7
        IF_SETHIDE(false, comp(241, 12));  // sliske1_underworld:sliske1_underworld_pg8
    } else if ((IF_GETHIDE(comp(241, 11)) == false)) {  // sliske1_underworld:sliske1_underworld_pg7
        script6980();
        IF_SETHIDE(true, comp(241, 11));  // sliske1_underworld:sliske1_underworld_pg7
        IF_SETHIDE(true, comp(241, 12));  // sliske1_underworld:sliske1_underworld_pg8
        IF_SETHIDE(false, comp(241, 13));  // sliske1_underworld:sliske1_underworld_pg9
    };
    return;
}