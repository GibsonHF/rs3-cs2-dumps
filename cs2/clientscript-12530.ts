//
function script12530(): void {
    var string0 = "";
    var string1 = "";
    var int0 = 0;
    switch (varplayer_6269) {
        case 1: {
            string0 = "Dwarven Technology";
            string1 = "Dwarven Currency:";
            int0 = varbitplayer_31354;
            break;
        }
        case 2: {
            string0 = "Goblin Technology";
            string1 = "Goblin Currency:";
            int0 = varbitplayer_31355;
            break;
        }
    };
    script9554(115474455, 115474467, 115474456, string0, 21218);
    IF_SETTEXT(string1, comp(1762, 20));  // invent_techtree:faction_currency_name
    IF_SETSIZE(STRINGWIDTH(string1, IF_GETFONTMETRICS(comp(1762, 20))), IF_GETHEIGHT(comp(1762, 20)), 0, 0, comp(1762, 20));  // invent_techtree:faction_currency_name
    IF_SETTEXT(inttostring(int0, 10), comp(1762, 21));  // invent_techtree:faction_currency
    var int1 = ((IF_GETX(comp(1762, 20)) + IF_GETWIDTH(comp(1762, 20))) + 5);  // invent_techtree:faction_currency_name
    IF_SETPOSITION(int1, IF_GETY(comp(1762, 21)), 0, 0, comp(1762, 21));  // invent_techtree:faction_currency
    IF_SETONVARTRANSMIT(callback(script12531, 6268, 1), comp(1762, 21));  // invent_techtree:faction_currency
    IF_SETSIZE(STRINGWIDTH(IF_GETTEXT(comp(1762, 33)), IF_GETFONTMETRICS(comp(1762, 33))), IF_GETHEIGHT(comp(1762, 33)), 0, 0, comp(1762, 33));  // invent_techtree:price_text
    int1 = ((IF_GETX(comp(1762, 33)) + IF_GETWIDTH(comp(1762, 33))) + 5);  // invent_techtree:price_text
    IF_SETPOSITION(int1, IF_GETY(comp(1762, 34)), 0, 0, comp(1762, 34));  // invent_techtree:blueprint_price
    if ((varplayer_6269 == 2)) {
        IF_SETPOSITION(128, IF_GETY(comp(1762, 41)), 0, 0, comp(1762, 41));  // invent_techtree:sixth_node_btn_layer
        IF_SETPOSITION(224, IF_GETY(comp(1762, 42)), 0, 0, comp(1762, 42));  // invent_techtree:seventh_node_btn_layer
    };
    return;
}