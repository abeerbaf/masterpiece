let taxPeriod = document.querySelectorAll(".tax-period")
let basicSalary = document.querySelector(".salary");
let totalBenefits = document.querySelector(".benefits");
let nssfDeduct = document.querySelectorAll(".nssfDeduct");
let NssfRates = document.querySelectorAll(".nssfRates");
let nhifDeduct = document.querySelectorAll(".nhifDeduct");

 //alert(taxPeriod[0].classList)


 //taxPeriod[0].addEventListener("change", ()=>{alert("checkbox clicked!!!")})
 //In variables
 let period = 'month';
 let nssf = "yes";
 let rates = "new"
 let nhif = 'yes'

 


function checkbox(){
  for(let i = 0; i< 2 ; i++){
    taxPeriod[i].addEventListener('change', ()=>{
       //console.log(taxPeriod[i].value)
       period = taxPeriod[i].value;
      
    })
    nssfDeduct[i].addEventListener('change', ()=>{
      nssf = nssfDeduct[i].value
    })
    NssfRates[i].addEventListener('change', ()=>{
      rates = NssfRates[i].value;
    })
    nhifDeduct[i].addEventListener('change', ()=>{
      nhif = nhifDeduct[i].value;
    })
  }

}

//To Calculate salary deductions
function TaxDeduction(sal,prd, nssfDed){
  let taxableIncome=  sal-nssfDed;
  if (prd === 'month'){
     if(taxableIncome <= 12298){
      let tax = taxableIncome*0.1;
      return tax;
     }else if(taxableIncome <= 23885){
      let tax = taxableIncome*0.15;
      return tax;
     }else if(taxableIncome <= 35472){
      let tax = taxableIncome*0.2;
      return tax;
     }else if(taxableIncome <= 47059){
        let tax = taxableIncome*0.25;
        return tax;
     }else if(taxableIncome > 47059){
        let tax= taxableIncome *0.3;
        return tax;
     }
  }else{
    if(taxableIncome <= 147580){
      let tax = taxableIncome*0.1;
      return tax;
    }else if(taxableIncome <= 286623){
      let tax = taxableIncome*0.15;
      return tax;
    }else if(taxableIncome <= 425666){
      let tax = taxableIncome*0.2;
      return tax;
    }else if (taxableIncome  <= 564709){
      let tax = taxableIncome * 0.25;
      return tax;
    }else if(taxableIncome > 564709){
      let tax = taxableIncome* 0.3;
      return tax;
    }
  }

}



//To Calculate NHIF deductions
function NHIFDeduction(sal, prd){
  let monthlySal;
  prd === 'year'? monthlySal = sal/12 : monthlySal = sal
   
    if(monthlySal <= 5999){
      let deduct = 150
      return deduct
    }else if(monthlySal <= 7999){
      let deduct = 300;
      return deduct
    }else if(monthlySal <= 11999){
      let deduct = 400;
      return deduct
    }else if(monthlySal <= 14999){
      let deduct = 500;
      return deduct
    }else if(monthlySal <19999){
      let deduct = 600;
      return deduct
    }else if(monthlySal <= 24999){
      let deduct = 750;
      return deduct
    }else if(monthlySal <= 29999){
      let deduct = 850;
      return deduct
    }else if(monthlySal <= 34999){
      let deduct = 900;
      return deduct
    }else if (monthlySal <= 39999){
      let deduct = 950;
      return deduct
    }else if(monthlySal <=44999){
      let deduct = 1000;
      return deduct
    }else if(monthlySal <= 49999){
      let deduct = 1100;
      return deduct
    }else if(monthlySal <= 59999){
      let deduct = 1200;
      return deduct
    }else if(monthlySal <= 69999){
      let deduct = 1300;
      return deduct
    }else if(monthlySal <= 79999){
      let deduct = 1400;
      return deduct
    }else if (monthlySal <= 89999){
      let deduct = 1500;
      return deduct
    }else if (monthlySal <= 99999){
      let deduct = 1600;
      return deduct
    }else if(monthlySal >= 100000){
      let deduct = 1700;
      return deduct
     }//else{
    //   let deduct = 500;
    //   console.log(`NHIF deduction : ${monthlySal-deduct}`)
    // }


}


//To Calculate NSSF deductions
function NssfDeduction(sal, choice, prd){
  let monthlySal;
   prd === 'year'? monthlySal = sal/12 : monthlySal = sal
   if(choice === 'yes'){
     if(monthlySal <= 5999){
      let deduct = monthlySal *0.06;
      console.log(`NSSF Deductions ${deduct}`)
      return deduct
      //console.log("The salary is less than 60000", sal)
     }else{
       let deduct = ((monthlySal - 6000) * 0.06)+360;
       console.log(`NSSF Deductions ${deduct}`)
      //console.log("The salary is grater than 6000", sal)
      return deduct
     }
    //console.log("The NSSF should be deducted!!!")

   }else{
    console.log("The NSSF should not be deducted!!!!")
   }

}

checkbox()
 function calculate_paye(){
  let salary = basicSalary.value
  let BasicSal = +basicSalary.value + +totalBenefits.value;
  let nhifDeduction = NHIFDeduction(BasicSal, period);
  let nssfDeduction =   NssfDeduction(BasicSal, nssf, period)
  let tax =   TaxDeduction(BasicSal, period, nssfDeduction);
  let taxNetOffRelief = (tax - 2400) < 0 ?  "0.00" : tax-2400;
  let TotalDeductions = tax + nhifDeduction + nssfDeduction;
  
  //let benefits = totalBenefits.value;
  //TaxDeduction(BasicSal, period);
  // console.log(NssfDeduction(BasicSal, nssf, period))
  // console.log(`
  // Income before pension : ${salary} \n
  // Deductible NSSF : ${nssfDeduction} \n
  // Income afer pension :  ${+salary - nssfDeduction} \n
  // Benefits in kind : ${totalBenefits.value} \n
  // Taxable income : ${BasicSal} \n
  // Tax on taxable income : ${tax} \n
  // personal relief : 2,400 \n
  // Tax net off Relief : ${taxNetOffRelief} \n
  // PAYE : 24000 \n
  // Chargeable Income : ${BasicSal} \n
  // NHIF contribution : ${NHIFDeduction(BasicSal, period)} \n
  // NET Pay : ${BasicSal - TotalDeductions}

  // `)





   //Posting the results to the table
 let allCells = document.querySelectorAll(".results-amount")
 let resultsArr = [salary, nssfDeduction, (+salary - nssfDeduction), totalBenefits.value, (BasicSal-nssfDeduction), tax,  2400, taxNetOffRelief, 2400, BasicSal, nhifDeduction, (BasicSal-TotalDeductions)]
//console.log(resultsArr)
 for(i=0 ; i < allCells.length; i++){
  allCells[i].innerText = resultsArr[i]
  //console.log(allCells[i],resultsArr[i]);
 }




 }