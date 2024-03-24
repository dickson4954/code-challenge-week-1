function calculateNetSalary (basicsalary,benefits){

    const grossSalary= basicsalary+benefits

    const taxrate=0.25
    const nhifrate=0.1
    const nssfrate=0.02

    


    const tax=grossSalary * taxrate
    const nhif=grossSalary * nhifrate
    const nssf=grossSalary * nssfrate

    const NetSalary=grossSalary-(tax+nhif+nssf)
    return{
        grossSalary,
        tax,
        nhif,
        nssf,
        NetSalary


    };
}
const basicsalary=24000;
const benefits=1080;
const result =calculateNetSalary(basicsalary,benefits);
console.log("grossSalary:",result.grossSalary);
console.log("tax:",result.tax);
console.log("nhif:",result.nhif)
console.log("nssf:",result.nssf)
console.log("NetSalary:",result.NetSalary)