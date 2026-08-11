//
function script12932(int0: number): void {
    IF_SETHIDE(true, comp(1809, 1));  // event_overview:event_tab_2
    IF_SETHIDE(true, comp(1809, 2));  // event_overview:event_tab_3
    IF_SETHIDE(true, comp(1809, 3));  // event_overview:event_tab_4
    IF_SETHIDE(true, comp(1809, 4));  // event_overview:event_tab_5
    switch (int0) {
        case 118554630: {
            IF_SETHIDE(false, comp(1809, 1));  // event_overview:event_tab_2
            break;
        }
        case 118554631: {
            IF_SETHIDE(false, comp(1809, 2));  // event_overview:event_tab_3
            break;
        }
        case 118554636: {
            IF_SETHIDE(false, comp(1809, 3));  // event_overview:event_tab_4
            break;
        }
        case 118554641: {
            IF_SETHIDE(false, comp(1809, 4));  // event_overview:event_tab_5
            break;
        }
    };
    return;
}