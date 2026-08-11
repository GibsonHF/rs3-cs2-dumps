//
function script5555(int0: number, int1: number): void {
    if (((int0 == 0) && (int1 == 0))) {
        IF_SETTEXT("---", comp(662, 115));  // lore_stats_side:animal_time_left
        IF_SETTEXT("---", comp(662, 10));  // lore_stats_side:animal_fixed_time_left
        return;
    };
    if ((int1 == 0)) {
        IF_SETTEXT(`${inttostring(int0, 10)}:00`, comp(662, 115));  // lore_stats_side:animal_time_left
        IF_SETTEXT(`${inttostring(int0, 10)}:00`, comp(662, 10));  // lore_stats_side:animal_fixed_time_left
    } else {
        IF_SETTEXT(`${inttostring(int0, 10)}:30`, comp(662, 115));  // lore_stats_side:animal_time_left
        IF_SETTEXT(`${inttostring(int0, 10)}:30`, comp(662, 10));  // lore_stats_side:animal_fixed_time_left
    };
    return;
}