//
function script16668(): void {
    script14391(comp(1253, 3), 1, 10, -20, 0, 1, 105, 354, 0, 0);
    CC_SETONVARTRANSMIT(callback(script16675, 10478, 1));
    script7920(82116611, 1, 0, 0, 1, 0, 0, 1, 1, 105, 354, 0, 0, 19652);
    script15939(82116611, 1, 1, 0, 1, 0, 0, 1, 2, 0, (30 + SCALE(script16647(), 500, 300)), 1, 0);
    script7920(82116611, 1, 2, 1, 1, 0, 0, 1, 2, 105, 354, 0, 0, 19728);
    script10507(82116611, 1, 3, 0, 1, 0, 9, 1, 1, 35, 35, 0, 0, 4699, script16650());
    CC_SETTEXTFONT(57);
    CC_SETCOLOUR(16777215);
    if (((CC_FIND(82116611, 1) == 1) && (CC_FINDBYCATEGORY[1](comp(1253, 3), 1, 3) == 1))) {
        script16665("Opening chests will fill the bar, the more chests opened the higher chance of getting a Plague Chest.", 82116611, CC_GETID[1]());
    };
    return;
}