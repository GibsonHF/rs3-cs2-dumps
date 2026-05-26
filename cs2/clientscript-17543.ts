//
function script17543(int0: number): void {
    var int1 = script18321(int0, 76742676);
    var int2 = script18321(int0, 76742677);
    var int3 = script18321(int0, 76742679);
    var int4 = script18321(int0, 76742678);
    IF_SETHIDE(true, int1);
    IF_SETHIDE(true, int2);
    IF_SETMODELZOOM(2000, int1);
    IF_SETMODELZOOM(2000, int2);
    IF_SETHIDE(true, int3);
    IF_SETHIDE(true, int4);
    IF_SETMODELANIM(-1 as seq, int3);
    IF_SETMODELANIM(-1 as seq, int4);
    IF_SETHIDE(true, script18321(int0, 76742673));
    IF_SETHIDE(true, script18321(int0, 76742668));
    IF_SETTRANS(255, script18321(int0, 76742680));
    IF_SETTRANS(255, script18321(int0, 76742665));
    IF_SETTRANS(255, script18321(int0, 76742681));
    IF_SETTRANS(255, script18321(int0, 76742683));
    IF_SETTRANS(255, script18321(int0, 76742682));
    IF_SETTRANS(255, script18321(int0, 76742661));
    IF_SETTRANS(255, script18321(int0, 76742670));
    IF_SETTRANS(255, script18321(int0, 76742686));
    IF_SETTRANS(255, script18321(int0, 76742663));
    IF_SETTRANS(255, script18321(int0, 76742664));
    IF_SETTRANS(255, script18321(int0, 76742662));
    IF_SETTRANS(255, script18321(int0, 76742687));
    IF_SETONTIMER(callback(script17544, int0, CLIENTCLOCK()), int0);
    return;
}