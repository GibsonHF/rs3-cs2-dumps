//
function script3672(): void {
    var string0 = enum_getvalue(0, 36, 3230 as cs2enum, varclient_1327);
    var string1 = enum_getvalue(0, 36, 3230, varclient_1326);
    var string2 = enum_getvalue(0, 36, 3231, varclient_1330);
    var string3 = `${inttostring(varclient_1325, 10)}%`;
    var int0 = enum_getvalue(0, 23, 3233, varclient_1328);
    var int1 = enum_getvalue(0, 23, 3233, varclient_1329);
    IF_SETTEXT(string0, comp(1004, 40));  // vkq2_chemistry:heat_value
    IF_SETCOLOUR(enum_getvalue(0, 0, 3234, varclient_1327), comp(1004, 40));  // vkq2_chemistry:heat_value
    IF_SETTEXT(string1, comp(1004, 39));  // vkq2_chemistry:power_value
    IF_SETCOLOUR(enum_getvalue(0, 0, 3234, varclient_1326), comp(1004, 39));  // vkq2_chemistry:power_value
    IF_SETGRAPHIC(int0, comp(1004, 36));  // vkq2_chemistry:needed_value
    IF_SETGRAPHIC(int1, comp(1004, 37));  // vkq2_chemistry:current_value
    IF_SETTEXT(string2, comp(1004, 38));  // vkq2_chemistry:balance_value
    IF_SETCOLOUR(enum_getvalue(0, 0, 3235, varclient_1330), comp(1004, 38));  // vkq2_chemistry:balance_value
    IF_SETTEXT(string3, comp(1004, 41));  // vkq2_chemistry:progress_value
    if ((varclient_1327 != 3)) {
        IF_SETHIDE(false, comp(1004, 34));  // vkq2_chemistry:heat_warning
    } else {
        IF_SETHIDE(true, comp(1004, 34));  // vkq2_chemistry:heat_warning
    };
    if ((varclient_1326 != 3)) {
        IF_SETHIDE(false, comp(1004, 31));  // vkq2_chemistry:power_warning
    } else {
        IF_SETHIDE(true, comp(1004, 31));  // vkq2_chemistry:power_warning
    };
    if ((varclient_1331 == 1)) {
        IF_SETHIDE(false, comp(1004, 33));  // vkq2_chemistry:chem_warning
    } else {
        IF_SETHIDE(true, comp(1004, 33));  // vkq2_chemistry:chem_warning
    };
    if ((varclient_1330 > 66)) {
        IF_SETHIDE(false, comp(1004, 32));  // vkq2_chemistry:balance_warning
    } else {
        IF_SETHIDE(true, comp(1004, 32));  // vkq2_chemistry:balance_warning
    };
    return;
}