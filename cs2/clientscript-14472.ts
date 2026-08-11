//
function script14472(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(6499 as cs2enum);
    var int2 = 0;
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    while ((int0 <= int1)) {
        int2 = script14447(int0);
        int3 = enum_getvalue(0, 9, 6499 as cs2enum, int0);
        int4 = enum_getvalue(0, 9, 6500 as cs2enum, int0);
        if (((int3 != comp(-1, 65535)) && (int4 != comp(-1, 65535)))) {
            script10416(int3, int4, "", "", "", int2);
        };
        int0 = (int0 + 1);
    };
    script14473(8682);
    script14473(8683);
    script14473(8684);
    script14473(8685);
    script14473(8686);
    script14473(8687);
    script14473(8688);
    script14473(8689);
    script14473(9026);
    if ((varbitplayer_41613 == 0)) {
        IF_SETTEXT("Seed collector<col=ff0000> - Purchased at the Ardougne Farmers' Market</col>", comp(650, 581));  // 6awe3_seedicide:seed_collector_title
        IF_SETHIDE(true, comp(650, 580));  // 6awe3_seedicide:seed_pickup_toggle_text
    } else {
        IF_SETTEXT("Seed collector", comp(650, 581));  // 6awe3_seedicide:seed_collector_title
        IF_SETHIDE(false, comp(650, 580));  // 6awe3_seedicide:seed_pickup_toggle_text
    };
    script14139(42598979, 42599128, "", "", "", varbitplayer_41615, script6427(varbitplayer_41613));
    return;
}