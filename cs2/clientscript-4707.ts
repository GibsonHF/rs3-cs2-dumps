//
function script4707(): void {
    IF_SETTEXT(varclient_2743, comp(985, 87));  // castlewars_game_end:win_lose
    IF_SETTEXT(inttostring(varclient_2732, 10), comp(985, 5));  // castlewars_game_end:red_flags
    IF_SETTEXT(inttostring(varclient_2733, 10), comp(985, 7));  // castlewars_game_end:blue_flags
    IF_SETTEXT(inttostring(varclient_2734, 10), comp(985, 17));  // castlewars_game_end:red_total_kills
    IF_SETTEXT(inttostring(varclient_2735, 10), comp(985, 18));  // castlewars_game_end:blue_total_kills
    IF_SETTEXT(varclient_2744, 64552979);
    IF_SETTEXT(varclient_2745, 64552980);
    IF_SETTEXT(inttostring(varclient_2736, 10), comp(985, 31));  // castlewars_game_end:my_winnings_gold
    IF_SETTEXT(inttostring(varclient_2737, 10), comp(985, 33));  // castlewars_game_end:my_winnings_silver
    IF_SETTEXT(inttostring(varclient_2738, 10), comp(985, 35));  // castlewars_game_end:my_total_tickets
    var int0 = STRINGWIDTH(IF_GETTEXT(comp(985, 35)), IF_GETFONTMETRICS(comp(985, 35)));  // castlewars_game_end:my_total_tickets
    IF_SETSIZE(int0, IF_GETHEIGHT(comp(985, 35)), 0, 0, comp(985, 35));  // castlewars_game_end:my_total_tickets
    var int1 = ((IF_GETX(comp(985, 35)) + IF_GETWIDTH(comp(985, 35))) + 5);  // castlewars_game_end:my_total_tickets
    IF_SETPOSITION(int1, IF_GETHEIGHT(comp(985, 35) /*castlewars_game_end:my_total_tickets*/), 0, 0, comp(985, 36) /*castlewars_game_end:title_total_gold_tickets*/);
    var int2 = (IF_GETX(comp(985, 36)) + IF_GETWIDTH(comp(985, 36)));  // castlewars_game_end:title_total_gold_tickets
    IF_SETPOSITION(int2, IF_GETHEIGHT(comp(985, 36) /*castlewars_game_end:title_total_gold_tickets*/), 0, 0, comp(985, 37) /*castlewars_game_end:my_total_silver_tickets*/);
    IF_SETTEXT(inttostring(varclient_2739, 10), comp(985, 37));  // castlewars_game_end:my_total_silver_tickets
    int0 = STRINGWIDTH(IF_GETTEXT(comp(985, 37)), IF_GETFONTMETRICS(comp(985, 37)));  // castlewars_game_end:my_total_silver_tickets
    IF_SETSIZE(int0, IF_GETHEIGHT(comp(985, 36) /*castlewars_game_end:title_total_gold_tickets*/), 0, 0, comp(985, 37) /*castlewars_game_end:my_total_silver_tickets*/);
    int1 = ((IF_GETX(comp(985, 37)) + IF_GETWIDTH(comp(985, 37))) + 5);  // castlewars_game_end:my_total_silver_tickets
    IF_SETPOSITION(int1, IF_GETHEIGHT(comp(985, 37) /*castlewars_game_end:my_total_silver_tickets*/), 0, 0, comp(985, 38) /*castlewars_game_end:title_total_silver_tickets*/);
    IF_SETTEXT(inttostring(varclient_2740, 10), comp(985, 39));  // castlewars_game_end:my_kills
    IF_SETTEXT(inttostring(varclient_2741, 10), comp(985, 40));  // castlewars_game_end:my_flag_captures
    IF_SETTEXT(inttostring(varclient_2742, 10), comp(985, 41));  // castlewars_game_end:total_games
    return;
}