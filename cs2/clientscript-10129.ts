//
function script10129(): void {
    if ((varbitclient_23069 == 1)) {
        if ((IF_GETHIDE(comp(231, 16)) == false)) {
            IF_SETHIDE(true, comp(231, 3));
            script10158(1);
        } else {
            IF_SETHIDE(false, comp(231, 3));
            script10158(0);
        };
    } else {
        IF_SETHIDE(true, comp(231, 3));
        script10158(1);
    };
    script10126();
    return;
}