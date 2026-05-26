//
function script15785(int0: number, int1: number, int2: number): void {
    CC_DELETEALL(int0);
    if ((int2 == 0)) {
        IF_SETHIDE(1, int1);
        return;
    };
    IF_SETHIDE(0, int1);
    var string0 = "eg Talk to target";
    switch (int2) {
        case 1: {
            script15382(int0, "<col=FFCB05>Pinch</col> to zoom camera", "<col=FFCB05>Use Scroll-wheel</col> to zoom camera");
            script15383(int0, 11995, 13001);
            break;
        }
        case 2: {
            script15382(int0, "<col=FFCB05>Touch and Drag</col> to rotate camera", "<col=FFCB05>Press Scroll-wheel</col><br><col=FFCB05>and Drag</col> to rotate camera");
            script15383(int0, 11993, 12998);
            break;
        }
        case 3: {
            script15382(int0, "<col=FFCB05>Tap</col> the floor to move there", "<col=FFCB05>Left-click</col> the floor to move there");
            script15383(int0, 11997, 12996);
            break;
        }
        case 4: {
            script15382(int0, "<col=FFCB05>Tap</col> minimap to move there", "<col=FFCB05>Left-click</col> minimap to move there");
            script15383(int0, 11997, 12996);
            break;
        }
        case 5: {
            script15382(int0, "<col=FFCB05>Tap</col> the floor or minimap to move there", "<col=FFCB05>Left-click</col> the floor or minimap to move there");
            script15383(int0, 11997, 12996);
            break;
        }
        case 6: {
            script15382(int0, `<col=FFCB05>Tap</col> target for default action<br>${string0}`, `<col=FFCB05>Left-click</col> target for default action<br>${string0}`);
            script15383(int0, 11997, 12996);
            break;
        }
        case 7: {
            script15382(int0, "<col=FFCB05>Touch and Hold</col> target for action menu<br>eg Examine target", "<col=FFCB05>Right-click</col> target for action menu<br>eg Examine target");
            script15383(int0, 11994, 12997);
            break;
        }
        default: {
            script12478(`Unhandled control ID: #${inttostring(int2, 10)}`);
            return;
        }
    };
    return;
}