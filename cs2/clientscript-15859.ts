//
function script15859(): void {
    var int0 = script655(18);
    script10428(comp(858, 9), comp(858, 10), 10679 as cs2enum, 46, "Choose a channel", int0, 0);
    script15867(int0);
    IF_SETONVARTRANSMIT(callback(script15866, 9902, 1), comp(858, 13));
    script10428(56229914, 56229915, 1443, -1, "Choose a size", varbitplayer_49712, 0);
    script10428(56229941, 56229942, 11929, -1, "Choose your status", CHAT_GETFILTER_PRIVATE(), 0);
    script15863();
    IF_SETONVARCTRANSMIT(callback(script15862, 2834, 1), 56229921);
    script10428(56229945, 56229946, 8427, -1, "Choose a direction", varbitplayer_29940, 0);
    script10428(56229926, 56229927, 13293, -1, "Choose a mode", varbitclient_41275, 0);
    return;
}