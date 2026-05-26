//
function script2480(): void {
    var int0 = IF_GETHEIGHT(81723392);
    IF_SETSCROLLSIZE(0, 275, 81723393);
    script7791(81723394, 81723393);
    if ((int0 >= 275)) {
        IF_SETSIZE(0, 0, 1, 1, 81723393);
        IF_SETHIDE(1, 81723394);
    } else {
        IF_SETHIDE(0, 81723394);
        IF_SETSIZE(20, 0, 1, 1, 81723393);
    };
    return;
}