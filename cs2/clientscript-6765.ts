//
function script6765(): void {
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    var int0 = 0;
    while ((int0 < 8)) {
        CC_CREATE(comp(1253, 556), 5, int0);  // wheel_of_fortune:fake_op
        int0 = (int0 + 1);
    };
    IF_SETONVARTRANSMIT(callback(script6775, 11462, 11462, 2), comp(631, 28));  // trh196_overlay:bonus_item_model_layer
    IF_SETONVARTRANSMIT(callback(script6773, 11464, 11465, 2), comp(631, 25));  // trh196_overlay:blackboard_item_list
    DB_LISTALL(162);
    var int1 = dbrow_findnext();
    var int2 = -1;
    var int3 = -1;
    while ((int1 != -1)) {
        if ((DB_GETFIELDCOUNT(int1, 663712) > 0)) {
            [int2, int3] = dbrow_getfield(int1, 663712, 0);
            if ((IF_FIND(int2) == 1)) {
                CC_SETONOP(callback(script6774, int1));
                CC_SETOP(1, "Examine");
                CC_SETOPBASE(`<col=43BCBC>${dbrow_getfield(int1, 663568, 0)}</col>`);
                CC_SETRETEX(0, 14513, int3);
                script6772(int2);
            };
        };
        int1 = dbrow_findnext();
    };
    IF_SETHIDE(true, comp(631, 29));  // trh196_overlay:skip_holder
    IF_SETHIDE(true, comp(631, 11));  // trh196_overlay:seasonal_oddments_skip_button
    IF_SETHIDE(true, comp(631, 69));  // trh196_overlay:seasonal_oddments_store_button
    script13310(41353235, 41353236, 61, (8 * 1000));
    script6783();
    IF_SETONTIMER(callback(script6784, 0, 0), comp(631, 0));  // trh196_overlay:splash_screen
    return;
}