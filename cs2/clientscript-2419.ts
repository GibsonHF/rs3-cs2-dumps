//
function script2419(): void {
    if ((varclient_806 > 0)) {
        IF_SETHIDE(true, comp(765, 12));  // peng_rak_engine:wirebox_cover
    };
    if ((varclient_806 > 1)) {
        IF_SETMODEL(46964 as model, comp(765, 6));  // peng_rak_engine:wirebox
    };
    if ((varclient_806 > 2)) {
        if ((varbitplayer_13734 == 75)) {
            IF_SETMODEL(46956 as model, comp(765, 6));  // peng_rak_engine:wirebox
            IF_SETHIDE(true, comp(765, 14));  // peng_rak_engine:sparewire
        } else {
            IF_SETMODEL(46966 as model, comp(765, 6));  // peng_rak_engine:wirebox
            IF_SETHIDE(true, comp(765, 23));  // peng_rak_engine:eel
        };
    };
    if ((varclient_806 > 3)) {
        if ((varbitplayer_13734 == 75)) {
            IF_SETMODEL(46965 as model, comp(765, 6));  // peng_rak_engine:wirebox
            IF_SETHIDE(true, comp(765, 16));  // peng_rak_engine:tape
        } else {
            IF_SETMODEL(46957 as model, comp(765, 6));  // peng_rak_engine:wirebox
            IF_SETHIDE(true, comp(765, 24));  // peng_rak_engine:seaweed
            IF_SETOP(1, "Inspect", comp(765, 6));  // peng_rak_engine:wirebox
        };
    };
    if ((varbitplayer_13748 == 0)) {
        IF_SETMODELANIM(11762 as seq, comp(765, 11));  // peng_rak_engine:gauge
    } else if ((varbitplayer_13748 == 1)) {
        IF_SETMODELANIM(11761 as seq, comp(765, 11));  // peng_rak_engine:gauge
    } else if ((varbitplayer_13748 == 2)) {
        IF_SETMODELANIM(11760 as seq, comp(765, 11));  // peng_rak_engine:gauge
    } else if ((varbitplayer_13748 == 3)) {
        IF_SETMODELANIM(11759 as seq, comp(765, 11));  // peng_rak_engine:gauge
    } else if ((varbitplayer_13748 == 4)) {
        IF_SETMODELANIM(11763 as seq, comp(765, 11));  // peng_rak_engine:gauge
    } else if ((varbitplayer_13748 == 5)) {
        IF_SETMODELANIM(11764 as seq, comp(765, 11));  // peng_rak_engine:gauge
    } else if ((varbitplayer_13748 == 6)) {
        IF_SETMODELANIM(11765 as seq, comp(765, 11));  // peng_rak_engine:gauge
    };
    return;
}