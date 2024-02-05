const admin = require('firebase-admin');
const serviceAccount = require('./path/to/your/serviceAccountKey.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const testData = [
  { name: 'Product 1', price: 19.99, description: 'Sample description 1', image: 'url1' },
  { name: 'Product 2', price: 29.99, description: 'Sample description 2', image: 'url2' },
];

const addTestData = async () => {
  const batch = db.batch();

  testData.forEach((productData) => {
    const newProductRef = db.collection('products').doc();
    batch.set(newProductRef, productData);
  });

  await batch.commit();
  console.log('Test data added to Firestore collection.');
};

addTestData();
