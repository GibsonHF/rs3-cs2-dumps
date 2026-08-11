//
function script1290(): void {
    IF_SETTEXT(inttostring(varbitplayer_11956, 10), comp(130, 81));  // forget_traintrack_puzzle3:3counter_l
    IF_SETTEXT(inttostring(varbitplayer_11957, 10), comp(130, 80));  // forget_traintrack_puzzle3:3counter_r
    if ((varbitplayer_11937 == 2)) {
        IF_SETMODEL(8522 as model, comp(130, 0));  // forget_traintrack_puzzle3:3track_al
        IF_SETMODEL(8523 as model, comp(130, 1));  // forget_traintrack_puzzle3:3track_ar
        IF_SETMODEL(8598 as model, comp(130, 40));  // forget_traintrack_puzzle3:3switch_a
    } else if ((varbitplayer_11937 == 1)) {
        IF_SETMODEL(8521 as model, comp(130, 0));  // forget_traintrack_puzzle3:3track_al
        IF_SETMODEL(8524 as model, comp(130, 1));  // forget_traintrack_puzzle3:3track_ar
        IF_SETMODEL(8597 as model, comp(130, 40));  // forget_traintrack_puzzle3:3switch_a
    } else {
        IF_SETMODEL(-1 as model, comp(130, 40));  // forget_traintrack_puzzle3:3switch_a
        IF_SETMODEL(8522 as model, comp(130, 0));  // forget_traintrack_puzzle3:3track_al
        IF_SETMODEL(8524 as model, comp(130, 1));  // forget_traintrack_puzzle3:3track_ar
    };
    if ((varbitplayer_11938 == 2)) {
        IF_SETMODEL(8526 as model, comp(130, 2));  // forget_traintrack_puzzle3:3track_bl
        IF_SETMODEL(8527 as model, comp(130, 3));  // forget_traintrack_puzzle3:3track_br
        IF_SETMODEL(8600 as model, comp(130, 41));  // forget_traintrack_puzzle3:3switch_b
    } else if ((varbitplayer_11938 == 1)) {
        IF_SETMODEL(8525 as model, comp(130, 2));  // forget_traintrack_puzzle3:3track_bl
        IF_SETMODEL(8528 as model, comp(130, 3));  // forget_traintrack_puzzle3:3track_br
        IF_SETMODEL(8599 as model, comp(130, 41));  // forget_traintrack_puzzle3:3switch_b
    } else {
        IF_SETMODEL(-1 as model, comp(130, 41));  // forget_traintrack_puzzle3:3switch_b
        IF_SETMODEL(8526 as model, comp(130, 2));  // forget_traintrack_puzzle3:3track_bl
        IF_SETMODEL(8528 as model, comp(130, 3));  // forget_traintrack_puzzle3:3track_br
    };
    if ((varbitplayer_11939 == 2)) {
        IF_SETMODEL(8530 as model, comp(130, 4));  // forget_traintrack_puzzle3:3track_cl
        IF_SETMODEL(8531 as model, comp(130, 5));  // forget_traintrack_puzzle3:3track_cr
        IF_SETMODEL(8602 as model, comp(130, 42));  // forget_traintrack_puzzle3:3switch_c
    } else if ((varbitplayer_11939 == 1)) {
        IF_SETMODEL(8529 as model, comp(130, 4));  // forget_traintrack_puzzle3:3track_cl
        IF_SETMODEL(8532 as model, comp(130, 5));  // forget_traintrack_puzzle3:3track_cr
        IF_SETMODEL(8601 as model, comp(130, 42));  // forget_traintrack_puzzle3:3switch_c
    } else {
        IF_SETMODEL(-1 as model, comp(130, 42));  // forget_traintrack_puzzle3:3switch_c
        IF_SETMODEL(8530 as model, comp(130, 4));  // forget_traintrack_puzzle3:3track_cl
        IF_SETMODEL(8532 as model, comp(130, 5));  // forget_traintrack_puzzle3:3track_cr
    };
    if ((varbitplayer_11940 == 2)) {
        IF_SETMODEL(8534 as model, comp(130, 6));  // forget_traintrack_puzzle3:3track_dl
        IF_SETMODEL(8535 as model, comp(130, 7));  // forget_traintrack_puzzle3:3track_dr
        IF_SETMODEL(8604 as model, comp(130, 43));  // forget_traintrack_puzzle3:3switch_d
    } else if ((varbitplayer_11940 == 1)) {
        IF_SETMODEL(8533 as model, comp(130, 6));  // forget_traintrack_puzzle3:3track_dl
        IF_SETMODEL(8536 as model, comp(130, 7));  // forget_traintrack_puzzle3:3track_dr
        IF_SETMODEL(8603 as model, comp(130, 43));  // forget_traintrack_puzzle3:3switch_d
    } else {
        IF_SETMODEL(-1 as model, comp(130, 43));  // forget_traintrack_puzzle3:3switch_d
        IF_SETMODEL(8534 as model, comp(130, 6));  // forget_traintrack_puzzle3:3track_dl
        IF_SETMODEL(8536 as model, comp(130, 7));  // forget_traintrack_puzzle3:3track_dr
    };
    if ((varbitplayer_11941 == 2)) {
        IF_SETMODEL(8538 as model, comp(130, 8));  // forget_traintrack_puzzle3:3track_el
        IF_SETMODEL(8539 as model, comp(130, 9));  // forget_traintrack_puzzle3:3track_er
        IF_SETMODEL(8606 as model, comp(130, 44));  // forget_traintrack_puzzle3:3switch_e
    } else if ((varbitplayer_11941 == 1)) {
        IF_SETMODEL(8537 as model, comp(130, 8));  // forget_traintrack_puzzle3:3track_el
        IF_SETMODEL(8540 as model, comp(130, 9));  // forget_traintrack_puzzle3:3track_er
        IF_SETMODEL(8605 as model, comp(130, 44));  // forget_traintrack_puzzle3:3switch_e
    } else {
        IF_SETMODEL(-1 as model, comp(130, 44));  // forget_traintrack_puzzle3:3switch_e
        IF_SETMODEL(8538 as model, comp(130, 8));  // forget_traintrack_puzzle3:3track_el
        IF_SETMODEL(8540 as model, comp(130, 9));  // forget_traintrack_puzzle3:3track_er
    };
    if ((varbitplayer_11942 == 2)) {
        IF_SETMODEL(8542 as model, comp(130, 10));  // forget_traintrack_puzzle3:3track_fl
        IF_SETMODEL(8543 as model, comp(130, 11));  // forget_traintrack_puzzle3:3track_fr
        IF_SETMODEL(8608 as model, comp(130, 45));  // forget_traintrack_puzzle3:3switch_f
    } else if ((varbitplayer_11942 == 1)) {
        IF_SETMODEL(8541 as model, comp(130, 10));  // forget_traintrack_puzzle3:3track_fl
        IF_SETMODEL(8544 as model, comp(130, 11));  // forget_traintrack_puzzle3:3track_fr
        IF_SETMODEL(8607 as model, comp(130, 45));  // forget_traintrack_puzzle3:3switch_f
    } else {
        IF_SETMODEL(-1 as model, comp(130, 45));  // forget_traintrack_puzzle3:3switch_f
        IF_SETMODEL(8542 as model, comp(130, 10));  // forget_traintrack_puzzle3:3track_fl
        IF_SETMODEL(8544 as model, comp(130, 11));  // forget_traintrack_puzzle3:3track_fr
    };
    if ((varbitplayer_11943 == 2)) {
        IF_SETMODEL(8546 as model, comp(130, 12));  // forget_traintrack_puzzle3:3track_gl
        IF_SETMODEL(8547 as model, comp(130, 13));  // forget_traintrack_puzzle3:3track_gr
        IF_SETMODEL(8610 as model, comp(130, 46));  // forget_traintrack_puzzle3:3switch_g
    } else if ((varbitplayer_11943 == 1)) {
        IF_SETMODEL(8545 as model, comp(130, 12));  // forget_traintrack_puzzle3:3track_gl
        IF_SETMODEL(8548 as model, comp(130, 13));  // forget_traintrack_puzzle3:3track_gr
        IF_SETMODEL(8609 as model, comp(130, 46));  // forget_traintrack_puzzle3:3switch_g
    } else {
        IF_SETMODEL(-1 as model, comp(130, 46));  // forget_traintrack_puzzle3:3switch_g
        IF_SETMODEL(8546 as model, comp(130, 12));  // forget_traintrack_puzzle3:3track_gl
        IF_SETMODEL(8548 as model, comp(130, 13));  // forget_traintrack_puzzle3:3track_gr
    };
    if ((varbitplayer_11944 == 2)) {
        IF_SETMODEL(8550 as model, comp(130, 14));  // forget_traintrack_puzzle3:3track_hl
        IF_SETMODEL(8551 as model, comp(130, 15));  // forget_traintrack_puzzle3:3track_hr
        IF_SETMODEL(8612 as model, comp(130, 47));  // forget_traintrack_puzzle3:3switch_h
    } else if ((varbitplayer_11944 == 1)) {
        IF_SETMODEL(8549 as model, comp(130, 14));  // forget_traintrack_puzzle3:3track_hl
        IF_SETMODEL(8552 as model, comp(130, 15));  // forget_traintrack_puzzle3:3track_hr
        IF_SETMODEL(8611 as model, comp(130, 47));  // forget_traintrack_puzzle3:3switch_h
    } else {
        IF_SETMODEL(-1 as model, comp(130, 47));  // forget_traintrack_puzzle3:3switch_h
        IF_SETMODEL(8550 as model, comp(130, 14));  // forget_traintrack_puzzle3:3track_hl
        IF_SETMODEL(8552 as model, comp(130, 15));  // forget_traintrack_puzzle3:3track_hr
    };
    if ((varbitplayer_11945 == 2)) {
        IF_SETMODEL(8554 as model, comp(130, 16));  // forget_traintrack_puzzle3:3track_il
        IF_SETMODEL(8555 as model, comp(130, 17));  // forget_traintrack_puzzle3:3track_ir
        IF_SETMODEL(8614 as model, comp(130, 48));  // forget_traintrack_puzzle3:3switch_i
    } else if ((varbitplayer_11945 == 1)) {
        IF_SETMODEL(8553 as model, comp(130, 16));  // forget_traintrack_puzzle3:3track_il
        IF_SETMODEL(8556 as model, comp(130, 17));  // forget_traintrack_puzzle3:3track_ir
        IF_SETMODEL(8613 as model, comp(130, 48));  // forget_traintrack_puzzle3:3switch_i
    } else {
        IF_SETMODEL(-1 as model, comp(130, 48));  // forget_traintrack_puzzle3:3switch_i
        IF_SETMODEL(8554 as model, comp(130, 16));  // forget_traintrack_puzzle3:3track_il
        IF_SETMODEL(8556 as model, comp(130, 17));  // forget_traintrack_puzzle3:3track_ir
    };
    if ((varbitplayer_11946 == 2)) {
        IF_SETMODEL(8558 as model, comp(130, 18));  // forget_traintrack_puzzle3:3track_jl
        IF_SETMODEL(8559 as model, comp(130, 19));  // forget_traintrack_puzzle3:3track_jr
        IF_SETMODEL(8616 as model, comp(130, 49));  // forget_traintrack_puzzle3:3switch_j
    } else if ((varbitplayer_11946 == 1)) {
        IF_SETMODEL(8557 as model, comp(130, 18));  // forget_traintrack_puzzle3:3track_jl
        IF_SETMODEL(8560 as model, comp(130, 19));  // forget_traintrack_puzzle3:3track_jr
        IF_SETMODEL(8615 as model, comp(130, 49));  // forget_traintrack_puzzle3:3switch_j
    } else {
        IF_SETMODEL(-1 as model, comp(130, 49));  // forget_traintrack_puzzle3:3switch_j
        IF_SETMODEL(8558 as model, comp(130, 18));  // forget_traintrack_puzzle3:3track_jl
        IF_SETMODEL(8560 as model, comp(130, 19));  // forget_traintrack_puzzle3:3track_jr
    };
    if ((varbitplayer_11947 == 2)) {
        IF_SETMODEL(8562 as model, comp(130, 20));  // forget_traintrack_puzzle3:3track_kl
        IF_SETMODEL(8563 as model, comp(130, 21));  // forget_traintrack_puzzle3:3track_kr
        IF_SETMODEL(8618 as model, comp(130, 50));  // forget_traintrack_puzzle3:3switch_k
    } else if ((varbitplayer_11947 == 1)) {
        IF_SETMODEL(8561 as model, comp(130, 20));  // forget_traintrack_puzzle3:3track_kl
        IF_SETMODEL(8564 as model, comp(130, 21));  // forget_traintrack_puzzle3:3track_kr
        IF_SETMODEL(8617 as model, comp(130, 50));  // forget_traintrack_puzzle3:3switch_k
    } else {
        IF_SETMODEL(-1 as model, comp(130, 50));  // forget_traintrack_puzzle3:3switch_k
        IF_SETMODEL(8562 as model, comp(130, 20));  // forget_traintrack_puzzle3:3track_kl
        IF_SETMODEL(8564 as model, comp(130, 21));  // forget_traintrack_puzzle3:3track_kr
    };
    if ((varbitplayer_11948 == 2)) {
        IF_SETMODEL(8566 as model, comp(130, 22));  // forget_traintrack_puzzle3:3track_ll
        IF_SETMODEL(8567 as model, comp(130, 23));  // forget_traintrack_puzzle3:3track_lr
        IF_SETMODEL(8620 as model, comp(130, 51));  // forget_traintrack_puzzle3:3switch_l
    } else if ((varbitplayer_11948 == 1)) {
        IF_SETMODEL(8565 as model, comp(130, 22));  // forget_traintrack_puzzle3:3track_ll
        IF_SETMODEL(8568 as model, comp(130, 23));  // forget_traintrack_puzzle3:3track_lr
        IF_SETMODEL(8619 as model, comp(130, 51));  // forget_traintrack_puzzle3:3switch_l
    } else {
        IF_SETMODEL(-1 as model, comp(130, 51));  // forget_traintrack_puzzle3:3switch_l
        IF_SETMODEL(8566 as model, comp(130, 22));  // forget_traintrack_puzzle3:3track_ll
        IF_SETMODEL(8568 as model, comp(130, 23));  // forget_traintrack_puzzle3:3track_lr
    };
    if ((varbitplayer_11949 == 2)) {
        IF_SETMODEL(8570 as model, comp(130, 24));  // forget_traintrack_puzzle3:3track_ml
        IF_SETMODEL(8571 as model, comp(130, 25));  // forget_traintrack_puzzle3:3track_mr
        IF_SETMODEL(8622 as model, comp(130, 52));  // forget_traintrack_puzzle3:3switch_m
    } else if ((varbitplayer_11949 == 1)) {
        IF_SETMODEL(8569 as model, comp(130, 24));  // forget_traintrack_puzzle3:3track_ml
        IF_SETMODEL(8572 as model, comp(130, 25));  // forget_traintrack_puzzle3:3track_mr
        IF_SETMODEL(8621 as model, comp(130, 52));  // forget_traintrack_puzzle3:3switch_m
    } else {
        IF_SETMODEL(-1 as model, comp(130, 52));  // forget_traintrack_puzzle3:3switch_m
        IF_SETMODEL(8570 as model, comp(130, 24));  // forget_traintrack_puzzle3:3track_ml
        IF_SETMODEL(8572 as model, comp(130, 25));  // forget_traintrack_puzzle3:3track_mr
    };
    if ((varbitplayer_11950 == 2)) {
        IF_SETMODEL(8574 as model, comp(130, 26));  // forget_traintrack_puzzle3:3track_nl
        IF_SETMODEL(8575 as model, comp(130, 27));  // forget_traintrack_puzzle3:3track_nr
        IF_SETMODEL(8624 as model, comp(130, 53));  // forget_traintrack_puzzle3:3switch_n
    } else if ((varbitplayer_11950 == 1)) {
        IF_SETMODEL(8573 as model, comp(130, 26));  // forget_traintrack_puzzle3:3track_nl
        IF_SETMODEL(8576 as model, comp(130, 27));  // forget_traintrack_puzzle3:3track_nr
        IF_SETMODEL(8623 as model, comp(130, 53));  // forget_traintrack_puzzle3:3switch_n
    } else {
        IF_SETMODEL(-1 as model, comp(130, 53));  // forget_traintrack_puzzle3:3switch_n
        IF_SETMODEL(8574 as model, comp(130, 26));  // forget_traintrack_puzzle3:3track_nl
        IF_SETMODEL(8576 as model, comp(130, 27));  // forget_traintrack_puzzle3:3track_nr
    };
    if ((varbitplayer_11951 == 2)) {
        IF_SETMODEL(8578 as model, comp(130, 28));  // forget_traintrack_puzzle3:3track_ol
        IF_SETMODEL(8579 as model, comp(130, 29));  // forget_traintrack_puzzle3:3track_or
        IF_SETMODEL(8626 as model, comp(130, 54));  // forget_traintrack_puzzle3:3switch_o
    } else if ((varbitplayer_11951 == 1)) {
        IF_SETMODEL(8577 as model, comp(130, 28));  // forget_traintrack_puzzle3:3track_ol
        IF_SETMODEL(8580 as model, comp(130, 29));  // forget_traintrack_puzzle3:3track_or
        IF_SETMODEL(8625 as model, comp(130, 54));  // forget_traintrack_puzzle3:3switch_o
    } else {
        IF_SETMODEL(-1 as model, comp(130, 54));  // forget_traintrack_puzzle3:3switch_o
        IF_SETMODEL(8578 as model, comp(130, 28));  // forget_traintrack_puzzle3:3track_ol
        IF_SETMODEL(8580 as model, comp(130, 29));  // forget_traintrack_puzzle3:3track_or
    };
    if ((varbitplayer_11952 == 2)) {
        IF_SETMODEL(8582 as model, comp(130, 30));  // forget_traintrack_puzzle3:3track_pl
        IF_SETMODEL(8583 as model, comp(130, 31));  // forget_traintrack_puzzle3:3track_pr
        IF_SETMODEL(8628 as model, comp(130, 55));  // forget_traintrack_puzzle3:3switch_p
    } else if ((varbitplayer_11952 == 1)) {
        IF_SETMODEL(8581 as model, comp(130, 30));  // forget_traintrack_puzzle3:3track_pl
        IF_SETMODEL(8584 as model, comp(130, 31));  // forget_traintrack_puzzle3:3track_pr
        IF_SETMODEL(8627 as model, comp(130, 55));  // forget_traintrack_puzzle3:3switch_p
    } else {
        IF_SETMODEL(-1 as model, comp(130, 55));  // forget_traintrack_puzzle3:3switch_p
        IF_SETMODEL(8582 as model, comp(130, 30));  // forget_traintrack_puzzle3:3track_pl
        IF_SETMODEL(8584 as model, comp(130, 31));  // forget_traintrack_puzzle3:3track_pr
    };
    if ((varbitplayer_11953 == 2)) {
        IF_SETMODEL(8586 as model, comp(130, 32));  // forget_traintrack_puzzle3:3track_ql
        IF_SETMODEL(8587 as model, comp(130, 33));  // forget_traintrack_puzzle3:3track_qr
        IF_SETMODEL(8630 as model, comp(130, 56));  // forget_traintrack_puzzle3:3switch_q
    } else if ((varbitplayer_11953 == 1)) {
        IF_SETMODEL(8585 as model, comp(130, 32));  // forget_traintrack_puzzle3:3track_ql
        IF_SETMODEL(8588 as model, comp(130, 33));  // forget_traintrack_puzzle3:3track_qr
        IF_SETMODEL(8629 as model, comp(130, 56));  // forget_traintrack_puzzle3:3switch_q
    } else {
        IF_SETMODEL(-1 as model, comp(130, 56));  // forget_traintrack_puzzle3:3switch_q
        IF_SETMODEL(8586 as model, comp(130, 32));  // forget_traintrack_puzzle3:3track_ql
        IF_SETMODEL(8588 as model, comp(130, 33));  // forget_traintrack_puzzle3:3track_qr
    };
    if ((varbitplayer_11954 == 2)) {
        IF_SETMODEL(8590 as model, comp(130, 34));  // forget_traintrack_puzzle3:3track_rl
        IF_SETMODEL(8591 as model, comp(130, 35));  // forget_traintrack_puzzle3:3track_rr
        IF_SETMODEL(8632 as model, comp(130, 57));  // forget_traintrack_puzzle3:3switch_r
    } else if ((varbitplayer_11954 == 1)) {
        IF_SETMODEL(8589 as model, comp(130, 34));  // forget_traintrack_puzzle3:3track_rl
        IF_SETMODEL(8592 as model, comp(130, 35));  // forget_traintrack_puzzle3:3track_rr
        IF_SETMODEL(8631 as model, comp(130, 57));  // forget_traintrack_puzzle3:3switch_r
    } else {
        IF_SETMODEL(-1 as model, comp(130, 57));  // forget_traintrack_puzzle3:3switch_r
        IF_SETMODEL(8590 as model, comp(130, 34));  // forget_traintrack_puzzle3:3track_rl
        IF_SETMODEL(8592 as model, comp(130, 35));  // forget_traintrack_puzzle3:3track_rr
    };
    if ((varbitplayer_11955 == 2)) {
        IF_SETMODEL(8594 as model, comp(130, 36));  // forget_traintrack_puzzle3:3track_sl
        IF_SETMODEL(8595 as model, comp(130, 37));  // forget_traintrack_puzzle3:3track_sr
        IF_SETMODEL(8634 as model, comp(130, 58));  // forget_traintrack_puzzle3:3switch_s
    } else if ((varbitplayer_11955 == 1)) {
        IF_SETMODEL(8593 as model, comp(130, 36));  // forget_traintrack_puzzle3:3track_sl
        IF_SETMODEL(8596 as model, comp(130, 37));  // forget_traintrack_puzzle3:3track_sr
        IF_SETMODEL(8633 as model, comp(130, 58));  // forget_traintrack_puzzle3:3switch_s
    } else {
        IF_SETMODEL(-1 as model, comp(130, 58));  // forget_traintrack_puzzle3:3switch_s
        IF_SETMODEL(8594 as model, comp(130, 36));  // forget_traintrack_puzzle3:3track_sl
        IF_SETMODEL(8596 as model, comp(130, 37));  // forget_traintrack_puzzle3:3track_sr
    };
    return;
}