//
function script17303(): void {
    CC_DELETEALL(comp(1253, 556));
    var int0 = 0;
    while ((++int0 <= 7)) {
        CC_CREATE(comp(1253, 556), 5, int0);
    };
    script17311();
    IF_SETOPCURSOR(1, 211 as cursor, comp(1152, 7));
    if ((varbitplayer_52883 == 0)) {
        script17289();
        varbitplayer_52883 = 1;
    };
    script17320();
    script17327();
    script17305();
    return;
}