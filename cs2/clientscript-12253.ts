//
function script12253(): void {
    var int0 = comp(1724, 1);  // quest_nomel_memories:backgroundrect
    var int1 = IF_GETTRANS(int0);
    if ((int1 > 2)) {
        IF_SETTRANS((int1 - 2), int0);
    } else if ((int1 == 2)) {
        IF_SETTRANS(0, int0);
        IF_SETHIDE(false, comp(1724, 4));  // quest_nomel_memories:close_button
        IF_SETHIDE(false, comp(1724, 6));  // quest_nomel_memories:blockoutface
        IF_SETHIDE(false, comp(1724, 2));  // quest_nomel_memories:background_model
        IF_SETONTIMER(callback(script12255, 112984071), comp(1724, 7));  // quest_nomel_memories:memory_text1
        IF_SETONTIMER(callback(script12254, 112984070), comp(1724, 6));  // quest_nomel_memories:blockoutface
    };
    return;
}