//
function script19454(int0: number, int1: number, int2: number, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string): void {
    IF_SETTEXT(string0, comp(1302, 73));  // group_ironman_parent:entry_group_name
    IF_SETTEXT(string1, comp(1302, 74));  // group_ironman_parent:entry_group_leader
    IF_SETTEXT(string2, comp(1302, 75));  // group_ironman_parent:entry_group_type
    IF_SETTEXT(string3, comp(1302, 77));  // group_ironman_parent:entry_group_creation
    IF_SETTEXT(string4, comp(1302, 76));  // group_ironman_parent:entry_group_size
    IF_SETENABLED(int0, comp(1302, 59));  // group_ironman_parent:button_rename
    IF_SETTEXT(string5, comp(1302, 59));  // group_ironman_parent:button_rename
    IF_SETENABLED(int1, comp(1302, 61));  // group_ironman_parent:button_resign
    IF_SETTEXT(string6, comp(1302, 61));  // group_ironman_parent:button_resign
    IF_SETENABLED(int2, comp(1302, 60));  // group_ironman_parent:button_downgrade
    IF_SETTEXT(string7, comp(1302, 60));  // group_ironman_parent:button_downgrade
    return;
}