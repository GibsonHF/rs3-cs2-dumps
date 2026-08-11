//
function script4605(): void {
    var int0 = script4606();
    IF_SETPOSITION(0, 95, 1, 1, comp(1802, 13));  // timed_event:progress_layer
    IF_SETHIDE(false, comp(1802, 31));  // timed_event:event16_progress_layer
    if ((int0 < 4)) {
        IF_SETHIDE(false, comp(1802, 38));  // timed_event:event16_phase_4_fade
        IF_SETHIDE(false, comp(1802, 33));  // timed_event:event16_phase_4_locked
    } else {
        IF_SETHIDE(true, comp(1802, 38));  // timed_event:event16_phase_4_fade
        IF_SETHIDE(true, comp(1802, 33));  // timed_event:event16_phase_4_locked
    };
    if ((int0 < 3)) {
        IF_SETHIDE(false, comp(1802, 45));  // timed_event:event16_phase_3_fade
        IF_SETHIDE(false, comp(1802, 40));  // timed_event:event16_phase_3_locked
    } else {
        IF_SETHIDE(true, comp(1802, 45));  // timed_event:event16_phase_3_fade
        IF_SETHIDE(true, comp(1802, 40));  // timed_event:event16_phase_3_locked
    };
    if ((int0 < 2)) {
        IF_SETHIDE(false, comp(1802, 51));  // timed_event:event16_phase_2_fade
        IF_SETHIDE(false, comp(1802, 47));  // timed_event:event16_phase_2_locked
    } else {
        IF_SETHIDE(true, comp(1802, 51));  // timed_event:event16_phase_2_fade
        IF_SETHIDE(true, comp(1802, 47));  // timed_event:event16_phase_2_locked
    };
    script4607();
    return;
}