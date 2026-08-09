//
function script4814(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var string0 = "";
    IF_SETTEXT("", comp(1258, 498));
    IF_SETTEXT("", comp(1258, 423));
    IF_SETTEXT("", comp(1258, 342));
    IF_SETHIDE(false, comp(1258, 479));
    IF_SETHIDE(false, comp(1258, 404));
    IF_SETHIDE(false, comp(1258, 323));
    IF_SETHIDE(true, comp(1258, 498));
    IF_SETHIDE(true, comp(1258, 423));
    IF_SETHIDE(true, comp(1258, 342));
    IF_SETONMOUSELEAVE(callback(script40, 82444937), comp(1258, 495));
    IF_SETONMOUSELEAVE(callback(script40, 82444937), comp(1258, 420));
    IF_SETONMOUSELEAVE(callback(script40, 82444937), comp(1258, 339));
    IF_SETONMOUSELEAVE(callback(script40, 82444937), comp(1258, 475));
    IF_SETONMOUSELEAVE(callback(script40, 82444937), comp(1258, 400));
    IF_SETONMOUSELEAVE(callback(script40, 82444937), comp(1258, 319));
    IF_SETONMOUSELEAVE(callback(script40, 82444937), comp(1258, 494));
    IF_SETONMOUSELEAVE(callback(script40, 82444937), comp(1258, 419));
    IF_SETONMOUSELEAVE(callback(script40, 82444937), comp(1258, 338));
    IF_SETONMOUSELEAVE(callback(script40, 82444937), comp(1258, 474));
    IF_SETONMOUSELEAVE(callback(script40, 82444937), comp(1258, 399));
    IF_SETONMOUSELEAVE(callback(script40, 82444937), comp(1258, 318));
    if ((CLANPROFILE_FIND() == 1)) {
        if (((script5008() == 0) || (script5144(-1) == 0))) {
            IF_SETHIDE(false, comp(1258, 495));
            IF_SETHIDE(false, comp(1258, 420));
            IF_SETHIDE(false, comp(1258, 339));
            IF_SETHIDE(false, comp(1258, 475));
            IF_SETHIDE(false, comp(1258, 400));
            IF_SETHIDE(false, comp(1258, 319));
            string0 = "Your rank may not currently make alterations to this item";
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 495));
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 420));
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 339));
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 475));
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 400));
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 319));
        } else {
            switch (varbitplayer_6981) {
                case 1: {
                    int0 = varbitplayer_6986;
                    break;
                }
                case 2: {
                    int0 = varbitplayer_6995;
                    break;
                }
                case 3: {
                    int0 = varbitplayer_7004;
                    break;
                }
            };
            switch (script4829(varbitplayer_6981)) {
                case 1: {
                    string0 = "You may submit this customisation to the build queue.";
                    switch (int0) {
                        case 1: {
                            IF_SETHIDE(true, comp(1258, 498));
                            IF_SETHIDE(false, comp(1258, 479));
                            IF_SETHIDE(true, comp(1258, 495));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 494));
                            break;
                        }
                        case 2: {
                            IF_SETHIDE(true, comp(1258, 423));
                            IF_SETHIDE(false, comp(1258, 404));
                            IF_SETHIDE(true, comp(1258, 420));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 419));
                            break;
                        }
                        case 3: {
                            IF_SETHIDE(true, comp(1258, 342));
                            IF_SETHIDE(false, comp(1258, 323));
                            IF_SETHIDE(true, comp(1258, 339));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 338));
                            break;
                        }
                    };
                    break;
                }
                case 2: {
                    switch (int0) {
                        case 1: {
                            string0 = "Your citadel is of an insufficient tier to buy this customisation.";
                            IF_SETTEXT(string0, comp(1258, 498));
                            IF_SETHIDE(false, comp(1258, 495));
                            IF_SETHIDE(false, comp(1258, 498));
                            IF_SETHIDE(true, comp(1258, 479));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 495));
                            string0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 474));
                            string0 = "You do not have the rank to cancel this job.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 475));
                            break;
                        }
                        case 2: {
                            string0 = "Your citadel is of an insufficient tier to buy this customisation.";
                            IF_SETTEXT(string0, comp(1258, 423));
                            IF_SETHIDE(false, comp(1258, 420));
                            IF_SETHIDE(false, comp(1258, 423));
                            IF_SETHIDE(true, comp(1258, 404));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 420));
                            string0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 399));
                            string0 = "You do not have the rank to cancel this job.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 400));
                            break;
                        }
                        case 3: {
                            string0 = "Your citadel is of an insufficient tier to buy this customisation.";
                            IF_SETTEXT(string0, comp(1258, 342));
                            IF_SETHIDE(false, comp(1258, 339));
                            IF_SETHIDE(false, comp(1258, 342));
                            IF_SETHIDE(true, comp(1258, 323));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 339));
                            string0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 318));
                            string0 = "You do not have the rank to cancel this job.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 319));
                            break;
                        }
                    };
                    break;
                }
                case 3: {
                    switch (int0) {
                        case 1: {
                            string0 = "Select valid options for each part of the customisation before adding to the build queue.";
                            IF_SETTEXT(string0, comp(1258, 498));
                            IF_SETHIDE(false, comp(1258, 495));
                            IF_SETHIDE(false, comp(1258, 498));
                            IF_SETHIDE(true, comp(1258, 479));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 495));
                            string0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 474));
                            string0 = "You do not have the rank to cancel this job.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 475));
                            break;
                        }
                        case 2: {
                            string0 = "You must select valid options for each part of the customisation before you can add it to the build queue.";
                            IF_SETTEXT(string0, comp(1258, 423));
                            IF_SETHIDE(false, comp(1258, 420));
                            IF_SETHIDE(false, comp(1258, 423));
                            IF_SETHIDE(true, comp(1258, 404));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 420));
                            string0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 399));
                            string0 = "You do not have the rank to cancel this job.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 400));
                            break;
                        }
                        case 3: {
                            string0 = "You must select valid options for each part of the customisation before you can add it to the build queue.";
                            IF_SETTEXT(string0, comp(1258, 342));
                            IF_SETHIDE(false, comp(1258, 339));
                            IF_SETHIDE(false, comp(1258, 342));
                            IF_SETHIDE(true, comp(1258, 323));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 339));
                            string0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 318));
                            string0 = "You do not have the rank to cancel this job.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 319));
                            break;
                        }
                    };
                    break;
                }
                case 4: {
                    switch (int0) {
                        case 1: {
                            string0 = "The selection you have chosen is already built in the citadel.";
                            IF_SETTEXT(string0, comp(1258, 498));
                            IF_SETHIDE(false, comp(1258, 495));
                            IF_SETHIDE(false, comp(1258, 498));
                            IF_SETHIDE(true, comp(1258, 479));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 495));
                            string0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 474));
                            string0 = "You do not have the rank to cancel this job.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 475));
                            break;
                        }
                        case 2: {
                            string0 = "The selection you have chosen is already built in the citadel.";
                            IF_SETTEXT(string0, comp(1258, 423));
                            IF_SETHIDE(false, comp(1258, 420));
                            IF_SETHIDE(false, comp(1258, 423));
                            IF_SETHIDE(true, comp(1258, 404));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 420));
                            string0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 399));
                            string0 = "You do not have the rank to cancel this job.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 400));
                            break;
                        }
                        case 3: {
                            string0 = "The selection you have chosen is already built in the citadel.";
                            IF_SETTEXT(string0, comp(1258, 342));
                            IF_SETHIDE(false, comp(1258, 339));
                            IF_SETHIDE(false, comp(1258, 342));
                            IF_SETHIDE(true, comp(1258, 323));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 339));
                            string0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 318));
                            string0 = "You do not have the rank to cancel this job.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 319));
                            break;
                        }
                    };
                    break;
                }
                case 5: {
                    switch (int0) {
                        case 1: {
                            string0 = "This hotspot is currently queued to be reset, you may cancel this reset at no cost.";
                            IF_SETTEXT(string0, comp(1258, 498));
                            IF_SETHIDE(false, comp(1258, 495));
                            IF_SETHIDE(false, comp(1258, 498));
                            IF_SETHIDE(true, comp(1258, 479));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 495));
                            string0 = "This hotspot is currently queued to be reset, you may cancel this reset at no cost.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 474));
                            string0 = "You do not have the rank to cancel this job.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 475));
                            break;
                        }
                        case 2: {
                            string0 = "This hotspot is currently queued to be reset, you may cancel this reset at no cost.";
                            IF_SETTEXT(string0, comp(1258, 423));
                            IF_SETHIDE(false, comp(1258, 420));
                            IF_SETHIDE(false, comp(1258, 423));
                            IF_SETHIDE(true, comp(1258, 404));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 420));
                            string0 = "This hotspot is currently queued to be reset, you may cancel this reset at no cost.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 399));
                            string0 = "You do not have the rank to cancel this job.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 400));
                            break;
                        }
                        case 3: {
                            string0 = "This hotspot is currently queued to be reset, you may cancel this reset at no cost.";
                            IF_SETTEXT(string0, comp(1258, 342));
                            IF_SETHIDE(false, comp(1258, 339));
                            IF_SETHIDE(false, comp(1258, 342));
                            IF_SETHIDE(true, comp(1258, 323));
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 339));
                            string0 = "This hotspot is currently queued to be reset, you may cancel this reset at no cost.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 318));
                            string0 = "You do not have the rank to cancel this job.";
                            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 319));
                            break;
                        }
                    };
                    break;
                }
            };
        };
    };
    return;
}