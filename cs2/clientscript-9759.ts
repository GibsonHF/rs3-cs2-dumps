//
function script9759(): void {
    if ((varbitplayer_458 == 0)) {
        IF_SETTEXT(`${inttostring(((varbitplayer_466 + 1) * 5), 10)} x Short plank<br>${inttostring(((varbitplayer_467 + 1) * 5), 10)} x Long plank<br>${inttostring(((varbitplayer_468 + 1) * 5), 10)} x Diagonal plank<br>${inttostring(((varbitplayer_469 + 1) * 5), 10)} x Tooth plank<br>${inttostring(((varbitplayer_470 + 1) * 5), 10)} x Groove plank<br>${inttostring(((varbitplayer_471 + 1) * 5), 10)} x Curved plank`, 59047938);
        IF_SETTEXT(`${inttostring(((varbitplayer_451 + 1) * 5), 10)} x Short plank<br>${inttostring(((varbitplayer_452 + 1) * 5), 10)} x Long plank<br>${inttostring(((varbitplayer_453 + 1) * 5), 10)} x Diagonal plank<br>${inttostring(((varbitplayer_454 + 1) * 5), 10)} x Tooth plank<br>${inttostring(((varbitplayer_455 + 1) * 5), 10)} x Groove plank<br>${inttostring(((varbitplayer_456 + 1) * 5), 10)} x Curved plank`, 59047936);
    } else {
        IF_SETHIDE(0, 59047962);
        IF_SETHIDE(0, 59047970);
        if ((varbitplayer_464 == 0)) {
            IF_SETTEXT(`${inttostring(varbitplayer_459, 10)}/${inttostring(((varbitplayer_451 + 1) * 5), 10)}  Short plank<br>${inttostring(varbitplayer_460, 10)}/${inttostring(((varbitplayer_452 + 1) * 5), 10)}  Long plank<br>${inttostring(varbitplayer_461, 10)}/${inttostring(((varbitplayer_453 + 1) * 5), 10)}  Diagonal plank<br>${inttostring(varbitplayer_462, 10)}/${inttostring(((varbitplayer_454 + 1) * 5), 10)}  Tooth plank<br>${inttostring(varbitplayer_463, 10)}/${inttostring(((varbitplayer_455 + 1) * 5), 10)}  Groove plank<br>${inttostring(varbitplayer_465, 10)}/${inttostring(((varbitplayer_456 + 1) * 5), 10)}  Curved plank`, 59047936);
            IF_SETHIDE(0, 59047939);
        } else {
            IF_SETTEXT(`${inttostring(varbitplayer_459, 10)}/${inttostring(((varbitplayer_451 + 1) * 5), 10)}  Short plank<br>${inttostring(varbitplayer_460, 10)}/${inttostring(((varbitplayer_452 + 1) * 5), 10)}  Long plank<br>${inttostring(varbitplayer_461, 10)}/${inttostring(((varbitplayer_453 + 1) * 5), 10)}  Diagonal plank<br>${inttostring(varbitplayer_462, 10)}/${inttostring(((varbitplayer_454 + 1) * 5), 10)}  Tooth plank<br>${inttostring(varbitplayer_463, 10)}/${inttostring(((varbitplayer_455 + 1) * 5), 10)}  Groove plank<br>${inttostring(varbitplayer_465, 10)}/${inttostring(((varbitplayer_456 + 1) * 5), 10)}  Curved plank`, 59047938);
            IF_SETHIDE(0, 59047937);
        };
    };
    return;
}