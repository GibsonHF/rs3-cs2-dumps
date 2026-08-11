//
function script16614(): void {
    CC_DELETEALL(comp(1253, 3));  // wheel_of_fortune:background_holder
    IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
    IF_SETGRAPHIC(struct_getparam(46119, 8206), comp(1253, 5));  // wheel_of_fortune:background
    IF_SETPOSITION(126, 60, 0, 0, comp(1253, 32));  // wheel_of_fortune:wheel_spin_button_layer_1
    IF_SETSIZE(200, 150, 0, 0, comp(1253, 32));  // wheel_of_fortune:wheel_spin_button_layer_1
    script16615();
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script16613();
    stack(749568);
    stack(int0);
    DB_FIND(0);
    var int2 = dbrow_findnext();
    if ((int2 == -1)) {
        script12478(`Unable to specifiy dbrow from modifier for current: ${inttostring(int0, 10)}`);
        int2 = 6065;
    };
    script16616(int2);
    stack(749568);
    stack(int1);
    DB_FIND(0);
    int2 = dbrow_findnext();
    if ((int2 == -1)) {
        script12478(`Unable to specifiy dbrow from modifier for next: ${inttostring(int0, 10)}`);
        int2 = 6065;
    };
    script16617();
    if (((varclient_4752 > script16626()) && (varclient_4752 >= 0))) {
        script16618(int2);
    };
    return;
}