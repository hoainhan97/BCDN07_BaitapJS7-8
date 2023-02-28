// NHẬP VÀO CÁC SỐ NGUYÊN

var numArray = [];
function addNumToArray() {
   var num = Number(document.querySelector("#addNum").value);
   numArray.push(num);
   console.log(numArray);
   document.querySelector("#txtAddNum").innerHTML = numArray;

}
document.querySelector("#btnaddNum").onclick = addNumToArray;

// 1. TÍNH TỔNG SỐ DƯƠNG 
function sum() {
   var total = 0;
   for (var i = 0; i < numArray.length; i++) {
      if (numArray[i] > 0) {
         total += numArray[i];
      }
   }
   document.querySelector("#sum").innerHTML = total;
}
document.querySelector("#btnsum").onclick = sum;

// 2.ĐẾM SỐ DƯƠNG
function countNum() {
   var count = 0;
   for (var i = 0; i < numArray.length; i++) {
      if (numArray[i] > 0) {
         count++;
         console.log(count)
      }
   }
   document.querySelector("#countNum").innerHTML = count;
}
document.querySelector("#btncountNum").onclick = countNum;

//3. Tìm số nhỏ nhất

function findNumSmall() {
   var min = numArray[0];
   var indexMin = 0;

   for (var i = 0; i < numArray.length; i++) {
      if (min > numArray[i]) {
         min = numArray[i]
         indexMin = i;
      }

   }
   document.querySelector("#findNumSmall").innerHTML = min;
}
document.querySelector("#btnfindNumSmall").onclick = findNumSmall;


// 4. Tìm số dương nhỏ nhất
function findPoisiSmall() {
   var minPoisi = numArray[0]
   var indexMinPoisi = 0;

   for (var i = 0; i < numArray.length; i++) {
      if (minPoisi > numArray[i] && numArray[i] > 0) {
         minPoisi = numArray[i]
         indexMinPoisi = i;
      }

   }
   document.querySelector("#PoisiNumSmall").innerHTML = minPoisi;
}

document.querySelector("#btnPoisiNumSmall").onclick = findPoisiSmall;


// 5. Tìm số chẵn cuối cùng 

function lastEvenNum() {
   var evenNum = 0;
   for (var i = 0; i < numArray.length; i++) {
      if (numArray[i] % 2 == 0) {
         evenNum = numArray[i]
      }

   }
   document.querySelector("#EvenNum").innerHTML = "Số chẵn cuối cùng:" + evenNum;
}
document.querySelector("#btnEvenNum").onclick = lastEvenNum;


// 6. Đổi chỗ 

function changePlace() {
   var index1 = Number(document.querySelector("#index1").value);
   var index2 = Number(document.querySelector("#index2").value);
   var temp = numArray[index1];
   numArray[index1] = numArray[index2];
   numArray[index2] = temp
   document.querySelector("#ChangeNum").innerHTML = numArray;
}
document.querySelector("#btnChange").onclick = changePlace;


// 7.Sắp xếp tăng dần 

function sortNum() {
   var numArrayCopy = [];
   for (var i = 0; i < numArray.length; i++) {
      numArrayCopy.push(numArray[i])
   }

   numArrayCopy.sort(function (a,b) {
      return a - b;


      
   });
   document.querySelector("#sortNum").innerHTML = numArrayCopy;
}
document.querySelector("#btnSortNum").onclick = sortNum;

// 8. Tìm số nguyên tố đầu tiên 

function findPrime() {
   var numPrime = 0;
   for (var i = 0; i < numArray.length; i++) {
     if (numArray[i] % i == 0 && numArray[i] % 1 == 0) {
       numPrime = i;
     }
     
     
   }
   document.querySelector("#NumPrime").innerHTML = numPrime;
   
}
document.querySelector("#btnNumPrime").onclick = findPrime;


// 9. Đếm số nguyên 

function countInteger() {
   var countInter = 0;
   for (var i = 0; i < numArray.length; i++) {
      if (Number.isInteger(numArray[i])) {
         countInter++;
      }

   }
   document.querySelector("#CountInter").innerHTML = countInter;
}

document.querySelector("#btnCountInter").onclick = countInteger;


// 10. So sánh số lượng số âm và số dương 
function compareNum() {
   var poisiNum = 0;
   var negatiNum = 0;
   for (var i = 0; i < numArray.length; i++) {
     if (numArray[i] > 0) {
      Number.isInteger(poisiNum++);
     } else if (numArray[i] < 0) {
      Number.isInteger(negatiNum++);
     }
      
   }
   if (poisiNum > negatiNum ) {
      document.querySelector("#CompareNum").innerHTML = "Số dương > Số âm";
   } else if (poisiNum < negatiNum ) {
      document.querySelector("#CompareNum").innerHTML = "Số dương < Số âm";
   } else {
      document.querySelector("#CompareNum").innerHTML = "Số dương = Số âm";
   }
}
document.querySelector("#btnCompareNum").onclick = compareNum;



