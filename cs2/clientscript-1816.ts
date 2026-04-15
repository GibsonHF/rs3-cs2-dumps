//[clientscript,clanwars_end_setup]
function script1816(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component): void {
    switch (varclient_268) {
        case 4: {
            script1817(int0, int1, int2, int3, int4, int5);
            IF_SETTEXT("Your clan knocked the enemy right out of the arena.", int2);
            break;
        }
        case 5: {
            script1817(int0, int1, int2, int3, int4, int5);
            IF_SETTEXT("Your clan reached the target kill-count.", int2);
            break;
        }
        case 6: {
            script1817(int0, int1, int2, int3, int4, int5);
            IF_SETTEXT("Your clan had the highest kill-count when the time expired.", int2);
            break;
        }
        case 7: {
            script1817(int0, int1, int2, int3, int4, int5);
            IF_SETTEXT("Your clan had the most survivors when the time expired.", int2);
            break;
        }
        case 8: {
            script1818(int0, int1, int2, int3, int4, int5);
            IF_SETTEXT("Your clan was knocked right out of the arena.", int2);
            break;
        }
        case 9: {
            script1818(int0, int1, int2, int3, int4, int5);
            IF_SETTEXT("Your enemy reached the target kill-count.", int2);
            break;
        }
        case 10: {
            script1818(int0, int1, int2, int3, int4, int5);
            IF_SETTEXT("Your enemy had the highest kill-count when the time expired.", int2);
            break;
        }
        case 11: {
            script1818(int0, int1, int2, int3, int4, int5);
            IF_SETTEXT("Your enemy had the most survivors when the time expired.", int2);
            break;
        }
        case 1: {
            script1819(int0, int1, int2, int3, int4, int5);
            IF_SETTEXT("The match was aborted due to a lack of fighters.", int2);
            break;
        }
        case 2: {
            script1819(int0, int1, int2, int3, int4, int5);
            IF_SETTEXT("Your kill-counts were equal.", int2);
            break;
        }
        case 3: {
            script1819(int0, int1, int2, int3, int4, int5);
            IF_SETTEXT("You had equal numbers of survivors.", int2);
            break;
        }
        default: {
            IF_SETHIDE(true, int0);
            IF_SETHIDE(true, int1);
            IF_SETHIDE(true, int2);
            IF_SETHIDE(true, int3);
            IF_SETHIDE(true, int4);
            IF_SETHIDE(true, int5);
            break;
        }
    };
    return;
}