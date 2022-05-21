const input = document.getElementById("input");

function getValue(num){ 
    input.value += num;
  }

  function totalValue() {
    input.value = eval(input.value);
  }

  function allClear() {
    input.value = "";
  }

  function valueRemove(){
    input.value = input.value.slice(0, -1)
  }



  