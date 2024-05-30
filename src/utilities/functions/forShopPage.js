
    //--- This function will show only 'Urban' catagory
    export function showUrban() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');
            let productTitle = document.querySelector('.product-title');
            productTitle.innerText = 'Urban Photography';

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe')

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.remove('hideMe');
        }, 500);
    }

    //--- This function will show only 'Street' catagory
    export function showStreet() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');
            let productTitle = document.querySelector('.product-title');
            productTitle.innerText = 'Street Photography';


            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');

            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.remove('hideMe');
        }, 500);
    }

    //--- This function will show only 'Wild Div' catagory
    export function showWild() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');
            let productTitle = document.querySelector('.product-title');
            productTitle.innerText = 'Wild Photography';

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');

            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.remove('hideMe');

        }, 500);
    }

    //--- This function will show only 'Citylife Div' catagory
    export function showCitylife() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');
            let productTitle = document.querySelector('.product-title');
            productTitle.innerText = 'City Life Photography';

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');

            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.remove('hideMe');

        }, 500);
    }

    //--- This function will show only 'Others Div' catagory
    export function otherslife() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');
            let productTitle = document.querySelector('.product-title');
            productTitle.innerText = 'Others Photography';

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');

            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.remove('hideMe');

        }, 500);
    }
    //--- This function will show only 'All' catagory
    export function showAll() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');
            let productTitle = document.querySelector('.product-title');
            productTitle.innerText = 'All Photography';

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.remove('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');

            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');

        }, 500);
    }