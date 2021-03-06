import Client from '../../dist/client';

document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');

    function log(label, data) {
        // console.log(label, data);
        const details = document.createElement('details');

        const summary = document.createElement('summary');
        summary.innerHTML = label;
        details.appendChild(summary);

        const contents = document.createElement('div');
        const pre = document.createElement('pre');
        pre.classList.add('prettyprint');
        pre.innerHTML = JSON.stringify(data, null, 4);
        contents.appendChild(pre);
        details.appendChild(contents);

        output.appendChild(details);

        window.prettyPrint();
    }

    function fail(label, errors) {
        if (errors instanceof Error) {
            // console.error(errors);
            return log(`${label} (error)`, { error: errors.toString() });
        }

        return log(`${label} (failed)`, errors);
    }

    const client = new Client({
        store: 'local.sampotts.me',
        env: 'local',
    });

    // Expose
    window.client = client;

    log('Client', client);

    function getCart(currency) {
        return new Promise((resolve, reject) => {
            if (window.cart) {
                resolve(window.cart);
                return;
            }

            client
                .getCart(currency)
                .then(cart => {
                    log('Get cart', cart);

                    window.cart = cart;

                    resolve(cart);
                })
                .catch(error => reject(error));
        });
    }

    function addToCart(product) {
        getCart(product.currency_code)
            .then(cart => {
                let variant = null;

                if (typeof product.variant === 'string' && product.variant.length) {
                    ({ variant } = product);
                } else if (product.variants && product.variants.length) {
                    variant = product.variants[0].id;
                }

                cart.add({
                    id: product.id,
                    quantity: 2,
                    variant_id: variant,
                })
                    .then(updatedCart => {
                        log('Add to cart', updatedCart);

                        window.cart = updatedCart;
                    })
                    .catch(error => fail('Add to cart', error));
            })
            .catch(error => fail('Get cart', error));
    }

    const products = {
        GBP: 'http://selz.co/1MaSYRU',
        USD: 'http://selz.co/1rvbhT6',
    };

    client
        .getProduct(products.GBP)
        .then(product => {
            log('Product', product);

            // Expose
            window.product = product;

            addToCart(product);
        })
        .catch(errors => fail('Product', errors));

    // Listen for messages from parent
    /* window.addEventListener('message', event => {
        // console.warn(event.data);
        const json = JSON.parse(event.data);

        if (json.key !== 'add-to-cart') {
            return;
        }

        addToCart(json.data);
    }); */
});
