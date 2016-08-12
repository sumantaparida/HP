$(document).ready(function () {
    var windowsize = $(window).width();
    if (windowsize < 1000) {
        $("#btnModalemi").removeClass("col-xs-6");
        $("#btnModalemi").addClass("col-xs-12");
        $("#btnModalemi").css("margin-left", "0%");
    }
    else {
        $("#btnModalemi").css("margin-left", "20%");
    }


    $("#loanamountemi").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .

        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) && (e.keyCode != 46)) {
            e.preventDefault();
        }
    });

    $("#txtInterestRate").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .

        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) && (e.keyCode != 46)) {
            e.preventDefault();
        }
    });

    $("#txtTenure").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .

        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) && (e.keyCode != 46)) {
            e.preventDefault();
        }
    });

    $("#txtMonthlyIncome").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .

        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) && (e.keyCode != 46)) {
            e.preventDefault();
        }
    });

    $("#txtExistingEMI").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .

        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) && (e.keyCode != 46)) {
            e.preventDefault();
        }
    });

    $("#aCheck").click(function () {

        var propertycost = parseInt($("#spPropertyCost").text().replace(/,/g, ''));
        //alert(propertycost);
        OpenAffordability(propertycost);

    });

    $("#aCheck1").click(function () {

        var propertycost = parseInt($("#spPropertyCost").text().replace(/,/g, ''));
        //alert(propertycost);
        OpenAffordability(propertycost);

    });

    $("#aCheckEMI").click(function () {        
        var propertycost = parseInt($("#spnPCost").text().replace(/,/g, ''));
       // alert(propertycost);
        openemipopup(propertycost);
    });

});

function OpenAffordability(PropertyCost) {

    $("#dvEMI").css('display', 'none');
    $("#dvAffor").css('display', 'block');
    $("#spnHeader").text('Can I Afford This Property?');
    $("#spnPCost").text(PropertyCost);

    $("#txtMonthlyIncome").val('');
    $("#txtMonthlyIncome").css('border-color', '');
    $("#txtExistingEMI").val('');
    $("#txtExistingEMI").css('border-color', '');
    $("#imgsuccess").css('display', 'none');
    $("#YouCan").css('display', 'none');
    $("#imgwarning").css('display', 'none');
    $("#youCannnot").css('display', 'none');

    var cost1 = PropertyCost;
    //alert(cost1);
    var downpayment1 = (cost1 * 20) / 100;
    //alert(loanamount);

    var loanamount1 = cost1 - downpayment1;

    $("#spnAmt").text(loanamount1);

    $("#myModalemi").modal();

    return false;
}

function CalculateEMI1() {
    var k = 0;
    if ($("#txtMonthlyIncome").val() == "" || $("#txtMonthlyIncome").val() == "0") {
        $("#txtMonthlyIncome").css('border-color', 'red');
        k = 1;
    }
    else {
        $("#txtMonthlyIncome").css('border-color', '');
        var emi = 0;
        var P = 0;
        var n = 1;
        var r = 0;
        var netcome = 0;

        P = parseInt($("#spnAmt").text().replace(/,/g, ''));
        r = parseFloat(parseFloat(10) / (12 * 100));
        n = parseFloat(15 * 12);

        //alert('p:' + P);
        //alert('r:' + r);
        //alert('n:' + n);

        //alert('n:' + n);
        if (P !== 0 && n !== 0 && r !== 0) {
            //alert('1');
            //EMI = [P x R x (1+R)^N]/[(1+R)^N-1]

            emi = (P * r * [Math.pow((1 + r), n)]) / ([Math.pow((1 + r), (n))] - 1);
            //alert(emi);

            if ($("#txtExistingEMI").val() == "") {

            }
            else {
                emi = emi + parseInt($("#txtExistingEMI").val());
            }

            //alert('tot' + emi);

            netcome = (parseInt($("#txtMonthlyIncome").val()) / 2);
            //alert('net' + netcome);

            if (emi < netcome) {
                $("#imgsuccess").css('display', 'block');
                $("#YouCan").css('display', 'block');

                $("#imgwarning").css('display', 'none');
                $("#youCannnot").css('display', 'none');
            }
            else {
                $("#imgsuccess").css('display', 'none');
                $("#YouCan").css('display', 'none');

                $("#imgwarning").css('display', 'block');
                $("#youCannnot").css('display', 'block');
            }
            //emi = commaSeparateNumber(emi.toFixed(0));
            //alert(emi);


        }
    }

    if (k == 1)
    {
        return false;
    }
}

