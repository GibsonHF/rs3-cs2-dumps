//
function script16667(): void {
    script16674();
    CC_DELETEALL(comp(1253, 3));
    script16668();
    script16669();
    var int0 = 0;
    script14391(comp(1253, 3), 5, 0, 0, 1, 1, 0, 0, 1, 1);
    script9728(comp(1253, 3), 3, int0++, 0, 5, 0, -45, 1, 1, 100, 100, 0, 0);
    CC_SETNPCHEAD(25962 as npc);
    CC_SETMODELANIM(9804 as seq);
    CC_SETMODELANGLE(0, 0, 1984, 200, 0, 800);
    var int1 = 19624;
    CC_SETMODELLIGHTING(200, 256, 0, struct_getparam(int1, 8009), struct_getparam(int1, 8010), struct_getparam(int1, 8011), struct_getparam(int1, 8012), struct_getparam(int1, 8013), struct_getparam(int1, 8014), struct_getparam(int1, 8015));
    CC_SETHIDE(script6430(script16682()));
    script9728(comp(1253, 3), 3, int0++, 0, 5, 200, 250, 0, 0, 100, 100, 0, 0);
    CC_SETMODEL(68357 as model);
    CC_SETMODELANIM(32420 as seq);
    CC_SETMODELANGLE(0, 0, 50, -100, 0, 500);
    CC_SETHIDE(script16682());
    script9728(comp(1253, 3), 3, int0++, 0, 5, 200, 250, 0, 0, 100, 100, 0, 0);
    CC_SETNPCMODEL(25962 as npc);
    CC_SETMODELANIM(32418 as seq);
    CC_SETMODELANGLE(0, 0, 50, -100, 0, 500);
    CC_SETHIDE(script16682());
    script16671();
    script16673();
    script16672();
    return;
}