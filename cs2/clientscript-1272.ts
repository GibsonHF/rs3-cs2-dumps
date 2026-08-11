//
function script1272(int0: number): void {
    var string0 = IF_GETTEXT(comp(1465, 36));  // toplevel_v2_minimap:slayer_counter_background
    if ((strcmp("", string0) != 0)) {
        script8800(string0, int0, -1);
    } else {
        script8800("No information to display at this time.", int0, -1);
    };
    return;
}