let cal=document.querySelector('.btn');
cal.addEventListener("click",calc);


function calc(){
 let amt=document.querySelectorAll('.des')[0];
 let int=document.querySelectorAll('.des')[1];
 let yrs=document.querySelectorAll('.des')[2];
 let loanAmt,interest,years;

    loanAmt=(parseFloat(amt.value).toFixed(2)); 
    interest=(parseFloat(int.value).toFixed(2)); 
    years=(parseFloat(yrs.value).toFixed(1)); 
    let styles = `
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-top: 5px;
    padding: 5p;
   `  
  document.querySelector('#res').setAttribute('style',styles);

  let monthlyIns=TotalInt=Totalamt=0.0;
  let res=document.querySelectorAll('.des.res');
  // monthly installment
  monthlyIns = (loanAmt/100) * interest;
  // total interest amount
  TotalInt=monthlyIns * (years*12);
  // total amount
  Totalamt=(parseFloat(TotalInt)+parseFloat(loanAmt));

if(isFinite(monthlyIns)&&isFinite(TotalInt)&&isFinite(Totalamt)){
  res[0].value=monthlyIns.toFixed(2);
  res[1].value=TotalInt.toFixed(2);
  res[2].value=Totalamt.toFixed(2);

}else{
  error("Something went wrong.Please check");
 document.querySelector('#res').setAttribute('style','display:none');
  
}
}

  
function error(txt){
  let err=document.createElement('h2');
  err.appendChild(document.createTextNode(txt));
  err.style.backgroundColor='rgba(0,0,255,0.2)';
  err.style.border='1px solid blue';
  err.style.borderRadius='50px';
  let head1=document.querySelector('h1');
  let form=document.querySelector('#form');
  form.insertBefore(err,head1);
  setTimeout(removeError,3000);
}

function removeError(){
  document.querySelector('h2').remove();
}






