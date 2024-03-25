function calculateNetSalary (basicsalary,benefits){

    const grossSalary= basicsalary+benefits

    const taxrate=0.25
    const nhifrate=0.1
    const nssfrate=0.02

    
// calculate gross salary which is equal to basic salary plus benefits

    const tax=grossSalary * taxrate
    const nhif=grossSalary * nhifrate
    const nssf=grossSalary * nssfrate
//calculate gross salary and rates to give out required deductions
    const NetSalary=grossSalary-(tax+nhif+nssf)
    return{
        grossSalary,
        tax,
        nhif,
        nssf,
        NetSalary
// calculate netsalary by subtracting the gross salary from the deductions which are the (tax,nhif,nssf)

    };
}
const basicsalary=24000;
const benefits=1080;
const result =calculateNetSalary(basicsalary,benefits);
console.log("grossSalary:",result.grossSalary);// its gives the results of gross salary after calculation
console.log("tax:",result.tax);//its gives the results of the tax rate after calculation
console.log("nhif:",result.nhif)//its gives the results of the nhif deduction after calculation
console.log("nssf:",result.nssf)// its gives results of nssf deduction after calculation
console.log("NetSalary:",result.NetSalary)// its gives result if net salary after all calculation
//its shows all the result of all the calcultions