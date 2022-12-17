var a = [
    {
        StudentName:"Areeba" ,
        FatherName:"Hassan" ,
        RollNum: 551,
        Id: 01,
        Cnic: 42401,
        TotalNum: 220,
    },
    {
        StudentName:"Aisha" ,
        FatherName:"Ali" ,
        RollNum: 552,
        Id: 02,
        Cnic: 42402,
        TotalNum: 222,
    },
    {
        StudentName:"Sana" ,
        FatherName:"Salman" ,
        RollNum: 553,
        Id: 03,
        Cnic: 42403,
        TotalNum: 224,
    },
    {
        StudentName:"Tuba" ,
        FatherName:"Sohaib" ,
        RollNum: 554,
        Id: 04,
        Cnic: 42404,
        TotalNum:221 ,
    },
    {
        StudentName:"Kanwal" ,
        FatherName:"Zubair" ,
        RollNum: 555,
        Id: 05,
        Cnic: 42405,
        TotalNum: 225,
    },
    {
        StudentName:"Hina" ,
        FatherName:"Zohaib" ,
        RollNum: 556,
        Id: 06,
        Cnic: 42406,
        TotalNum:227 ,
    },
    {
        StudentName:"Farah" ,
        FatherName:"Furqan" ,
        RollNum: 557,
        Id: 07,
        Cnic: 42407,
        TotalNum:226 ,
    },
    {
        StudentName:"Rima" ,
        FatherName:"Jibran" ,
        RollNum: 558,
        Id: 08,
        Cnic: 42408,
        TotalNum:229 ,
    },
    {
        StudentName:"Roma" ,
        FatherName:"Zeeshan" ,
        RollNum: 559,
        Id: 09,
        Cnic: 42409,
        TotalNum:228 ,
    },
    {
        StudentName:"Sania" ,
        FatherName:"Tayyab" ,
        RollNum: 560 ,
        Id: 10,
        Cnic: 42400,
        TotalNum: 230,
    }
]


var StudentName = document.getElementById("nam");
var FatherName = document.getElementById("fname");
var RollNum = document.getElementById("rolln");
var Id = document.getElementById("id");
var Cnic = document.getElementById("cnic");
var TotalNum = document.getElementById("tnum");
var Result = document.getElementById("reslt");

function SearchStd1() {
    for (var i=0; i<a.length; i++) {
        if ( a[i].StudentName == nam.value)
        console.log(a[i]);
    }
}

function SearchStd2() {
    for (var i=0; i<a.length; i++) {
        if ( a[i].FatherName == fname.value)
        console.log(a[i]);
    }
}

function SearchStd3() {
    for (var i=0; i<a.length; i++) {
        if ( a[i].RollNum == rolln.value)
        console.log(a[i]);
    }
}

function SearchStd4() {
    for (var i=0; i<a.length; i++) {
        if ( a[i].Id == id.value)
        console.log(a[i]);
    }
}

function SearchStd5() {
    for (var i=0; i<a.length; i++) {
        if ( a[i].Cnic == cnic.value)
        console.log(a[i]);
    }
}

function SearchStd6() {
    for (var i=0; i<a.length; i++) {
        if ( a[i].TotalNum == tnum.value)
        console.log(a[i]);
    }
}


function Submit() {
  result.innerHTML = nam.value
  console.log(result.innerHTML)
}

