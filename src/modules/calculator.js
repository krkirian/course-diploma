const calculator = () => {
    const form = document.getElementById('card_order'),
          oneMonth = document.getElementById('m1'),
          sixMonth = document.getElementById('m2'),
          nineMonth = document.getElementById('m3'),
          twelveMonth = document.getElementById('m4'),
          mozaikaBtn = document.getElementById('card_leto_mozaika'),
          schelkovoBtn = document.getElementById('card_leto_schelkovo'),
          priceInput = document.getElementById('price-total'),
          promo = form.querySelectorAll('input[name="name"]')[0],
          name = form.querySelectorAll('input[name="name"]')[1],
          phone = document.getElementById('callback_form-phone'),
          agreementBtn = document.getElementById('card_check'),
          submitBtn = document.querySelectorAll('card-order-btn');

    
    form.addEventListener('change', () => {
            if (oneMonth.checked && mozaikaBtn.checked) {
                if (promo.value === 'ТЕЛО2019'){
                    let price = 1999;
                    priceInput.textContent = `${Math.round(+price * 0.7)}`;
                } else {
                    priceInput.textContent = '1999';
                }
            } else if (sixMonth.checked && mozaikaBtn.checked) {
                if (promo.value === 'ТЕЛО2019'){
                    let price = 9999;
                    priceInput.textContent = `${Math.round(+price * 0.7)}`;
                } else {
                    priceInput.textContent = '9990';
                }
            } else if (nineMonth.checked && mozaikaBtn.checked) {
                if (promo.value === 'ТЕЛО2019'){
                    let price = 13990;
                    priceInput.textContent = `${Math.round(+price * 0.7)}`;
                } else {
                    priceInput.textContent = '13990';
                }
            } else if (twelveMonth.checked && mozaikaBtn.checked) {
                if (promo.value === 'ТЕЛО2019'){
                    let price = 19990;
                    priceInput.textContent = `${Math.round(+price * 0.7)}`;
                } else {
                    priceInput.textContent = '19990';
                }
            } else if (oneMonth.checked && schelkovoBtn.checked) {
                if (promo.value === 'ТЕЛО2019'){
                    let price = 2990;
                    priceInput.textContent = `${Math.round(+price * 0.7)}`;
                } else {
                    priceInput.textContent = '2990';
                }
            } else if (sixMonth.checked && schelkovoBtn.checked) {
                if (promo.value === 'ТЕЛО2019'){
                    let price = 14990;
                    priceInput.textContent = `${Math.round(+price * 0.7)}`;
                } else {
                    priceInput.textContent = '14990';
                }
            } else if (nineMonth.checked && schelkovoBtn.checked) {
                if (promo.value === 'ТЕЛО2019'){
                    let price = 21990;
                    priceInput.textContent = `${Math.round(+price * 0.7)}`;
                } else {
                    priceInput.textContent = '21990';
                }
            } else if (twelveMonth.checked && schelkovoBtn.checked) {
                if (promo.value === 'ТЕЛО2019'){
                    let price = 24990;
                    priceInput.textContent = `${Math.round(+price * 0.7)}`;
                } else {
                    priceInput.textContent = '24990';
                }
            };

    });



};

export default calculator;