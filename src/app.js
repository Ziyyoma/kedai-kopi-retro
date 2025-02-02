document.addEventListener('alpine:init', () => {
    Alpine.data('product', () => ({
        items: [
            { id: 1, name: 'Coffee Beans Arabica 100gr', img: 'product1.jpg', price: '49.000' },
            { id: 2, name: 'Coffee Beans Robusta 100gr', img: 'product2.jpg', price: '80.000' },
            { id: 3, name: 'Coffee Beans Liberica 100gr', img: 'product3.jpg', price: '39.000' },
            { id: 4, name: 'Coffee Beans Excelsa 100gr', img: 'product4.jpg', price: '25.000' },
            { id: 5, name: 'Coffee Beans Aceh Gayo 100gr', img: 'product5.jpg', price: '98.000' },
        ],
    }));
});