const numberPad = document.getElementById('number-pad');

for (let i = 0; i <= 99; i++) {
  const number = i.toString().padStart(2, '0');
  const btn = document.createElement('button');
  btn.textContent = number;
  btn.onclick = () => selectNumber(number);
  numberPad.appendChild(btn);
}

function selectNumber(number) {
  const price = document.getElementById('price').value;
  const reverse = document.getElementById('reverse-number').checked;
  const list = document.getElementById('lotto-list');

  if (!price) {
    alert('กรุณาใส่ราคา');
    return;
  }

  const li = document.createElement('li');
  li.textContent = `เลข: ${number} ราคา: ${price} บาท ${reverse ? '(กลับเลข)' : ''}`;
  list.appendChild(li);
}


