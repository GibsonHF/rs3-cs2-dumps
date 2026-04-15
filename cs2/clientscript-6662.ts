//
function script6662(): void {
    var int0 = -1 as model;
    var int1 = -1 as model;
    var int2 = -1 as model;
    var int3 = -1 as model;
    var int4 = -1 as model;
    var int5 = -1 as model;
    var int6 = -1 as model;
    var int7 = -1 as model;
    var int8 = -1 as model;
    if ((script6663(varbitplayer_8725) != -1 as struct)) {
        int0 = struct_getparam(script6663(varbitplayer_8725), 2583);
    };
    if ((script6663(varbitplayer_8726) != -1 as struct)) {
        int1 = struct_getparam(script6663(varbitplayer_8726), 2584);
    };
    if ((script6663(varbitplayer_8727) != -1 as struct)) {
        int2 = struct_getparam(script6663(varbitplayer_8727), 2591);
    };
    if ((script6663(varbitplayer_8728) != -1 as struct)) {
        int3 = struct_getparam(script6663(varbitplayer_8728), 2585);
    };
    if ((script6663(varbitplayer_8730) != -1 as struct)) {
        int4 = struct_getparam(script6663(varbitplayer_8730), 2586);
    };
    if ((script6663(varbitplayer_8729) != -1 as struct)) {
        int5 = struct_getparam(script6663(varbitplayer_8729), 2587);
    };
    if ((script6663(varbitplayer_8731) != -1 as struct)) {
        int6 = struct_getparam(script6663(varbitplayer_8731), 2588);
    };
    if ((script6663(varbitplayer_8733) != -1 as struct)) {
        int7 = struct_getparam(script6663(varbitplayer_8733), 2589);
    };
    if ((script6663(varbitplayer_8732) != -1 as struct)) {
        int8 = struct_getparam(script6663(varbitplayer_8732), 2590);
    };
    IF_NPC_SETCUSTOMBODYMODEL(1, int0, 86573061);
    IF_NPC_SETCUSTOMBODYMODEL(2, int1, 86573061);
    IF_NPC_SETCUSTOMBODYMODEL(3, int2, 86573061);
    IF_NPC_SETCUSTOMBODYMODEL(4, int3, 86573061);
    IF_NPC_SETCUSTOMBODYMODEL(5, int6, 86573061);
    IF_NPC_SETCUSTOMBODYMODEL(6, int4, 86573061);
    IF_NPC_SETCUSTOMBODYMODEL(7, int7, 86573061);
    IF_NPC_SETCUSTOMBODYMODEL(8, int5, 86573061);
    IF_NPC_SETCUSTOMBODYMODEL(9, int8, 86573061);
    IF_SETMODELANGLE(IF_GETMODELXOF(comp(1321, 5)), IF_GETMODELYOF(comp(1321, 5)), 100, IF_GETMODELANGLE_Y(comp(1321, 5)), IF_GETMODELANGLE_Z(comp(1321, 5)), 475, comp(1321, 5));
    return;
}