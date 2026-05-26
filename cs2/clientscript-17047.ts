//
function script17047(): void {
    var int0 = 0;
    CC_DELETEALL(82117164);
    var int1 = -1;
    while ((++int1 <= 30)) {
        CC_CREATE(82117164, 5, int1);
    };
    script19904();
    var int2 = script1626(1, varbitplayer_54973);
    var int3 = script1626(2, varbitplayer_54974);
    script11157(int2, int3, 0);
    script19909();
    script17048();
    script9525(70910074, 3, -1);
    script9525(70910055, 3, -1);
    if ((varplayer_10733 == -1 as obj)) {
        script16663(6974, script10513(), 1);
    } else {
        script16663(6974, varplayer_10733, varplayer_10734);
    };
    if ((int0 == 1)) {
        int2 = script1626(1, 0);
        IF_SETNPCMODEL(dbrow_getfield(int2, 983136, 0), 70909993);
        IF_SETMODELANGLE(0, 0, 0, 512, 0, 800, 70909993);
        IF_SETMODELANIM(35564, 70909993);
        IF_SETNPCMODEL(13091 as npc, 70909992);
        IF_SETMODELANGLE(0, 0, 0, 512, 0, 800, 70909992);
        IF_SETMODELANIM(35566, 70909992);
        IF_SETONTIMER(callback(script11709, 100, 70909989), 70909989);
    };
    script19028();
    if ((script20104() == 0)) {
        IF_SETHIDE(1, 70909996);
        IF_SETHIDE(0, 70909997);
    };
    if ((IF_GETHIDE(70909987) == 0)) {
        IF_SETHIDE(1, 70909996);
        IF_SETHIDE(1, 70909997);
    };
    return;
}