function openemipopup(PropertyCost) {
    //myModalemi
    //alert('test');
    //alert(PropertyCost);
    $("#dvAffor").css('display', 'none');
    $("#dvEMI").css('display', 'block');
    $("#spnHeader").text('EMI Calculator');
    $("#txtTenure").val('15');
    $("#txtInterestRate").val('10');

        var cost = PropertyCost;
                    
        var downpayment = (cost * 20) / 100;
        //alert(loanamount);

        var loanamount = cost - downpayment;
        //alert(a);
        cost = commaSeparateNumber(cost);
        loanamount = commaSeparateNumber(loanamount);
        $("#spPropertyCost").text(cost);
        $("#loanamountemi").val(loanamount);
        CalculateEMI();
        $("#myModalemi").modal();

        return false;
    }





function CalculateEMI() {

    var k = 0;
    if ($("#loanamountemi").val() == "" || $("#loanamountemi").val() == "0") {
        $("#loanamountemi").css('border-color', 'red');
        k = 1;
    }
    else {

        $("#loanamountemi").css('border-color', '');
    }
    if ($("#txtTenure").val() == "" || $("#txtTenure").val() == "0") {
        $("#txtTenure").css('border-color', 'red');
        k = 1;
    }
    else {
        
        $("#txtTenure").css('border-color', '')
    }
    if ($("#txtInterestRate").val() == "" || $("#txtInterestRate").val() == "0") {
        $("#txtInterestRate").css('border-color', 'red');
        k = 1;
    }
    else {
        $("#txtInterestRate").css('border-color', '');
    }
    //alert(k);
    if (k == 1)
    {
        return false;
    }
    else {

        //alert('test');
        var emi = 0;
        var TotalAmtPaid = 0;
        var InterestPaid = 0;
        //var emi1 = 0;
        //var emi2 = 0;
        var P = 0;
        var n = 1;
        var r = 0;
        var intrest = 0;
        var balance = 0;

        P = parseInt($("#loanamountemi").val().replace(/,/g, ''));
        r = parseFloat(parseFloat($("#txtInterestRate").val()) / (12 * 100));// parseFloat(parseFloat($("#txtInterestRate").val()) / 100);
        //alert('r:' + r);

        n = parseFloat($("#txtTenure").val() * 12); //parseFloat($("#txtTenure").val());
        //alert('n:' + n);
        if (P !== 0 && n !== 0 && r !== 0) {
            //alert('1');
            //EMI = [P x R x (1+R)^N]/[(1+R)^N-1]

            emi = (P * r * [Math.pow((1 + r), n)]) / ([Math.pow((1 + r), (n))] - 1);

            TotalAmtPaid = (emi * n);
            TotalAmtPaid = TotalAmtPaid.toFixed(0);

            //alert(TotalAmtPaid);

            InterestPaid = (TotalAmtPaid - P);
            InterestPaid = commaSeparateNumber(InterestPaid);
            //alert(InterestPaid);

            //emi = (9920000 * 0.008333333 * [Math.pow((1 + 0.008333333), 180)]) / ([Math.pow((1 + 0.008333333), (180))] - 1);
            //emi1 = (9920000 * 0.008333333 * [Math.pow((1 + 0.008333333), 180)]);
            //emi2 = ([Math.pow((1 + 0.008333333), (180))] - 1);

            //alert(emi1);
            //alert(emi2);
            //alert(emi);

            TotalAmtPaid = commaSeparateNumber(TotalAmtPaid);
            emi = commaSeparateNumber(emi.toFixed(0));
            //alert(emi);
            $("#spEMIAmt").text(emi);
            $("#spTotalPaid").text(TotalAmtPaid);
            $("#spInterestPaid").text(InterestPaid);

        }
    }
}

function commaSeparateNumber(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return val;
}