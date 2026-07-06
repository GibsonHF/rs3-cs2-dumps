//
function script3451(int0: number, int1: number, int2: number, int3: number): void {
    script10014(35497, 28557, 28706);
    script10083(2, 0, int0, 99156064, 99156065, int1, int2, int3);
    if ((FULLSCREEN_MODECOUNT() > 0)) {
        script10014(35499, 28557, 28707);
        script10083(3, -1, int0, 99156074, 99156075, int1, int2, int3);
    } else {
        IF_SETHIDE(true, comp(1513, 19));
    };
    if ((varclient_178 < 0)) {
        varclient_178 = MAX(unk11118(), 0);
    };
    if ((varclient_178 >= FULLSCREEN_MODECOUNT())) {
        varclient_178 = 0;
    };
    script10428(99155989, 99155990, 13254, -1, "", varclient_178, 0);
    script7794(99155976, 21361);
    IF_SETHIDE(false, comp(1513, 32));
    IF_SETHIDE(false, comp(1513, 34));
    var int4 = (IF_GETWIDTH(comp(1513, 24)) / 7);
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 25));
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 27));
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 29));
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 31));
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 32));
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 34));
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 35));
    IF_SETPOSITION((int4 * 1), 0, 0, 0, comp(1513, 27));
    IF_SETPOSITION((int4 * 2), 0, 0, 0, comp(1513, 29));
    IF_SETPOSITION((int4 * 3), 0, 0, 0, comp(1513, 31));
    IF_SETPOSITION((int4 * 4), 0, 0, 0, comp(1513, 32));
    IF_SETPOSITION((int4 * 5), 0, 0, 0, comp(1513, 34));
    IF_SETPOSITION((int4 * 6), 0, 0, 0, comp(1513, 35));
    script10013(99156021, 99156022, 99156023, 99156024, 99156025, 99156026, 99156028);
    script10079(int3, 1, 99155994, 99156024, 99156025, 99156028, "MIN", -1);
    script10013(99156029, 99156030, 99156031, 99156032, 99156033, 99156034, 99156036);
    script10079(int3, 2, 99155996, 99156032, 99156033, 99156036, "LOW", -1);
    script10013(99156037, 99156038, 99156039, 99156040, 99156041, 99156042, 99156044);
    script10079(int3, 3, 99155998, 99156040, 99156041, 99156044, "MID", -1);
    script10013(99156045, 99156046, 99156047, 99156048, 99156049, 99156050, 99156052);
    script10079(int3, 4, 99156001, 99156048, 99156049, 99156052, "HIGH", -1);
    script10013(99156083, 99156084, 99156085, 99156086, 99156087, 99156088, 99156090);
    script10079(int3, 5, 99156082, 99156086, 99156087, 99156090, "ULTRA", -1);
    script10013(99156094, 99156095, 99156096, 99156097, 99156098, 99156099, 99156101);
    script10079(int3, 6, 99156093, 99156097, 99156098, 99156101, "ULTRA+", -1);
    script10013(99156053, 99156054, 99156055, 99156056, 99156057, 99156058, 99156060);
    script10079(int3, 0, 99156004, 99156056, 99156057, 99156060, "CUSTOM", -1);
    script7794(99155983, 21361);
    script13969(99155985, -1, 28554, "Re-run Auto Setup");
    IF_SETONCLICK(callback(script3383, int3), comp(1513, 17));
    return;
}