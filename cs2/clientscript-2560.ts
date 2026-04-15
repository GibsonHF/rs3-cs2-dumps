//
function script2560(int0: unknown_int): void {
    var string0 = "";
    var string1 = "";
    switch (int0) {
        case 0: {
            string0 = "Research or dismantle";
            string1 = "Research mode destroys the dropped item and grants appropriate bonus XP. Dismantle mode attempts to break down the item to base resources and sends them to your bank, but has a chance to fail.";
            break;
        }
        case 1: {
            string0 = "High alch mode";
            string1 = "In alch mode, any salvage that the spring cleaner activates on is automatically alched and converted into coins equal to what it would have high alched for. It does not require runes and rewards no XP.";
            break;
        }
        case 2: {
            string0 = "Disassembly Mode";
            string1 = "In disassembly mode, any salvage that the spring cleaner activates on is automatically disassembled. This does not cost any charges from the spring cleaner to do.";
            break;
        }
        case 3: {
            string0 = "Research 1";
            string1 = "Provides more bonus XP when breaking down an item.";
            break;
        }
        case 4: {
            string0 = "Research 2";
            string1 = "Provides more bonus XP when breaking down an item.";
            break;
        }
        case 5: {
            string0 = "Research 3";
            string1 = "Provides more bonus XP when breaking down an item.";
            break;
        }
        case 6: {
            string0 = "Efficiency 1";
            string1 = "Increases the breakdown percentage of the spring cleaner.";
            break;
        }
        case 7: {
            string0 = "Efficiency 2";
            string1 = "Increases the breakdown percentage of the spring cleaner.";
            break;
        }
        case 8: {
            string0 = "Efficiency 3";
            string1 = "Increases the breakdown percentage of the spring cleaner.";
            break;
        }
        case 9: {
            string0 = "Pocket version";
            string1 = "Allows you to put the spring cleaner in your pocket where it can be used from.";
            break;
        }
        case 10: {
            string0 = "Sentience";
            string1 = "Your spring cleaner becomes chatty.";
            break;
        }
        case 11: {
            string0 = "Noted Items";
            string1 = "The spring cleaner can 'Research' and 'Dismantle' noted items.";
            break;
        }
    };
    IF_SETTEXT(string0, comp(1615, 404));
    IF_SETTEXT(string1, comp(1615, 405));
    return;
}