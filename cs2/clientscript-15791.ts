//
function script15791(): void {
    switch (varbitplayer_49044) {
        case 10: {
            if ((script6431() == 1)) {
                IF_SETTEXT("Pinch to<br>zoom your camera", comp(845, 9));  // tut7_camera:heading
                script15792(15496);
            } else {
                IF_SETTEXT("Use Scroll-wheel to<br>zoom your camera", comp(845, 9));  // tut7_camera:heading
                script15792(16207);
            };
            break;
        }
        case 15: {
            if ((script6431() == 1)) {
                IF_SETTEXT("Touch and Drag to<br>rotate your camera", comp(845, 9));  // tut7_camera:heading
                script15792(16208);
            } else {
                IF_SETTEXT("Press Scroll-wheel and Drag to<br>rotate your camera", comp(845, 9));  // tut7_camera:heading
                script15792(16209);
            };
            break;
        }
    };
    script13969(55377928, -1, 28554, "Continue");
    return;
}