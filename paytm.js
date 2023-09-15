const handleForm = (e) => {
  e.preventDefault();
};

const payButton = document.getElementsByClassName("pay");
console.log(payButton);

function handlePayButton() {
  // ---------------------------DATE TIME FUNCTION----------------------
  function date_time() {
    var date_time = new Date();
    date_time_array = date_time.toDateString().split(" ");
    // console.log(date_time_array);

    function formatAMPM() {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    }

    a = formatAMPM();
    // console.log(a);
    b = date_time_array[2] + " " + date_time_array[1] + " " + a;
    // console.log(b);
    return date_time_array[2] + " " + date_time_array[1] + ", " + a;
  }
  var datetime = date_time();
  console.log(date_time());
  // -----------------------------------------------------------------------------

  const name = document.getElementsByClassName("input-name")[0].value;
  const mobile = document.getElementsByClassName("input_mobile_number")[0]
    .value;
  const upi = document.getElementsByClassName("input_upi_id")[0].value;
  const amount = document.getElementsByClassName("input_amount")[0].value;
  // console.log(name[0].value);

  const person_name = document.getElementsByClassName("person-name");
  person_name[0].innerHTML = name;
  person_name[0].innerText = name;

  const person_amount = document.getElementsByClassName("amount_no");
  // console.log(person_amount);
  person_amount[0].innerHTML = amount;
  person_amount[0].innerText = amount;

  const person_upi = document.getElementsByClassName("person-upi");
  // console.log(person_upi);
  person_upi[0].innerHTML = upi;
  person_upi[0].innerText = upi;

  const tnx_date_time = document.getElementsByClassName("date_time");
  tnx_date_time[0].innerHTML = datetime;
  tnx_date_time[0].innerText = datetime;

  var name_array = name.split(" ");
  img_name = name_array[0][0] + name_array[name_array.length - 1][0];
  const logo_image = document.getElementsByClassName("logo_name");
  logo_image[0].innerHTML = img_name;
  logo_image[0].innerText = img_name;

  const reciept = document.getElementById("reciept");
  console.log(reciept);
  reciept.classList.toggle("reciept");
}

function handleBackarrow() {
  const reciept = document.getElementById("reciept");
  console.log(reciept);
  reciept.classList.toggle("reciept");
  const name = (document.getElementsByClassName("input-name")[0].value = "");
  const mobile = (document.getElementsByClassName(
    "input_mobile_number"
  )[0].value = "");
  const upi = (document.getElementsByClassName("input_upi_id")[0].value = "");
  const amount = (document.getElementsByClassName("input_amount")[0].value =
    "");
}

function takeOnlyNumbersforAmount(event) {
  if (typeof event.key === int) {
    alert("Enter numerics");
  }
}
