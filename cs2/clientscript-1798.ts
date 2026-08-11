//
function script1798(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    while ((int2 < 12)) {
        switch (int2) {
            case 0: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 59));  // clanwars_setup:5mins_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 60));  // clanwars_setup:5mins_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 61));  // clanwars_setup:5mins_button
                break;
            }
            case 1: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 62));  // clanwars_setup:10mins_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 63));  // clanwars_setup:10mins_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 64));  // clanwars_setup:10mins_button
                break;
            }
            case 2: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 65));  // clanwars_setup:30mins_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 66));  // clanwars_setup:30mins_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 67));  // clanwars_setup:30mins_button
                break;
            }
            case 3: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 68));  // clanwars_setup:1hour_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 69));  // clanwars_setup:1hour_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 70));  // clanwars_setup:1hour_button
                break;
            }
            case 4: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 71));  // clanwars_setup:1hour30_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 72));  // clanwars_setup:1hour30_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 73));  // clanwars_setup:1hour30_button
                break;
            }
            case 5: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 74));  // clanwars_setup:2hours_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 75));  // clanwars_setup:2hours_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 76));  // clanwars_setup:2hours_button
                break;
            }
            case 6: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 77));  // clanwars_setup:2hours30_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 78));  // clanwars_setup:2hours30_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 79));  // clanwars_setup:2hours30_button
                break;
            }
            case 7: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 80));  // clanwars_setup:3hours_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 81));  // clanwars_setup:3hours_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 82));  // clanwars_setup:3hours_button
                break;
            }
            case 8: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 83));  // clanwars_setup:4hours_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 84));  // clanwars_setup:4hours_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 85));  // clanwars_setup:4hours_button
                break;
            }
            case 9: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 86));  // clanwars_setup:5hours_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 87));  // clanwars_setup:5hours_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 88));  // clanwars_setup:5hours_button
                break;
            }
            case 10: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 89));  // clanwars_setup:6hours_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 90));  // clanwars_setup:6hours_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 91));  // clanwars_setup:6hours_button
                break;
            }
            case 11: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 92));  // clanwars_setup:8hours_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 93));  // clanwars_setup:8hours_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 94));  // clanwars_setup:8hours_button
                break;
            }
        };
        int3 = (int3 + 17);
        int2 = (int2 + 1);
    };
    IF_SETSCROLLSIZE(0, int3, int0);
    IF_SETSCROLLPOS(0, 0, int0);
    script31(int1, int0, 792, 789, 790, 791, 773, 788);
    return;
}