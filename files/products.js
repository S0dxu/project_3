fetch('/files/products.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="/img/${product.img}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Prezzo: ${product.price}</p>
                <button class="buy-button" onclick="openModal(${index})">COMPRA</button>
                <div id="myModal${index}" class="modal">
                    <div class="modal-content">
                        <span class="close" onclick="closeModal(${index})">&times;</span>
                        <h2>${product.name}</h2>
                        <div class="line"></div>
                        <p>${product.buy}</p>
                        <img class="img2" src="/img/${product.img2}">
                        <p>${product.information}</p>
                        <div class="line"></div>
                        <div class="buy">
                        <h3>Prezzo: ${product.price}</p>
                        <button class="buy-btn">COMPRA</button>
                        </div>
                    </div>
                </div>
            `;
            document.getElementById('main-content').appendChild(productDiv);
        });
    });
