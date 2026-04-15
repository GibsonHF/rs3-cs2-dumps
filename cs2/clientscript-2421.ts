//
function script2421(): void {
    script13990(comp(674, 0), comp(-1, 65535), 2824 as struct);
    IF_SETMODEL(46997 as model, comp(674, 11));
    IF_SETMODEL(46976 as model, comp(674, 13));
    IF_SETMODEL(46974 as model, comp(674, 12));
    IF_SETMODEL(46995 as model, comp(674, 14));
    IF_SETMODEL(46986 as model, comp(674, 15));
    if ((varclient_737 == 1)) {
        IF_SETMODEL(46982 as model, comp(674, 11));
        SOUND_SYNTH(31350, 1, 0);
        IF_SETHIDE(true, comp(674, 8));
    } else if ((varclient_737 == 2)) {
        IF_SETMODEL(46979 as model, comp(674, 13));
        SOUND_SYNTH(29366, 1, 0);
        IF_SETMODEL(46964 as model, comp(674, 4));
    } else if ((varclient_737 == 3)) {
        IF_SETMODEL(46989 as model, comp(674, 12));
        IF_SETMODEL(46956 as model, comp(674, 4));
    } else if ((varclient_737 == 4)) {
        IF_SETMODEL(46981 as model, comp(674, 14));
        SOUND_SYNTH(27139, 1, 0);
        IF_SETMODEL(46965 as model, comp(674, 4));
    } else if ((varclient_737 == 5)) {
        IF_SETMODEL(46996 as model, comp(674, 15));
        SOUND_SYNTH(28663, 1, 0);
        IF_SETHIDE(false, comp(674, 3));
    } else if ((varclient_737 == 6)) {
        IF_SETMODELANIM(11761 as seq, comp(674, 7));
    } else if ((varclient_737 == 7)) {
        IF_SETMODELANIM(11760 as seq, comp(674, 7));
    } else if ((varclient_737 == 8)) {
        IF_SETMODELANIM(11759 as seq, comp(674, 7));
    } else if ((varclient_737 == 9)) {
        IF_SETMODELANIM(11763 as seq, comp(674, 7));
    } else if ((varclient_737 == 10)) {
        IF_SETMODELANIM(11764 as seq, comp(674, 7));
    } else if ((varclient_737 == 11)) {
        IF_SETMODELANIM(11765 as seq, comp(674, 7));
    };
    return;
}