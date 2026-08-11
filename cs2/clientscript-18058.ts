//
function script18058(): void {
    var int0 = script17896();
    var int1 = 0;
    var int2 = -1;
    var int3 = 0;
    var int4 = 7989;
    int1 = (int1 + 1);
    while ((int1 <= int0)) {
        int2 = script17897(int1);
        if (((int2 != -1) && (CC_FINDBYCATEGORY(comp(1226, 34), (int1 + 40), 0) == 1))) {  // bp3_missions_tab:mission_list_content_layer
            int3 = cc_getparam(5165);
            if ((int3 == 0)) {
                int4 = 7992;
            } else {
                int4 = 7991;
            };
            script10485((int1 + 40), 3, 25, 20, 0, 0, 20, 20, 0, 0, int4, inttostring(int3, 10));
            cc_setparam(5165, 1);
        };
    };
    return;
}