//
function script2220(): void {
    script1191(61014046, script42(varclient_1132), script734(varbitplayer_14974));
    script1191(61014047, script42(varclient_1134), script734(varbitplayer_14975));
    script1191(61014048, script42(varclient_1133), script734(varbitplayer_14976));
    IF_SETTEXT(inttostring(varclient_1126, 10), comp(931, 60));  // easter10_resourcegame:nuts_workers_text
    IF_SETTEXT(inttostring(varclient_1127, 10), comp(931, 56));  // easter10_resourcegame:choc_workers_text
    IF_SETTEXT(inttostring(varclient_1128, 10), comp(931, 52));  // easter10_resourcegame:fruit_workers_text
    IF_SETTEXT(inttostring(varclient_1129, 10), comp(931, 40));  // easter10_resourcegame:fc_workers_text
    IF_SETTEXT(inttostring(varclient_1131, 10), comp(931, 48));  // easter10_resourcegame:tegg_workers_text
    IF_SETTEXT(inttostring(varclient_1130, 10), comp(931, 44));  // easter10_resourcegame:negg_workers_text
    IF_SETTEXT(`Total Workers: ${inttostring(varclient_1135, 10)}`, comp(931, 35));  // easter10_resourcegame:totalworkers_text
    IF_SETTEXT(`${inttostring(varplayer_2961, 10)}/15`, comp(931, 24));  // easter10_resourcegame:nut_stock_text
    IF_SETTEXT(`${inttostring(varplayer_2962, 10)}/15`, comp(931, 26));  // easter10_resourcegame:fruit_stock_text
    IF_SETTEXT(`${inttostring(varplayer_2960, 10)}/15`, comp(931, 25));  // easter10_resourcegame:choc_stock_text
    IF_SETTEXT(`${inttostring(varplayer_2963, 10)}/7`, comp(931, 29));  // easter10_resourcegame:fc_stock_text
    IF_SETTEXT(`${inttostring(varplayer_2964, 10)}/7`, comp(931, 27));  // easter10_resourcegame:tegg_stock_text
    IF_SETTEXT(`${inttostring(varplayer_2965, 10)}/7`, comp(931, 28));  // easter10_resourcegame:negg_stock_text
    script2221();
    IF_SETTEXT(`Turn ${inttostring(varplayer_2948, 10)}/15`, comp(931, 33));  // easter10_resourcegame:turn_text
    return;
}