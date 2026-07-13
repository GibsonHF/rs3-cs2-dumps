//
function script20835(int0: number): void {
    script9236(99483666, 99483667, -1, 93, 0, -1, -1, 0, "Deposit");
    var int1 = INV_SIZE(1004 as inv);
    var int2 = (int1 - INV_FREESPACE(1004 as inv));
    IF_SETTEXT(`Storage Capacity: ${inttostring(int2, 10)} / ${inttostring(int1, 10)}`, comp(1518, 27));
    return;
}