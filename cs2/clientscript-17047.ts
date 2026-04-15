//
function script17047(): void {
    var int0 = 0;
    CC_DELETEALL(comp(1253, 556));
    var int1 = -1;
    while ((++int1 <= 30)) {
        CC_CREATE(comp(1253, 556), 5, int1);
    };
    script19904();
    var int2 = script1626(1, varbitplayer_54973);
    var int3 = script1626(2, varbitplayer_54974);
    script11157(int2, int3, 0);
    script19909();
    script17048();
    script9525(comp(1082, 122), 3, -1);
    script9525(comp(1082, 103), 3, -1);
    if ((varplayer_10733 == -1 as obj)) {
        script16663(6974 as dbrow, script10513(), 1);
    } else {
        script16663(6974 as dbrow, varplayer_10733, varplayer_10734);
    };
    if ((int0 == 1)) {
        int2 = script1626(1, 0);
        IF_SETNPCMODEL(dbrow_getfield(int2, 983136, 0), comp(1082, 41));
        IF_SETMODELANGLE(0, 0, 0, 512, 0, 800, comp(1082, 41));
        IF_SETMODELANIM(35564 as seq, comp(1082, 41));
        IF_SETNPCMODEL(13091 as npc, comp(1082, 40));
        IF_SETMODELANGLE(0, 0, 0, 512, 0, 800, comp(1082, 40));
        IF_SETMODELANIM(35566 as seq, comp(1082, 40));
        IF_SETONTIMER(callback(script11709, 100, 70909989), comp(1082, 37));
    };
    script19028();
    if ((script20104() == 0)) {
        IF_SETHIDE(true, comp(1082, 44));
        IF_SETHIDE(false, comp(1082, 45));
    };
    if ((IF_GETHIDE(comp(1082, 35)) == false)) {
        IF_SETHIDE(true, comp(1082, 44));
        IF_SETHIDE(true, comp(1082, 45));
    };
    return;
}