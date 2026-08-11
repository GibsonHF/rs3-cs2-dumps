//
function script1797(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    while ((int2 < 10)) {
        switch (int2) {
            case 0: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 25));  // clanwars_setup:25kills_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 26));  // clanwars_setup:25kills_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 27));  // clanwars_setup:25kills_button
                break;
            }
            case 1: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 28));  // clanwars_setup:50kills_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 29));  // clanwars_setup:50kills_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 30));  // clanwars_setup:50kills_button
                break;
            }
            case 2: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 31));  // clanwars_setup:100kills_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 32));  // clanwars_setup:100kills_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 33));  // clanwars_setup:100kills_button
                break;
            }
            case 3: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 34));  // clanwars_setup:200kills_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 35));  // clanwars_setup:200kills_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 36));  // clanwars_setup:200kills_button
                break;
            }
            case 4: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 37));  // clanwars_setup:400kills_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 38));  // clanwars_setup:400kills_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 39));  // clanwars_setup:400kills_button
                break;
            }
            case 5: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 40));  // clanwars_setup:750kills_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 41));  // clanwars_setup:750kills_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 42));  // clanwars_setup:750kills_button
                break;
            }
            case 6: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 43));  // clanwars_setup:1000kills_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 44));  // clanwars_setup:1000kills_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 45));  // clanwars_setup:1000kills_button
                break;
            }
            case 7: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 46));  // clanwars_setup:2500kills_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 47));  // clanwars_setup:2500kills_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 48));  // clanwars_setup:2500kills_button
                break;
            }
            case 8: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 49));  // clanwars_setup:5000kills_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 50));  // clanwars_setup:5000kills_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 51));  // clanwars_setup:5000kills_button
                break;
            }
            case 9: {
                IF_SETPOSITION(25, int3, 0, 0, comp(791, 52));  // clanwars_setup:10000kills_text
                IF_SETPOSITION(4, int3, 0, 0, comp(791, 53));  // clanwars_setup:10000kills_indicator
                IF_SETPOSITION(0, int3, 0, 0, comp(791, 54));  // clanwars_setup:10000kills_button
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